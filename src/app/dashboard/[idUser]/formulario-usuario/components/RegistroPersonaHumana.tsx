'use client';

import React, { useState } from 'react';

const RegistroPersonaHumana: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [fechaNacimiento, setFechaNacimiento] = useState<string>('');
    const [formaColaboracion, setFormaColaboracion] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            apellido,
            email,
            telefono,
            direccion,
            fechaNacimiento,
            formaColaboracion
        });
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>
                        Registro de Persona Humana
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
                            Teléfono/WhatsApp:
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
                            Dirección (opcional):
                        </label>
                        <input
                            type='text'
                            id='direccion'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='fechaNacimiento'
                            className='block text-sm font-medium'
                        >
                            Fecha de Nacimiento (opcional):
                        </label>
                        <input
                            type='date'
                            id='fechaNacimiento'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={fechaNacimiento}
                            onChange={e => setFechaNacimiento(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='formaColaboracion'
                            className='block text-sm font-medium'
                        >
                            Forma de Colaboración:
                        </label>
                        <select
                            id='formaColaboracion'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={formaColaboracion}
                            onChange={e => setFormaColaboracion(e.target.value)}
                            required
                        >
                            <option value=''>Seleccione una opción</option>
                            <option value='donacion dinero'>
                                Donación de Dinero
                            </option>
                            <option value='donacion vianda'>
                                Donación de Vianda
                            </option>
                            <option value='distribucion viandas'>
                                Distribución de Viandas
                            </option>
                        </select>
                    </div>

                    <button
                        className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                        type='submit'
                    >
                        Registrar Persona Humana
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroPersonaHumana;
