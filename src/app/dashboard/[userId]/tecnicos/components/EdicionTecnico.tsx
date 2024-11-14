'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface EdicionTecnicoProps {
    onUpdate: (tecnico: Partial<Tecnico>) => Promise<void>;
    dataTecnico: Tecnico;
}

interface Tecnico {
    numeroDocumento: string; // Cambié 'dni' a 'numeroDocumento'
    nombre: string;
    apellido: string;
    habilitado: boolean;
    medioContacto: string;
    areaCobertura: string;
}

const EdicionTecnico: React.FC<EdicionTecnicoProps> = ({
    onUpdate,
    dataTecnico
}) => {
    const [medioContacto, setMedioContacto] = useState<string>(
        dataTecnico.medioContacto
    );
    const [areaCobertura, setAreaCobertura] = useState<string>(
        dataTecnico.areaCobertura
    );

    useEffect(() => {
        // Cuando dataTecnico cambia, actualizar los estados
        setMedioContacto(dataTecnico.medioContacto);
        setAreaCobertura(dataTecnico.areaCobertura);
    }, [dataTecnico]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onUpdate({
            ...dataTecnico, // Mantener los datos existentes del técnico
            medioContacto,
            areaCobertura
        });
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
