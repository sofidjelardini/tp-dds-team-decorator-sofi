'use client';

import { useDataForm } from '@/app/context/DataFormContext';
import { Button } from '@/components/ui/button';
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
    const [error, setError] = useState<string>();

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
            tarjetasRepartidas: 0,
            esAdmin: false
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
            } else if (data.error) {
                setError(data.error);
            }
        } catch (error: any) {
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
        <>
            {!!error && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold text-red-600'>
                            Error
                        </h3>
                        <p>{error}</p>
                        <Button
                            onClick={() => window.location.reload()}
                            className='underline bg-white hover:bg-white text-dark border-white shadow-none flex items-center w-full'
                        >
                            Volver al inicio
                        </Button>
                    </div>
                </div>
            )}
            <div className='flex justify-center mt-6'>
                <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-4'
                    >
                        <h2 className='text-lg font-semibold'>
                            Información de Colaborador
                        </h2>
                        <h1>
                            Por favor, proporcione su información para guardarla
                            en el sistema.
                        </h1>
                        <div>
                            <label
                                htmlFor='nombre'
                                className='flex flex-row block text-sm font-medium w-auto'
                            >
                                Nombre{' '}
                                <div
                                    className={`font-semibold ml-1 text-red-600 `}
                                >
                                    *
                                </div>
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
                                className='flex flex-row  block text-sm font-medium'
                            >
                                Apellido
                                <div
                                    className={`font-semibold ml-1 text-red-600 `}
                                >
                                    *
                                </div>
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
                                className='flex flex-row block text-sm font-medium'
                            >
                                Correo Electrónico
                                <div
                                    className={`font-semibold ml-1 text-red-600 `}
                                >
                                    *
                                </div>
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
                                className='flex flex-row block text-sm font-medium'
                            >
                                Teléfono/WhatsApp
                                <div
                                    className={`font-semibold ml-1 text-red-600 `}
                                >
                                    *
                                </div>
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
                                className='flex flex-row block text-sm font-medium'
                            >
                                Dirección
                                {dataForm.ayudarPersonas && (
                                    <div
                                        className={`font-semibold ml-1 text-red-600 `}
                                    >
                                        *
                                    </div>
                                )}
                            </label>
                            <input
                                type='text'
                                id='direccion'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={direccion}
                                onChange={e => setDireccion(e.target.value)}
                                required={dataForm.ayudarPersonas}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='codigo-postal'
                                className='flex flex-row block text-sm font-medium'
                            >
                                Código Postal
                                {dataForm.ayudarPersonas && (
                                    <div
                                        className={`font-semibold ml-1 text-red-600 `}
                                    >
                                        *
                                    </div>
                                )}
                            </label>
                            <input
                                type='text'
                                id='codigo-postal'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={codigoPostal}
                                onChange={e => setCodigoPostal(e.target.value)}
                                required={dataForm.ayudarPersonas}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='fechaNacimiento'
                                className='block text-sm font-medium'
                            >
                                Fecha de Nacimiento
                            </label>
                            <input
                                type='date'
                                id='fechaNacimiento'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={fechaNacimiento}
                                onChange={e =>
                                    setFechaNacimiento(e.target.value)
                                }
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
        </>
    );
};

export default RegistroPersonaHumana;
