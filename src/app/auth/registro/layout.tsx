import React from 'react';
import { DataFormContext } from '../../context/DataFormContext';

export default function RegisterLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <DataFormContext.Provider>{children}</DataFormContext.Provider>;
}
