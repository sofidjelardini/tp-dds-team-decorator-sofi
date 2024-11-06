// components/EdicionTecnico.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Asegúrate de que esta ruta sea correcta

const EdicionTecnico: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [tipoDocumento, setTipoDocumento] = useState<string>('');
    const [numeroDocumento, setNumeroDocumento] = useState<string>('');
    const [cuil, setCuil] = useState<string>('');
    const [medioContacto, setMedioContacto] = useState<string>('');
    const [areaCobertura, setAreaCobertura] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            nombre,
            apellido,
            tipoDocumento,
            numeroDocumento,
            cuil,
            medioContacto,
            areaCobertura
        });
        // Aquí puedes manejar el envío de la actualización a una API o realizar alguna acción
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <div className='p-4'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-4'
                    >
                        <h2 className='text-lg font-semibold'>
                            Formulario de Edición de Técnicos
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
                                htmlFor='tipoDocumento'
                                className='block text-sm font-medium'
                            >
                                Tipo de Documento:
                            </label>
                            <input
                                type='text'
                                id='tipoDocumento'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={tipoDocumento}
                                onChange={e => setTipoDocumento(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='numeroDocumento'
                                className='block text-sm font-medium'
                            >
                                Número de Documento:
                            </label>
                            <input
                                type='text'
                                id='numeroDocumento'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={numeroDocumento}
                                onChange={e =>
                                    setNumeroDocumento(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='cuil'
                                className='block text-sm font-medium'
                            >
                                CUIL:
                            </label>
                            <input
                                type='text'
                                id='cuil'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={cuil}
                                onChange={e => setCuil(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='medioContacto'
                                className='block text-sm font-medium'
                            >
                                Medio de Contacto:
                            </label>
                            <input
                                type='text'
                                id='medioContacto'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={medioContacto}
                                onChange={e => setMedioContacto(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='areaCobertura'
                                className='block text-sm font-medium'
                            >
                                Área de Cobertura:
                            </label>
                            <input
                                type='text'
                                id='areaCobertura'
                                className='mt-1 p-2 border rounded-md w-full'
                                value={areaCobertura}
                                onChange={e => setAreaCobertura(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                            type='submit'
                        >
                            Actualizar Información
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EdicionTecnico;
