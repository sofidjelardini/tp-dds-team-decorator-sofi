'use client';

import React, { useEffect, useState } from 'react';
import heladerasData from '@/data/heladeras.json';

const EdicionHeladera: React.FC = () => {
    const [mensaje, setMensaje] = useState<string>('');
    const [heladeraAEditar, setHeladeraAEditar] = useState<any>();
    const [dataAEditar, setDataAEditar] = useState<any>({
        direccion: '',
        lng: '',
        lat: '',
        nombre: '',
        capacidad: '',
        fechaFuncionamiento: '',
        id: 0
    });

    useEffect(() => {
        setDataAEditar(
            heladerasData.find(heladera => heladera.id == heladeraAEditar)
        );
    }, [heladeraAEditar]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/heladeras', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataAEditar)
            });

            const result = await response.json();

            if (response.ok) {
                setMensaje(result.mensaje);
                setDataAEditar(undefined);
            } else {
                setMensaje(result.mensaje || 'Error al editar la heladera');
            }
        } catch (error) {
            console.error('Error al editar la heladera:', error);
            setMensaje('Error al editar la heladera');
        }
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>Editar Heladera</h2>
                    {mensaje && (
                        <div className='text-green-600'>{mensaje}</div>
                    )}{' '}
                    <select
                        id='heladeraAEditar'
                        value={heladeraAEditar}
                        onChange={e => setHeladeraAEditar(e.target.value)}
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
                    {dataAEditar && (
                        <>
                            <div>
                                <label
                                    htmlFor='nombre'
                                    className='block text-sm font-medium'
                                >
                                    Nombre Significativo:
                                </label>
                                <input
                                    type='text'
                                    id='nombre'
                                    className='mt-1 p-2 border rounded-md w-full'
                                    value={dataAEditar.nombre}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            nombre: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
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
                                    value={dataAEditar.direccion}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            direccion: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='longitud'
                                    className='block text-sm font-medium'
                                >
                                    Longitud:
                                </label>
                                <input
                                    type='number'
                                    id='longitud'
                                    className='mt-1 p-2 border rounded-md w-full'
                                    value={dataAEditar.lng}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            lng: e.target.value
                                        })
                                    }
                                    step='any'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='latitud'
                                    className='block text-sm font-medium'
                                >
                                    Latitud:
                                </label>
                                <input
                                    type='number'
                                    id='latitud'
                                    className='mt-1 p-2 border rounded-md w-full'
                                    value={dataAEditar.lat}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            lat: e.target.value
                                        })
                                    }
                                    step='any'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='capacidad'
                                    className='block text-sm font-medium'
                                >
                                    Capacidad (unidades de viandas):
                                </label>
                                <input
                                    type='number'
                                    id='capacidad'
                                    className='mt-1 p-2 border rounded-md w-full'
                                    value={dataAEditar.capacidad}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            capacidad: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='fechaFuncionamiento'
                                    className='block text-sm font-medium'
                                >
                                    Fecha de Funcionamiento:
                                </label>
                                <input
                                    type='date'
                                    id='fechaFuncionamiento'
                                    className='mt-1 p-2 border rounded-md w-full'
                                    value={dataAEditar.fechaFuncionamiento}
                                    onChange={e =>
                                        setDataAEditar({
                                            ...dataAEditar,
                                            fechaFuncionamiento: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                            <button
                                className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                                type='submit'
                            >
                                Confirmar Edición
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EdicionHeladera;
