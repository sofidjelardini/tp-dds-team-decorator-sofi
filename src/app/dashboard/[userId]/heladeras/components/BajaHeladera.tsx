'use client';

import React, { useState } from 'react';

const BajaHeladera: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [mensaje, setMensaje] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const heladeraData = {
            nombre,
            direccion
        };

        try {
            const response = await fetch('/api/heladeras', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heladeraData)
            });

            const result = await response.json();

            if (response.ok) {
                setMensaje(result.mensaje);
                setNombre('');
                setDireccion('');
            } else {
                setMensaje(result.mensaje || 'Error al eliminar la heladera');
            }
        } catch (error) {
            console.error('Error al eliminar la heladera:', error);
            setMensaje('Error al eliminar la heladera');
        }
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>Baja de Heladera</h2>
                    {mensaje && (
                        <div className='text-red-600'>{mensaje}</div>
                    )}{' '}
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
                        className='mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-500 transition'
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
