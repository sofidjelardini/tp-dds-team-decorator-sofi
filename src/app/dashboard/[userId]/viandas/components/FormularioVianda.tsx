'use client';
import React, { useEffect, useState } from 'react';
import heladerasData from '@/data/heladeras.json';
import dataUsuarios from '@/data/usuarios.json';

const FormularioVianda: React.FC = () => {
    const [comida, setComida] = useState<string>('');
    const [fechaCaducidad, setFechaCaducidad] = useState<string>('');
    const [fechaDonacion, setFechaDonacion] = useState<string>('');
    const [colaborador, setColaborador] = useState<string | null>('');
    const [heladera, setHeladera] = useState<string>('');
    const [calorias, setCalorias] = useState<number | ''>('');
    const [peso, setPeso] = useState<number | ''>('');
    const [estado, setEstado] = useState<string>('No Entregada');
    const [mensaje, setMensaje] = useState<string>('');

    useEffect(() => {
        setColaborador(localStorage.getItem('userId'));
    }, []);

    const isFormValid = () => {
        return (
            comida !== '' &&
            fechaCaducidad !== '' &&
            fechaDonacion !== '' &&
            colaborador !== '' &&
            heladera !== '' &&
            calorias !== '' &&
            peso !== '' &&
            estado !== ''
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const viandaData = {
            id: Math.floor(Math.random() * 999999),
            comida,
            fechaCaducidad,
            fechaDonacion,
            colaborador,
            heladera: Number(heladera),
            calorias,
            peso,
            estado
        };

        try {
            const response = await fetch('/api/viandas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(viandaData)
            });

            const result = await response.json();

            if (response.ok) {
                setMensaje(result.mensaje);
                setComida('');
                setFechaCaducidad('');
                setFechaDonacion('');
                setHeladera('');
                setCalorias('');
                setPeso('');
                setEstado('');
                await actualizarUsuario();
            } else {
                setMensaje(result.mensaje || 'Error al enviar la vianda');
            }
        } catch (error) {
            console.error('Error al enviar la vianda:', error);
            setMensaje('Error al enviar la vianda');
        }
    };

    const actualizarUsuario = async () => {
        const usuario = dataUsuarios.find(
            usuario => usuario.documento === `${colaborador}`
        );
        const userData = {
            viandasDonadas: usuario.viandasDonadas + 1
        };

        console.log('userData: ', userData);

        await fetch(`/api/editar-perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...userData, userId: colaborador })
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Formulario de Viandas</h2>
            {mensaje && <div className='text-green-600'>{mensaje}</div>}{' '}
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
                    htmlFor='heladeraOrigen'
                    className='block text-sm font-medium'
                >
                    Heladera:
                </label>
                <select
                    id='heladeraOrigen'
                    value={heladera}
                    onChange={e => setHeladera(e.target.value)}
                    required
                    className='mt-1 p-2 border rounded-md w-full'
                >
                    <option value=''>Seleccione una Heladera</option>
                    {heladerasData.map(heladera => (
                        <option value={heladera.id}>{heladera.nombre}</option>
                    ))}
                </select>
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
