'use client';

import React, { useState } from 'react';

const EdicionHeladera: React.FC = () => {
    const [direccion, setDireccion] = useState<string>('');
    const [longitud, setLongitud] = useState<number | string>('');
    const [latitud, setLatitud] = useState<number | string>('');
    const [nombre, setNombre] = useState<string>('');
    const [capacidad, setCapacidad] = useState<number | string>('');
    const [fechaFuncionamiento, setFechaFuncionamiento] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            direccion,
            longitud,
            latitud,
            nombre,
            capacidad,
            fechaFuncionamiento
        });
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>Editar Heladera</h2>

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
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
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
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
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
                            value={longitud}
                            onChange={e => setLongitud(e.target.value)}
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
                            value={latitud}
                            onChange={e => setLatitud(e.target.value)}
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
                            value={capacidad}
                            onChange={e => setCapacidad(e.target.value)}
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
                            value={fechaFuncionamiento}
                            onChange={e =>
                                setFechaFuncionamiento(e.target.value)
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
                </form>
            </div>
        </div>
    );
};

export default EdicionHeladera;
