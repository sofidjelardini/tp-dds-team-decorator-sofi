'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const EditarPerfil: React.FC = () => {
    const router = useRouter();
    const userId = localStorage.getItem('userId');
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [resultado, setResultado] = useState<any>(null);
    const [error, setError] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const limpiarForm = () => {
        setNombre('');
        setApellido('');
        setEmail('');
        setTelefono('');
        setDireccion('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setResultado(null);
        setError(false);
        e.preventDefault();

        const userData = {
            nombre,
            apellido,
            email,
            telefono,
            direccion
        };

        try {
            const response = await fetch(`/api/editar-perfil`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...userData, userId })
            });

            if (response.ok) {
                const result = await response.json();
                setResultado(result.message);
            } else {
                setResultado('Error, por favor intentá de nuevo');
                setError(true);
            }
        } catch (error) {
            setResultado('Error, por favor intentá de nuevo');
            setError(true);
        } finally {
            limpiarForm();
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch(`/api/editar-perfil`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId })
            });

            if (response.ok) {
                setResultado('Cuenta eliminada con éxito.');
                localStorage.clear();
                router.push('/');
            } else {
                setResultado(
                    'Error al eliminar la cuenta, por favor intentá de nuevo.'
                );
                setError(true);
            }
        } catch (error) {
            setResultado(
                'Error al eliminar la cuenta, por favor intentá de nuevo.'
            );
            setError(true);
        }
    };

    return (
        <div className='p-4'>
            {resultado && (
                <div
                    className={`text-lg font-semibold text-center mb-2 ${
                        error ? 'text-red-600' : 'text-blue-600'
                    }`}
                >
                    {resultado}
                </div>
            )}
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
                    disabled={
                        !nombre &&
                        !apellido &&
                        !telefono &&
                        !email &&
                        !direccion
                    }
                >
                    Guardar Cambios
                </Button>

                <Button
                    className='mt-2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700'
                    onClick={() => setModalVisible(true)}
                >
                    Eliminar Cuenta
                </Button>
            </form>
            {modalVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¿Estás seguro de que deseas eliminar tu cuenta? Esta
                            acción no se puede deshacer.
                        </h3>
                        <div className='mt-5 flex flex-row gap-4 w-50 items-center justify-center'>
                            <Button
                                className='bg-red-600 text-white py-2 rounded-md hover:bg-red-700'
                                onClick={() => {
                                    handleDeleteAccount();
                                    setModalVisible(false);
                                }}
                            >
                                Eliminar Cuenta
                            </Button>
                            <Button
                                className='bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
                                onClick={() => {
                                    handleDeleteAccount();
                                    setModalVisible(false);
                                }}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditarPerfil;
