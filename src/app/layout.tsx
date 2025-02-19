'use client';
import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [colaborador, setColaborador] = useState<any>();

    useEffect(() => {
        setColaborador(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        const startSimulation = async () => {
            try {
                const response = await fetch('/api/simulacionUsos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId: colaborador })
                });

                if (!response.ok) {
                    throw new Error(
                        `Error en la solicitud: ${response.statusText}`
                    );
                }

                const data = await response.json();
            } catch (error) {
                console.error('Error al iniciar la simulación:', error);
            }
        };
        !!colaborador && startSimulation();
    }, [colaborador]);

    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
