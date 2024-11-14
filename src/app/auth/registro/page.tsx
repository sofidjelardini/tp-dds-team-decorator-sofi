// RegistroPage.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDataForm } from '../../context/DataFormContext';
import RegistroForm from './components/RegistroForm';
import RegistroPersonaHumana from './components/RegistroPersonaHumana';
import RegistroPersonaJuridica from './components/RegistroPersonaJuridica';
import LoginPage from './components/LoginForm'; // Asegúrate de que la ruta es correcta
import { Button } from '@/components/ui/button'; // Asegúrate de que el botón está importado correctamente

export default function RegistroPage() {
    const [showFormUsuario, setShowFormUsuario] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el inicio de sesión
    const router = useRouter();
    const { dataForm, setDataForm } = useDataForm();

    async function submitRegistroUsuario(dataForm: any) {
        console.log('dataForm: ', dataForm);
        setDataForm(dataForm);
        const userId = 1; // Aquí puedes manejar el ID del usuario real
        localStorage.setItem('userId', `${userId}`);
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
