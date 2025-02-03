'use client';
import React, { useState } from 'react';
import heladerasData from '@/data/heladeras.json';

const BajaHeladera: React.FC = () => {
    const [mensaje, setMensaje] = useState<string>('');
    const [heladeraAEliminar, setHeladeraAEliminar] = useState<any>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/heladeras', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ heladeraAEliminar })
            });

            const result = await response.json();

            if (response.ok) {
                setMensaje(result.mensaje);
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
                    <select
                        id='heladeraAEliminar'
                        value={heladeraAEliminar}
                        onChange={e => setHeladeraAEliminar(e.target.value)}
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
