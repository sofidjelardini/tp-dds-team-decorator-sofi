import React, { useState, useEffect } from 'react';
import dataUsuarios from '@/data/usuarios.json';

const DonacionesForm: React.FC = () => {
    const [fecha, setFecha] = useState<string>('');
    const [monto, setMonto] = useState<number>(0);
    const [colaborador, setColaborador] = useState<any>();
    const [frecuencia, setFrecuencia] = useState<string>('una vez');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        setColaborador(localStorage.getItem('userId'));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const donacion = {
            fecha,
            monto,
            frecuencia,
            colaborador
        };

        try {
            const response = await fetch('/api/donaciones-dinero', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([donacion])
            });

            if (response.ok) {
                setFecha('');
                setMonto(0);
                setFrecuencia('una vez');
                setModalVisible(true);
                await actualizarUsuario(donacion.monto);
            } else {
                const errorData = await response.json();
                console.error('Errores:', errorData.errores);
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    const actualizarUsuario = async (montoDonacion: number) => {
        const usuario = dataUsuarios.find(
            usuario => usuario.documento === `${colaborador}`
        );
        const userData = {
            pesosDonados: (usuario?.pesosDonados || 0) + montoDonacion
        };

        await fetch(`/api/editar-perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...userData, userId: colaborador })
        });
    };

    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [modalVisible]);

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>
                    Formulario de Donaciones
                </h2>

                <div>
                    <label
                        htmlFor='fecha'
                        className='block text-sm font-medium'
                    >
                        Fecha de la donación:
                    </label>
                    <input
                        type='date'
                        id='fecha'
                        className='mt-1 p-2 border rounded-md w-full'
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='monto'
                        className='block text-sm font-medium'
                    >
                        Monto de la donación:
                    </label>
                    <input
                        type='number'
                        id='monto'
                        className='mt-1 p-2 border rounded-md w-full'
                        value={monto}
                        onChange={e => setMonto(Number(e.target.value))}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='frecuencia'
                        className='block text-sm font-medium'
                    >
                        Frecuencia:
                    </label>
                    <select
                        id='frecuencia'
                        className='mt-1 p-2 border rounded-md w-full'
                        value={frecuencia}
                        onChange={e => setFrecuencia(e.target.value)}
                    >
                        <option value='una vez'>Una vez</option>
                        <option value='semanal'>Semanal</option>
                        <option value='mensual'>Mensual</option>
                        <option value='anual'>Anual</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark'
                >
                    Enviar Donación
                </button>
            </form>

            {modalVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold'>
                            ¡Donación guardada!
                        </h3>
                        <p>Gracias! La donación se ha guardado exitosamente.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonacionesForm;
