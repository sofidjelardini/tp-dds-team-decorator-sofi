'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type DataFormContextType = {
    dataForm: any;
    setDataForm: React.Dispatch<React.SetStateAction<any>>;
};

export const DataFormContext = createContext<DataFormContextType | undefined>(
    undefined
);

// export const DataFormProvider: React.FC<{ children: React.ReactNode }> = ({
//     children
// }) => {
//     const [dataForm, setDataForm] = useState<any>(null);

//     useEffect(() => {
//         console.log('dataFormContext: ', dataForm)
//     },[dataForm])

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
