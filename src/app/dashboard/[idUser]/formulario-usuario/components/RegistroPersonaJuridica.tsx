'use client';

import React, { useState } from 'react';
import { useDataForm } from '../../../../context/DataFormContext';

const RegistroPersonaJuridica: React.FC = () => {
    const { dataForm } = useDataForm();

    const [razonSocial, setRazonSocial] = useState<string>('');
    const [tipo, setTipo] = useState<string>(''); // Gubernamental, ONG, Empresa, Institución
    const [rubro, setRubro] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const personaJuridica = {
            razonSocial,
            tipo,
            rubro,
            email,
            telefono,
            direccion
        };

        // Acá tenemos que guardar la data en la base de datos
        console.log('Data del usuario:', dataForm);
        console.log('Datos de Persona Jurídica:', personaJuridica);

        // try {
        //     const response = await fetch('/api/registrar-usuario', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(personaJuridica)
        //     });

        //     if (!response.ok) {
        //         throw new Error('Error al guardar los datos');
        //     }

        //     const result = await response.json();
        //     console.log('Respuesta del servidor:', result);
        // } catch (error) {
        //     console.error('Error al enviar los datos:', error);
        // }
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>
                        Registro de Persona Jurídica
                    </h2>

                    <div>
                        <label
                            htmlFor='razonSocial'
                            className='block text-sm font-medium'
                        >
                            Razón Social:
                        </label>
                        <input
                            type='text'
                            id='razonSocial'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={razonSocial}
                            onChange={e => setRazonSocial(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='tipo'
                            className='block text-sm font-medium'
                        >
                            Tipo (Gubernamental, ONG, Empresa, Institución):
                        </label>
                        <select
                            id='tipo'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                            required
                        >
                            <option value=''>Seleccione una opción</option>
                            <option value='Gubernamental'>Gubernamental</option>
                            <option value='ONG'>ONG</option>
                            <option value='Empresa'>Empresa</option>
                            <option value='Institución'>Institución</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor='rubro'
                            className='block text-sm font-medium'
                        >
                            Rubro:
                        </label>
                        <input
                            type='text'
                            id='rubro'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={rubro}
                            onChange={e => setRubro(e.target.value)}
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

                    <button
                        className='mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition'
                        type='submit'
                    >
                        Registrar Persona Jurídica
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroPersonaJuridica;
