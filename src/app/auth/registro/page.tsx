// RegistroPage.jsx
'use client';
import { useState } from 'react';
<<<<<<< HEAD
import { Checkbox } from '@/components/ui/checkbox';
import { DataFormProvider, useDataForm } from '../../context/DataFormContext';

const formSchema = z
    .object({
        usuario: z.string(),
        password: z
            .string()
            .min(8, {
                message: 'La contraseña debe tener al menos 8 caracteres'
            })
            .max(64, {
                message: 'La contraseña debe tener menos de 64 caracteres'
            }),
        password2: z.string(),
        personaJuridica: z.boolean().default(false).optional(),
        ayudarPersonas: z.boolean().default(false).optional()
    })
    .refine(data => data.password === data.password2, {
        message: 'Las contraseñas no coinciden',
        path: ['password2']
    });
=======
import { useRouter } from 'next/navigation';
import { useDataForm } from '../../context/DataFormContext';
import RegistroForm from './components/RegistroForm';
import RegistroPersonaHumana from './components/RegistroPersonaHumana';
import RegistroPersonaJuridica from './components/RegistroPersonaJuridica';
import LoginPage from './components/LoginForm'; // Asegúrate de que la ruta es correcta
import { Button } from '@/components/ui/button'; // Asegúrate de que el botón está importado correctamente
>>>>>>> 116d8d173d4db7d3b87dd26a958c74bd79c4c513

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
