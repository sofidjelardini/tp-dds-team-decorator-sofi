'use client';
import { useState } from 'react';
import { useDataForm } from '../../context/DataFormContext';
import RegistroForm from './components/RegistroForm';
import RegistroPersonaHumana from './components/RegistroPersonaHumana';
import RegistroPersonaJuridica from './components/RegistroPersonaJuridica';
import LoginPage from './components/LoginForm';

export default function RegistroPage() {
    const [showFormUsuario, setShowFormUsuario] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { dataForm, setDataForm } = useDataForm();

    async function submitRegistroUsuario(dataForm: any) {
        setDataForm(dataForm);
        setShowFormUsuario(true);
    }

    return (
        <div className='mt-10'>
            {!showFormUsuario ? (
                showLogin ? (
                    <LoginPage setShowLogin={setShowLogin} />
                ) : (
                    <RegistroForm
                        onSubmit={submitRegistroUsuario}
                        setShowLogin={setShowLogin}
                    />
                )
            ) : dataForm.personaJuridica ? (
                <RegistroPersonaJuridica />
            ) : (
                <RegistroPersonaHumana />
            )}
        </div>
    );
}
