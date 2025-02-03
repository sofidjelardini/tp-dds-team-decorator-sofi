'use client';
import React, { useEffect, useState } from 'react';
import personasVulnerablesData from '@/data/personas-vulnerables.json';
import tarjetasData from '@/data/tarjetas.json';
import { Button } from '@/components/ui/button';
import dataUsuarios from '@/data/usuarios.json';

const RegistroPersonasVulnerables: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [fechaNacimiento, setFechaNacimiento] = useState<string>('');
    const [situacion, setSituacion] = useState<'calle' | 'domicilio'>('calle');
    const [direccion, setDireccion] = useState<string>('');
    const [tipoDoc, setTipoDoc] = useState<string>('DNI');
    const [numDoc, setNumDoc] = useState<string>('');
    const [tieneMenores, setTieneMenores] = useState<boolean>(false);
    const [cantMenores, setCantMenores] = useState<number | string>('');
    const [mensaje, setMensaje] = useState<string>('');
    const [userId, setUserId] = useState<string | null | undefined>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalEliminadoVisible, setModalEliminadoVisible] =
        useState<boolean>(false);

    const [asegurarDelete, setAsegurarDelete] = useState<boolean>(false);
    const [dniPersonaAEliminar, setDniPersonaAEliminar] = useState<any>();
    const [personasRegistradasPorUserId, setPersonasRegistradasPorUserId] =
        useState<any>();
    const [tarjetasSinAsignar, setTarjetasSinAsignar] = useState<any>();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        buscarPersonasRegistradas();
    }, [userId]);

    useEffect(() => {
        setTarjetasSinAsignar(
            tarjetasData.tarjetasAsignadas.filter(
                tarjeta =>
                    tarjeta.colaboradorId === userId &&
                    tarjeta.tarjetaAsignadaAPersonaVulnerable === false
            )
        );
    }, [userId]);

    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        } else if (modalEliminadoVisible) {
            const timer = setTimeout(() => {
                setModalEliminadoVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [modalVisible, modalEliminadoVisible]);

    const buscarPersonasRegistradas = () => {
        setPersonasRegistradasPorUserId(
            personasVulnerablesData.filter(
                persona => persona.colaborador === userId
            )
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const tarjetaAsignada = tarjetasSinAsignar[0];
        tarjetaAsignada.tarjetaAsignadaAPersonaVulnerable = true;
        tarjetaAsignada.usuario = numDoc;

        const personaData = {
            nombre,
            fechaNacimiento,
            situacion,
            direccion: situacion === 'domicilio' ? direccion : '',
            tipoDoc,
            numDoc,
            tieneMenores: tieneMenores ? true : false,
            cantMenores: tieneMenores ? Number(cantMenores) : 0,
            colaborador: userId,
            fechaRegistro: new Date().toISOString(),
            tarjetaAsignada: tarjetaAsignada.numeroTarjeta
        };

        try {
            const responsePersona = await fetch('/api/personas-vulnerables', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(personaData)
            });

            await fetch('/api/tarjetas', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tarjetasDisponibles: tarjetasData.tarjetasDisponibles,
                    tarjetasAsignadas: [
                        ...tarjetasData.tarjetasAsignadas,
                        tarjetaAsignada
                    ]
                })
            });

            const result = await responsePersona.json();

            if (responsePersona.ok) {
                setModalVisible(true);
                buscarPersonasRegistradas();
                setNombre('');
                setFechaNacimiento('');
                setSituacion('calle');
                setDireccion('');
                setTipoDoc('DNI');
                setNumDoc('');
                setTieneMenores(false);
                setCantMenores('');
                await actualizarUsuario();
            } else {
                setMensaje(result.mensaje || 'Error al registrar la persona');
            }
        } catch (error) {
            console.error('Error al registrar la persona:', error);
            setMensaje('Error al registrar la persona');
        }
    };

    const actualizarUsuario = async () => {
        const usuario = dataUsuarios.find(
            usuario => usuario.documento === userId
        );
        const userData = {
            tarjetasRepartidas: (usuario?.tarjetasRepartidas || 0) + 1
        };

        await fetch(`/api/editar-perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...userData, userId })
        });
    };

    const eliminarPersonaVulnerable = async (
        documentoPersonaVulnerable: number
    ) => {
        try {
            const response = await fetch(`/api/personas-vulnerables`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    documentoPersonaVulnerable
                })
            });

            if (!response.ok) {
                throw new Error('Error al dar de baja persona');
            }
            buscarPersonasRegistradas();
            setModalEliminadoVisible(true);
        } catch (error) {
            console.error('Error en el envío:', error);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center mt-6'>
            <div className='w-3/4 justify-center bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>
                        Registrar Persona Vulnerable
                    </h2>
                    {mensaje && <div className='text-green-600'>{mensaje}</div>}
                    <div>
                        <label
                            htmlFor='nombre'
                            className='block text-sm font-medium'
                        >
                            Nombre:
                        </label>
                        <input
                            type='text'
                            id='nombre'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='fechaNacimiento'
                            className='block text-sm font-medium'
                        >
                            Fecha de Nacimiento:
                        </label>
                        <input
                            type='date'
                            id='fechaNacimiento'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={fechaNacimiento}
                            onChange={e => setFechaNacimiento(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>
                            Situación:
                        </label>
                        <select
                            value={situacion}
                            onChange={e =>
                                setSituacion(
                                    e.target.value as 'calle' | 'domicilio'
                                )
                            }
                            className='mt-1 p-2 border rounded-md w-full'
                        >
                            <option value='calle'>Calle</option>
                            <option value='domicilio'>Domicilio</option>
                        </select>
                    </div>
                    {situacion === 'domicilio' && (
                        <div>
                            <label
                                htmlFor='direccion'
                                className='block text-sm font-medium'
                            >
                                Dirección:
                            </label>
                            <input
                                type='text'
                                id='direccion'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={direccion}
                                onChange={e => setDireccion(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor='tipoDoc'
                            className='block text-sm font-medium'
                        >
                            Tipo de Documento:
                        </label>
                        <input
                            type='text'
                            id='tipoDoc'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={tipoDoc}
                            required
                            disabled
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='numDoc'
                            className='block text-sm font-medium'
                        >
                            Número de Documento:
                        </label>
                        <input
                            type='text'
                            id='numDoc'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={numDoc}
                            onChange={e => setNumDoc(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex items-center'>
                        <input
                            type='checkbox'
                            id='tieneMenores'
                            checked={tieneMenores}
                            onChange={e => setTieneMenores(e.target.checked)}
                        />
                        <label htmlFor='tieneMenores' className='ml-2'>
                            Tiene menores a cargo
                        </label>
                    </div>
                    {tieneMenores && (
                        <div>
                            <label
                                htmlFor='cantMenores'
                                className='block text-sm font-medium'
                            >
                                Cantidad de Menores a Cargo:
                            </label>
                            <input
                                type='number'
                                id='cantMenores'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={cantMenores}
                                onChange={e => setCantMenores(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button
                        className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                        type='submit'
                    >
                        Registrar Persona
                    </button>
                </form>
            </div>

            <section className='technicians-list w-full'>
                <h2 className='mt-7 text-lg font-semibold'>
                    Personas Registradas por usted :)
                </h2>
                <ul className='list-disc pl-5'>
                    {personasRegistradasPorUserId?.length > 0 ? (
                        <ul>
                            {personasRegistradasPorUserId.map(
                                (persona: any) => {
                                    return (
                                        <li
                                            key={persona.documento}
                                            className='flex justify-between items-center mb-2'
                                        >
                                            {persona?.nombre}
                                            <p>
                                                <b>Tarjeta Asignada: </b>
                                                {persona.tarjetaAsignada}
                                            </p>
                                            <div className='flex space-x-2'>
                                                <Button
                                                    onClick={() => {
                                                        setDniPersonaAEliminar(
                                                            persona.numDoc
                                                        );
                                                        setAsegurarDelete(true);
                                                    }}
                                                    className={
                                                        'w-auto bg-yellow-500 hover:bg-yellow-400'
                                                    }
                                                >
                                                    Dar de Baja
                                                </Button>
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    ) : (
                        <p>No registraste a nadie</p>
                    )}
                </ul>
            </section>

            {modalVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¡Persona Registrada!
                        </h3>
                        <p>
                            Gracias! La información se ha guardado exitosamente.
                        </p>
                    </div>
                </div>
            )}

            {modalEliminadoVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¡Persona Eliminada!
                        </h3>
                        <p>
                            Gracias! La información se ha guardado exitosamente.
                        </p>
                    </div>
                </div>
            )}

            {asegurarDelete && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¿Estás seguro que deseas eliminar a esta persona en
                            situación vulnerable?
                        </h3>
                        <p className='mb-5 mt-2 flex items-center justify-center'>
                            Si la eliminas, luego tendrás que cargarla
                            nuevamente.
                        </p>
                        <div className='flex items-center justify-evenly '>
                            <Button
                                onClick={() => {
                                    eliminarPersonaVulnerable(
                                        dniPersonaAEliminar
                                    );
                                    setAsegurarDelete(false);
                                }}
                                className={
                                    'w-auto bg-yellow-500 hover:bg-yellow-400'
                                }
                            >
                                Dar de Baja
                            </Button>
                            <Button
                                onClick={() => {
                                    setDniPersonaAEliminar(undefined);
                                    setAsegurarDelete(false);
                                }}
                                className={'w-auto bg-red-500 hover:bg-red-400'}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistroPersonasVulnerables;
