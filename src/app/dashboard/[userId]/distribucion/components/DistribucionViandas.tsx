import React, { useState, useEffect } from 'react';
import viandasData from '@/data/viandas.json';
import heladerasData from '@/data/heladeras.json';
import distribucionesData from '@/data/distribuciones.json';
import dataUsuarios from '@/data/usuarios.json';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const DistribucionViandasForm: React.FC = () => {
    const [heladeraOrigen, setHeladeraOrigen] = useState('');
    const [heladeraDestino, setHeladeraDestino] = useState('');
    const [viandasDisponibles, setViandasDisponibles] = useState<any[]>([]);
    const [motivo, setMotivo] = useState('');
    const [fecha, setFecha] = useState('');
    const [viandasAMover, setViandasAMover] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [userId, setUserId] = useState<string | null | undefined>();
    const distribucionesFiltradas = distribucionesData.filter(
        distribucion => distribucion.colaborador === userId
    );
    const viandasEntregables = distribucionesFiltradas.filter(
        (distribucion: any) =>
            viandasData.some(
                vianda =>
                    vianda.id === distribucion.viandaId &&
                    vianda.estado === 'No Entregada'
            )
    );

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        if (heladeraOrigen) {
            setViandasDisponibles(
                viandasData.filter(
                    viandas => viandas.heladera === Number(heladeraOrigen)
                )
            );
        } else {
            setViandasDisponibles([]);
        }
    }, [heladeraOrigen]);

    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [modalVisible]);

    const limpiarForm = () => {
        setHeladeraOrigen('');
        setHeladeraDestino('');
        setViandasDisponibles([]);
        setMotivo('');
        setFecha('');
        setViandasAMover([]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const distribuciones = viandasAMover.map(vianda => {
            return {
                id: Math.floor(Math.random() * 999999),
                viandaId: vianda,
                heladeraOrigen: Number(heladeraOrigen),
                heladeraDestino: Number(heladeraDestino),
                motivo,
                fecha,
                colaborador: userId
            };
        });

        try {
            const response = await fetch('/api/distribuciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(distribuciones)
            });

            if (!response.ok) {
                throw new Error('Error al guardar distribuciones');
            }

            for (const distribucion of distribuciones) {
                await actualizarUsuario();
                const response = await fetch(`/api/viandas`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: distribucion.viandaId,
                        heladera: distribucion.heladeraDestino,
                        estado: 'No Entregada'
                    })
                });

                if (!response.ok) {
                    throw new Error('Error al actualizar vianda');
                }
            }

            limpiarForm();
            setModalVisible(true);
        } catch (error) {
            console.error('Error en el envío:', error);
        }
    };

    const actualizarUsuario = async () => {
        const usuario = dataUsuarios.find(
            usuario => usuario.documento === userId
        );
        const userData = {
            viandasDistribuidas: usuario.viandasDistribuidas + 1
        };

        console.log('userData: ', userData);

        await fetch(`/api/editar-perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...userData, userId })
        });
    };

    const handleViandaChange = (viandaId: any, checked: string | boolean) => {
        if (checked) {
            setViandasAMover(prev => [...prev, viandaId]);
        } else {
            setViandasAMover(prev => prev.filter(id => id !== viandaId));
        }
    };

    const updateEstadoVianda = async (viandaId: number) => {
        try {
            const response = await fetch(`/api/viandas`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: viandaId,
                    estado: 'Entregada'
                })
            });

            if (!response.ok) {
                throw new Error('Error al actualizar vianda');
            }
        } catch (error) {
            console.error('Error en el envío:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>
                    Distribución de Viandas
                </h2>

                <div>
                    <label
                        htmlFor='heladeraOrigen'
                        className='block text-sm font-medium'
                    >
                        Heladera Origen:
                    </label>
                    <select
                        id='heladeraOrigen'
                        value={heladeraOrigen}
                        onChange={e => setHeladeraOrigen(e.target.value)}
                        required
                        className='mt-1 p-2 border rounded-md w-full'
                    >
                        <option value=''>Seleccione una Heladera</option>
                        {heladerasData.map(heladera => (
                            <option value={heladera.id}>
                                {heladera.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor='heladeraDestino'
                        className='block text-sm font-medium'
                    >
                        Heladera Destino:
                    </label>
                    <select
                        id='heladeraDestino'
                        value={heladeraDestino}
                        onChange={e => setHeladeraDestino(e.target.value)}
                        required
                        className='mt-1 p-2 border rounded-md w-full'
                    >
                        <option value=''>Seleccione una Heladera</option>
                        {heladerasData.map(heladera => (
                            <option value={heladera.id}>
                                {heladera.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor='viandas'
                        className='block text-sm font-medium'
                    >
                        Viandas Disponibles:
                    </label>

                    {viandasDisponibles.length > 0 ? (
                        <>
                            <p className='mt-3 mb-3'>
                                Seleccione las viandas que va a distribuir:
                            </p>
                            {viandasDisponibles.map(vianda => (
                                <div
                                    key={vianda.id}
                                    className='flex items-center'
                                >
                                    <Checkbox
                                        className='mr-3'
                                        onCheckedChange={checked =>
                                            handleViandaChange(
                                                vianda.id,
                                                checked
                                            )
                                        }
                                    />
                                    <span>{vianda.comida}</span>
                                </div>
                            ))}
                        </>
                    ) : heladeraOrigen !== '' ? (
                        <p>No hay viandas disponibles en esta heladera.</p>
                    ) : (
                        <p>
                            Seleccione la heladera origen para ver las viandas
                            disponibles.
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor='motivo'
                        className='block text-sm font-medium'
                    >
                        Motivo de la Distribución:
                    </label>
                    <select
                        id='motivo'
                        value={motivo}
                        onChange={e => setMotivo(e.target.value)}
                        required
                        className='mt-1 p-2 border rounded-md w-full'
                    >
                        <option value=''>Seleccione un motivo</option>
                        <option value='desperfecto'>
                            Desperfecto en la heladera
                        </option>
                        <option value='faltaViandas'>
                            Falta de viandas en la heladera destino
                        </option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor='fecha'
                        className='block text-sm font-medium'
                    >
                        Fecha de Distribución:
                    </label>
                    <input
                        type='date'
                        id='fecha'
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        required
                        className='mt-1 p-2 border rounded-md w-full'
                    />
                </div>

                <button
                    type='submit'
                    className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                >
                    Enviar
                </button>
            </form>

            <section className='technicians-list'>
                <h2 className='mt-7 text-lg font-semibold'>
                    Viandas a Entregar
                </h2>
                <ul className='list-disc pl-5'>
                    {viandasEntregables.length > 0 ? (
                        <ul>
                            {viandasEntregables.map((distribucion: any) => {
                                const vianda = viandasData.find(
                                    vianda =>
                                        vianda.id === distribucion.viandaId
                                );

                                return (
                                    <li
                                        key={distribucion.id}
                                        className='flex justify-between items-center mb-2'
                                    >
                                        {vianda?.comida} -{' '}
                                        {
                                            heladerasData.find(
                                                heladera =>
                                                    heladera.id ===
                                                    distribucion.heladeraDestino
                                            )?.nombre
                                        }
                                        <div className='flex space-x-2'>
                                            <Button
                                                onClick={() =>
                                                    updateEstadoVianda(
                                                        distribucion.viandaId
                                                    )
                                                }
                                                className={
                                                    'w-auto bg-yellow-500 hover:bg-yellow-400'
                                                }
                                            >
                                                Marcar como entregada
                                            </Button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p>No tienes viandas para entregar :)</p>
                    )}
                </ul>
            </section>

            {modalVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¡Distribución guardada!
                        </h3>
                        <p>
                            Gracias! La distribución se ha guardado
                            exitosamente.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DistribucionViandasForm;
