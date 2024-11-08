'use client';
import React, { useState } from 'react';

const BajaTecnico: React.FC = () => {
    const [dni, setDNI] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ dni, email });
    };

    return (
        <div className='flex justify-center mt-6'>
            <div className='w-3/4 bg-white shadow-lg rounded-lg p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold'>Baja de Técnicos</h2>
                    <div>
                        <label
                            htmlFor='dni'
                            className='block text-sm font-medium'
                        >
                            DNI:
                        </label>
                        <input
                            type='text'
                            id='dni'
                            value={dni}
                            onChange={e => setDNI(e.target.value)}
                            required
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium'
                        >
                            Email:
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <button
                        type='submit'
                        className='mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
                    >
                        Dar de Baja
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BajaTecnico;
