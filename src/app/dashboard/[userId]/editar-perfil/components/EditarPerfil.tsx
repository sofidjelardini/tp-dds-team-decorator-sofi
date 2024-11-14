'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const EditarPerfil: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            apellido,
            email,
            telefono,
            direccion
        });
    };

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>
                Editar Perfil de Usuario
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>
                    Información del Usuario
                </h2>

                <div>
                    <label
                        htmlFor='nombre'
                        className='block text-sm font-medium'
                    >
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
                    <label
                        htmlFor='apellido'
                        className='block text-sm font-medium'
                    >
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
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium'
                    >
                        Correo Electrónico:
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='mt-1 p-2 border rounded-md w-full'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='telefono'
                        className='block text-sm font-medium'
                    >
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
                    />
                </div>

                <Button
                    className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                    type='submit'
                >
                    Guardar Cambios
                </Button>
            </form>
        </div>
    );
};

export default EditarPerfil;
