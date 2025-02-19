'use client';
import React, { useEffect, useState } from 'react';
import heladerasData from '@/data/heladeras.json';
import incidentesData from '@/data/incidentes.json';
import { Button } from '@/components/ui/button';

const FormularioIncidente: React.FC = () => {
    const [tipoIncidente, setTipoIncidente] = useState<
        'alerta' | 'fallaTecnica'
    >('alerta');
    const [subtipoAlerta, setSubtipoAlerta] = useState<
        'Temperatura' | 'Fraude' | 'Falla en Conexión' | ''
    >('');
    const [heladera, setHeladera] = useState<string>('');
    const [colaborador, setColaborador] = useState<string | null>('');
    const [descripcionFalla, setDescripcionFalla] = useState<string>('');
    const [fotoFalla, setFotoFalla] = useState<File | null>(null);
    const [mensaje, setMensaje] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setColaborador(localStorage.getItem('userId'));
    }, []);

    const isFormValid = () => {
        if (tipoIncidente === 'alerta') {
            return (
                heladera !== '' && subtipoAlerta !== '' && colaborador !== ''
            );
        } else {
            return (
                heladera !== '' && colaborador !== '' && descripcionFalla !== ''
            );
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const incidenteData = {
            id: Math.floor(Math.random() * 999999),
            tipo: tipoIncidente,
            subtipo: tipoIncidente === 'alerta' ? subtipoAlerta : undefined,
            heladeraId: heladera,
            fechaHora: new Date(),
            colaboradorId: colaborador,
            descripcion:
                tipoIncidente === 'fallaTecnica' ? descripcionFalla : undefined,
            foto:
                tipoIncidente === 'fallaTecnica' && fotoFalla
                    ? URL.createObjectURL(fotoFalla)
                    : undefined,
            visitas: [],
            solucionado: false
        };

        try {
            const response = await fetch('/api/incidentes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(incidenteData)
            });

            const result = await response.json();

            if (response.ok) {
                setError(false);
                setMensaje(result.mensaje);
                resetForm();
                await actualizarHeladera(
                    Number(incidenteData.heladeraId),
                    'Inactiva'
                );
            } else {
                setError(true);
                setMensaje(result.mensaje || 'Error al enviar el incidente');
            }
        } catch (error) {
            console.error('Error al enviar el incidente:', error);
            setMensaje('Error al enviar el incidente');
        }
    };

    const resetForm = () => {
        setHeladera('');
        setColaborador('');
        setDescripcionFalla('');
        setFotoFalla(null);
        setSubtipoAlerta('');
        setTipoIncidente('alerta');
    };

    const actualizarHeladera = async (
        heladeraId: number,
        estado: 'Activa' | 'Inactiva'
    ) => {
        const heladeraData = heladerasData.find(
            heladera => heladera.id === heladeraId
        );
        try {
            await fetch('/api/heladeras', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...heladeraData, estado })
            });
        } catch (error) {
            console.error('Error al editar la heladera:', error);
        }
    };

    const actualizarIncidente = async (incidenteId: number) => {
        const incidenteData = incidentesData.find(
            incidente => incidente.id === incidenteId
        );
        try {
            const response = await fetch('/api/incidentes', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...incidenteData, solucionado: true })
            });

            if (response.ok) {
                actualizarHeladera(Number(incidenteData?.heladeraId), 'Activa');
            }
        } catch (error) {
            console.error('Error al editar el incidente:', error);
            setMensaje('Error al editar el incidente');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>
                    Formulario de Incidentes
                </h2>
                {mensaje && (
                    <div className={error ? 'text-red-600' : 'text-green-600'}>
                        {mensaje}
                    </div>
                )}
                <div>
                    <label
                        htmlFor='tipoIncidente'
                        className='block text-sm font-medium'
                    >
                        Tipo de Incidente:
                    </label>
                    <select
                        id='tipoIncidente'
                        value={tipoIncidente}
                        onChange={e => {
                            setTipoIncidente(
                                e.target.value as 'alerta' | 'fallaTecnica'
                            );
                        }}
                        className='mt-1 p-2 border rounded-md w-full'
                    >
                        <option value='alerta'>Alerta</option>
                        <option value='fallaTecnica'>Falla Técnica</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor='heladera'
                        className='block text-sm font-medium'
                    >
                        Heladera:
                    </label>
                    <select
                        id='heladera'
                        value={heladera}
                        onChange={e => setHeladera(e.target.value)}
                        required
                        className='mt-1 p-2 border rounded-md w-full'
                    >
                        <option value=''>Seleccione una Heladera</option>
                        {heladerasData.map(heladera => (
                            <option key={heladera.id} value={heladera.id}>
                                {heladera.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                {tipoIncidente === 'alerta' && (
                    <div>
                        <label
                            htmlFor='subtipoAlerta'
                            className='block text-sm font-medium'
                        >
                            Subtipo de Alerta:
                        </label>
                        <select
                            id='subtipoAlerta'
                            value={subtipoAlerta}
                            onChange={e =>
                                setSubtipoAlerta(
                                    e.target.value as
                                        | 'Temperatura'
                                        | 'Fraude'
                                        | 'Falla en Conexión'
                                )
                            }
                            required
                            className='mt-1 p-2 border rounded-md w-full'
                        >
                            <option value=''>Seleccione un Subtipo</option>
                            <option value='temperatura'>Temperatura</option>
                            <option value='fraude'>Fraude</option>
                            <option value='falla en conexión'>
                                Falla en Conexión
                            </option>
                        </select>
                    </div>
                )}
                {tipoIncidente === 'fallaTecnica' && (
                    <>
                        <div>
                            <label
                                htmlFor='descripcionFalla'
                                className='block text-sm font-medium'
                            >
                                Descripción de la Falla:
                            </label>
                            <textarea
                                id='descripcionFalla'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={descripcionFalla}
                                onChange={e =>
                                    setDescripcionFalla(e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='fotoFalla'
                                className='block text-sm font-medium'
                            >
                                Foto de la Falla:
                            </label>
                            <input
                                type='file'
                                id='fotoFalla'
                                className='mt-1 p-2 border rounded-md w-full'
                                accept='image/*'
                                onChange={e =>
                                    setFotoFalla(
                                        e.target.files
                                            ? e.target.files[0]
                                            : null
                                    )
                                }
                            />
                        </div>
                    </>
                )}
                <button
                    className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                    type='submit'
                    disabled={!isFormValid()}
                >
                    Enviar
                </button>
            </form>
            <section className='mt-5'>
                <h2 className='text-lg font-semibold mb-5'>
                    Incidentes Reportados
                </h2>
                <ul className='list-disc pl-5'>
                    {incidentesData.map(incidente => (
                        <li
                            key={incidente.id}
                            className='flex justify-between items-center mb-2'
                        >
                            {incidente.tipo === 'alerta'
                                ? incidente.subtipo
                                : 'Falla Técnica'}
                            -{' '}
                            {
                                heladerasData.find(
                                    heladera =>
                                        heladera.id ===
                                        Number(incidente.heladeraId)
                                )?.nombre
                            }
                            <div className='flex space-x-2'>
                                <Button
                                    onClick={() => {
                                        actualizarIncidente(incidente.id);
                                    }}
                                    className='w-auto'
                                    disabled={incidente.solucionado}
                                >
                                    {incidente.solucionado
                                        ? 'Solucionado'
                                        : 'Marcar como Solucionado'}
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default FormularioIncidente;
