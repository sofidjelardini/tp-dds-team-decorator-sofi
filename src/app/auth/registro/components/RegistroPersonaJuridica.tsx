'use client';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDataForm } from '../../../context/DataFormContext';

export default function RegistroPersonaJuridica() {
    const { dataForm } = useDataForm();
    const router = useRouter();
    const [razonSocial, setRazonSocial] = useState<string>('');
    const [tipo, setTipo] = useState<string>('');
    const [rubro, setRubro] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [codigoPostal, setCodigoPostal] = useState<string>('');
    const [hacerseCargoHeladera, setHacerseCargoHeladera] =
        useState<boolean>(false);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const usuario = {
            ...dataForm,
            personaJuridica: true,
            razonSocial,
            telefono,
            tipo,
            rubro,
            direccion
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
                router.push('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                            Tipo:
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
                            Dirección{!hacerseCargoHeladera && ' (opcional)'}:
                        </label>
                        <input
                            type='text'
                            id='direccion'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                            required={hacerseCargoHeladera}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='codigo-postal'
                            className='block text-sm font-medium'
                        >
                            Código Postal
                            {!hacerseCargoHeladera && ' (opcional)'}:
                        </label>
                        <input
                            type='text'
                            id='codigo-postal'
                            className='mt-1 p-2 border rounded-md w-full'
                            value={codigoPostal}
                            onChange={e => setCodigoPostal(e.target.value)}
                            required={direccion != ''}
                        />
                    </div>

                    <div className='flex'>
                        <Checkbox
                            id='hacerseCargoHeladera'
                            checked={hacerseCargoHeladera}
                            onChange={() =>
                                setHacerseCargoHeladera(!hacerseCargoHeladera)
                            }
                        />
                        <label htmlFor='hacerseCargoHeladera'>
                            ¿Desea hacerse cargo de una heladera?
                            <p className='ml-2 text-sm'>
                                Marque esta opción si usted decide colocar una
                                heladera en la puerta de su local.
                            </p>
                        </label>
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
}
