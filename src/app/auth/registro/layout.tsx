import React from 'react';
import { DataFormProvider } from '../../context/DataFormContext';

export default function RegisterLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <DataFormProvider>{children}</DataFormProvider>;
}
