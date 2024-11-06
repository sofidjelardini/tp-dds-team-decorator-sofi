'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Manteniendo el botón personalizado

const FormularioPersonas: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number | ''>('');
    const [direccion, setDireccion] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [observaciones, setObservaciones] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            apellido,
            edad,
            direccion,
            telefono,
            observaciones
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Formulario de Personas</h2>

            <div>
                <label htmlFor='nombre' className='block text-sm font-medium'>
                    Nombre:
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
                <label htmlFor='apellido' className='block text-sm font-medium'>
                    Apellido:
                </label>
                <input
                    type='text'
                    id='apellido'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor='edad' className='block text-sm font-medium'>
                    Edad:
                </label>
                <input
                    type='number'
                    id='edad'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={edad}
                    onChange={e => setEdad(Number(e.target.value))}
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
                <label htmlFor='telefono' className='block text-sm font-medium'>
                    Teléfono:
                </label>
                <input
                    type='tel'
                    id='telefono'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor='observaciones'
                    className='block text-sm font-medium'
                >
                    Observaciones:
                </label>
                <input
                    type='text'
                    id='observaciones'
                    className='mt-1 p-2 border rounded-md w-full'
                    value={observaciones}
                    onChange={e => setObservaciones(e.target.value)}
                />
            </div>

            <Button
                className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                type='submit'
            >
                Enviar
            </Button>
        </form>
    );
};

export default FormularioPersonas;
