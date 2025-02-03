'use client';

import { useDataForm } from '@/app/context/DataFormContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegistroPersonaHumana: React.FC = () => {
    const router = useRouter();
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [fechaNacimiento, setFechaNacimiento] = useState<string>('');
    const [codigoPostal, setCodigoPostal] = useState<string>('');
    const { dataForm } = useDataForm();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const usuario = {
            ...dataForm,
            nombre,
            apellido,
            email,
            telefono,
            fechaNacimiento,
            direccion,
            codigoPostal,
            pesosDonados: 0,
            viandasDistribuidas: 0,
            viandasDonadas: 0,
            tarjetasRepartidas: 0
        };

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('userId', data.user.documento);
                data.user.ayudarPersonas &&
                    (await asignarTarjetasAColaborador(data.user.documento));
                router.push('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const asignarTarjetasAColaborador = async (colaboradorId: any) => {
        try {
            const response = await fetch('/api/tarjetas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ colaboradorId })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.mensaje || 'Error en la asignación de tarjetas.'
                );
            }

            const data = await response.json();
            return {
                mensaje: data.mensaje,
                tarjetas: data.tarjetas
            };
        } catch (error) {
            console.error('Error en la asignación de tarjetas:', error);
            return {
                error: 'Error al asignar las tarjetas.'
            };
        }
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>
                        Información de Colaborador
                    </h2>
                    <h1>
                        Por favor, proporcione su información para guardarla en
                        el sistema.
                    </h1>
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

                    <div>
                        <label
                            htmlFor='codigo-postal'
                            className='block text-sm font-medium'
                        >
                            Código Postal:
                        </label>
                        <input
                            type='text'
                            id='codigo-postal'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={codigoPostal}
                            onChange={e => setCodigoPostal(e.target.value)}
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

                    <button
                        className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                        type='submit'
                    >
                        Guardar Información
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroPersonaHumana;
