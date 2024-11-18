'use client';

import React, { useState } from 'react';

const BajaHeladera: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            direccion
        });
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>Baja de Heladera</h2>

                    <div>
                        <label
                            htmlFor='nombre'
                            className='block text-sm font-medium'
                        >
                            Nombre de la Heladera:
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

                    <button
                        className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                        type='submit'
                    >
                        Confirmar Baja
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BajaHeladera;
