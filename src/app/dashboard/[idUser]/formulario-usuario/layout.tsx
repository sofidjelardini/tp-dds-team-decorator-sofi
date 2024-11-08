'use client';

import React from 'react';
import {
    DataFormProvider,
    useDataForm
} from '../../../context/DataFormContext';
import FormularioUsuarioPage from './page';

export default function FormLayout() {
    return (
        <DataFormProvider>
            <FormularioUsuarioPage />
        </DataFormProvider>
    );
}
