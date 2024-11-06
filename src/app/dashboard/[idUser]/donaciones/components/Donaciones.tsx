import React, { useState } from 'react';

const DonacionesForm: React.FC = () => {
    const [fecha, setFecha] = useState<string>('');
    const [monto, setMonto] = useState<number | ''>('');
    const [frecuencia, setFrecuencia] = useState<string>('una vez');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de datos, como enviar a una API o actualizar el estado global
        console.log({ fecha, monto, frecuencia });
        // Reiniciar el formulario
        setFecha('');
        setMonto('');
        setFrecuencia('una vez');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Formulario de Donaciones</h2>

            <div>
                <label htmlFor='fecha' className='block text-sm font-medium'>
                    Fecha de la donación:
                </label>
                <input
                    type='date'
                    id='fecha'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor='monto' className='block text-sm font-medium'>
                    Monto de la donación:
                </label>
                <input
                    type='number'
                    id='monto'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={monto}
                    onChange={e => setMonto(Number(e.target.value))}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor='frecuencia'
                    className='block text-sm font-medium'
                >
                    Frecuencia:
                </label>
                <select
                    id='frecuencia'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={frecuencia}
                    onChange={e => setFrecuencia(e.target.value)}
                >
                    <option value='una vez'>Una vez</option>
                    <option value='semanal'>Semanal</option>
                    <option value='mensual'>Mensual</option>
                    <option value='anual'>Anual</option>
                </select>
            </div>

            <button
                type='submit'
                className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
            >
                Enviar Donación
            </button>
        </form>
    );
};

export default DonacionesForm;
