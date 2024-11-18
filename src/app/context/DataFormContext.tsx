'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface DataForm {
    documento: string;
    password: string;
    password2: string;
    personaJuridica: boolean;
    ayudarPersonas: boolean;
}

type DataFormContextType = {
    dataForm: DataForm;
    setDataForm: React.Dispatch<React.SetStateAction<any>>;
};

export const DataFormContext = createContext<DataFormContextType | undefined>(
    undefined
);

// export const DataFormProvider: React.FC<{ children: React.ReactNode }> = ({
//     children
// }) => {
//     const [dataForm, setDataForm] = useState<any>(null);

<<<<<<< HEAD
//     useEffect(() => {
//         console.log('dataFormContext: ', dataForm)
//     },[dataForm])
=======
    useEffect(() => {
        console.log('dataFormContext: ', dataForm);
    }, [dataForm]);
>>>>>>> 116d8d173d4db7d3b87dd26a958c74bd79c4c513

//     return (
//         <DataFormContext.Provider value={{ dataForm, setDataForm }}>
//             {children}
//         </DataFormContext.Provider>
//     );
// };

export const useDataForm = () => {
    const context = useContext(DataFormContext);
    console.log('context: ', context);
    if (!context) {
        throw new Error('useDataForm must be used within a DataFormProvider');
    }
    return context;
};
