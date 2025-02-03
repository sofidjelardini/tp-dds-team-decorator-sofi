'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';

export interface DataForm {
    documento: string;
    password: string;
    password2: string;
    personaJuridica: boolean;
    ayudarPersonas: boolean;
}

type DataFormContextType = {
    dataForm: DataForm;
    setDataForm: React.Dispatch<React.SetStateAction<DataForm | null>>;
};

export const DataFormContext = createContext<DataFormContextType | undefined>(
    undefined
);

export const DataFormProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [dataForm, setDataForm] = useState<any>();

    // Memoriza el valor del contexto
    const value = useMemo(
        () => ({ dataForm, setDataForm }),
        [dataForm, setDataForm]
    );

    return (
        <DataFormContext.Provider value={value}>
            {children}
        </DataFormContext.Provider>
    );
};

export const useDataForm = () => {
    const context = useContext(DataFormContext);
    if (!context) {
        throw new Error('useDataForm must be used within a DataFormProvider');
    }
    return context;
};
