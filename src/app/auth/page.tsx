'use client';
import { DataFormProvider } from '../context/DataFormContext';
import RegistroPage from './registro/page';

export default function RegistroUsuario() {
    return (
        <DataFormProvider>
            <RegistroPage />
        </DataFormProvider>
    );
}
