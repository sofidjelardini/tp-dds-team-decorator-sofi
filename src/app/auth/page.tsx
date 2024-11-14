'use client';
import { DataFormProvider } from '../context/DataFormContext';
import RegistroPersonaHumana from './registro/components/RegistroPersonaHumana';
import RegistroPersonaJuridica from './registro/components/RegistroPersonaJuridica';
import RegistroPage from './registro/page';

export default function RegistroUsuario() {
    return (
        <DataFormProvider>
            <RegistroPage />
        </DataFormProvider>
    );
}
