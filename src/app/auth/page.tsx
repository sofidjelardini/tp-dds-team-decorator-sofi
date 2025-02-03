'use client';
import { DataFormProvider } from '../context/DataFormContext';
import RegistroPage from './registro/page';

export default function Registro() {
    return (
        <DataFormProvider>
            <RegistroPage />
        </DataFormProvider>
    );
}
