import React, { useState } from 'react';

const DistribucionViandasForm: React.FC = () => {
    const [heladeraOrigen, setHeladeraOrigen] = useState('');
    const [heladeraDestino, setHeladeraDestino] = useState('');
    const [cantidadViandas, setCantidadViandas] = useState(0);
    const [motivo, setMotivo] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            heladeraOrigen,
            heladeraDestino,
            cantidadViandas,
            motivo,
            fecha
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Distribución de Viandas</h2>

            <div>
                <label
                    htmlFor='heladeraOrigen'
                    className='block text-sm font-medium'
                >
                    Heladera Origen:
                </label>
                <input
                    type='text'
                    id='heladeraOrigen'
                    value={heladeraOrigen}
                    onChange={e => setHeladeraOrigen(e.target.value)}
                    required
                    className='mt-1 p-2 border rounded-md w-full'
                />
            </div>

            <div>
                <label
                    htmlFor='heladeraDestino'
                    className='block text-sm font-medium'
                >
                    Heladera Destino:
                </label>
                <input
                    type='text'
                    id='heladeraDestino'
                    value={heladeraDestino}
                    onChange={e => setHeladeraDestino(e.target.value)}
                    required
                    className='mt-1 p-2 border rounded-md w-full'
                />
            </div>

            <div>
                <label
                    htmlFor='cantidadViandas'
                    className='block text-sm font-medium'
                >
                    Cantidad de Viandas:
                </label>
                <input
                    type='number'
                    id='cantidadViandas'
                    value={cantidadViandas}
                    onChange={e => setCantidadViandas(Number(e.target.value))}
                    required
                    className='mt-1 p-2 border rounded-md w-full'
                />
            </div>

            <div>
                <label htmlFor='motivo' className='block text-sm font-medium'>
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
                <label htmlFor='fecha' className='block text-sm font-medium'>
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
    );
};

export default DistribucionViandasForm;
