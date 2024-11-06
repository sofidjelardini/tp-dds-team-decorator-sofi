'use client';
import { useState } from 'react';
import React from 'react';
import RegistroTecnico from './components/RegistroTecnico';
import BajaTecnico from './components/BajaTecnico';
import EdicionTecnico from './components/EdicionTecnico';
import { PageContainer } from '../../components/PageContainer';

interface TecnicosProps {
    userId: string | null;
}

const Tecnicos: React.FC<TecnicosProps> = ({ userId }) => {
    const [abrirRegistro, setAbrirRegistro] = useState<boolean>(false);
    const [abrirBaja, setAbrirBaja] = useState<boolean>(false);
    const [abrirEdicion, setAbrirEdicion] = useState<boolean>(false);

    return (
        <PageContainer>
            {/* <div className='flex flex-col gap-4'> */}
            <section>
                <h2 className='text-lg font-semibold'>Opciones de Gestión</h2>
                <div className='flex justify-around mt-4'>
                    <button
                        onClick={() => {
                            setAbrirRegistro(true);
                            setAbrirBaja(false);
                            setAbrirEdicion(false);
                        }}
                        className='bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg transition transform hover:bg-blue-500 hover:scale-105'
                    >
                        Registro de Técnicos
                    </button>
                    <button
                        onClick={() => {
                            setAbrirRegistro(false);
                            setAbrirBaja(true);
                            setAbrirEdicion(false);
                        }}
                        className='bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg transition transform hover:bg-blue-500 hover:scale-105'
                    >
                        Baja de Técnicos
                    </button>
                    <button
                        onClick={() => {
                            setAbrirRegistro(false);
                            setAbrirBaja(false);
                            setAbrirEdicion(true);
                        }}
                        className='bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg transition transform hover:bg-blue-500 hover:scale-105'
                    >
                        Edición de Información de Técnicos
                    </button>
                </div>
            </section>

            {abrirRegistro && <RegistroTecnico />}
            {abrirBaja && <BajaTecnico />}
            {abrirEdicion && <EdicionTecnico />}
            {/* </div> */}
        </PageContainer>
    );
};

export default Tecnicos;
