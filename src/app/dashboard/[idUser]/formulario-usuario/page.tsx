'use client';

import { useDataForm } from '@/app/context/DataFormContext';
import RegistroPersonaHumana from './components/RegistroPersonaHumana';
import RegistroPersonaJuridica from './components/RegistroPersonaJuridica';

export default function FormularioUsuarioPage() {
    const { dataForm } = useDataForm();
    if (!dataForm) return <div>Cargando datos...</div>;

    const isJuridica = dataForm.personaJuridica;

    return (
        <div>
            {isJuridica ? (
                <RegistroPersonaJuridica />
            ) : (
                <RegistroPersonaHumana />
            )}
        </div>
    );
}
