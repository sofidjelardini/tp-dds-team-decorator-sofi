'use client';
import React, { useState } from 'react';

const FormularioVianda: React.FC = () => {
    const [comida, setComida] = useState<string>('');
    const [fechaCaducidad, setFechaCaducidad] = useState<string>('');
    const [fechaDonacion, setFechaDonacion] = useState<string>('');
    const [colaborador, setColaborador] = useState<string>('');
    const [heladera, setHeladera] = useState<string>('');
    const [calorias, setCalorias] = useState<number | ''>('');
    const [peso, setPeso] = useState<number | ''>('');
    const [estado, setEstado] = useState<string>('No Entregada');

    const isFormValid = () => {
        return (
            comida !== '' &&
            fechaCaducidad !== '' &&
            fechaDonacion !== '' &&
            colaborador !== '' &&
            heladera !== '' &&
            calorias !== '' &&
            peso !== ''
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            comida,
            fechaCaducidad,
            fechaDonacion,
            colaborador,
            heladera,
            calorias,
            peso,
            estado
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Formulario de Viandas</h2>

            <div>
                <label htmlFor='comida' className='block text-sm font-medium'>
                    Comida:
                </label>
                <input
                    type='text'
                    id='comida'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={comida}
                    onChange={e => setComida(e.target.value)}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor='fechaCaducidad'
                    className='block text-sm font-medium'
                >
                    Fecha de Caducidad:
                </label>
                <input
                    type='date'
                    id='fechaCaducidad'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={fechaCaducidad}
                    onChange={e => setFechaCaducidad(e.target.value)}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor='fechaDonacion'
                    className='block text-sm font-medium'
                >
                    Fecha de Donación:
                </label>
                <input
                    type='date'
                    id='fechaDonacion'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={fechaDonacion}
                    onChange={e => setFechaDonacion(e.target.value)}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor='colaborador'
                    className='block text-sm font-medium'
                >
                    Colaborador:
                </label>
                <input
                    type='text'
                    id='colaborador'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={colaborador}
                    onChange={e => setColaborador(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor='heladera' className='block text-sm font-medium'>
                    Heladera:
                </label>
                <input
                    type='text'
                    id='heladera'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={heladera}
                    onChange={e => setHeladera(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor='calorias' className='block text-sm font-medium'>
                    Calorías:
                </label>
                <input
                    type='number'
                    id='calorias'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={calorias}
                    onChange={e => setCalorias(Number(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor='peso' className='block text-sm font-medium'>
                    Peso:
                </label>
                <input
                    type='number'
                    id='peso'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={peso}
                    onChange={e => setPeso(Number(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor='estado' className='block text-sm font-medium'>
                    Estado:
                </label>
                <select
                    id='estado'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                >
                    <option value='No Entregada'>No Entregada</option>
                    <option value='Entregada'>Entregada</option>
                </select>
            </div>

            <button
                className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                type='submit'
                disabled={!isFormValid()}
            >
                Enviar
            </button>
        </form>
    );
};

export default FormularioVianda;
