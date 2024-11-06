// import Header from '@/components/layout/header';
// import { ScrollArea } from '@/components/ui/scroll-area';
'use client';
import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//     title: 'Next Shadcn Dashboard Starter',
//     description: 'Basic dashboard with Next.js and Shadcn'
// };

export default function DashboardLayout({
    children,
    modal
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    const [userId, setUserId] = useState<string | undefined>(undefined);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        console.log('storedUserId: ', storedUserId);
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            redirect('/auth');
        }
    }, []);

    return (
        <div className='flex h-full'>
            <Sidebar userId={userId} />
            <main className='w-full flex-1 overflow-hidden'>
                <Header />
                <div
                    style={{
                        padding: '2rem',
                        marginLeft: '75px'
                    }}
                >
                    {children}

                    {modal}
                </div>
            </main>
        </div>
    );
}
