// import Header from '@/components/layout/header';
// import { ScrollArea } from '@/components/ui/scroll-area';
import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export const metadata: Metadata = {
    title: 'Next Shadcn Dashboard Starter',
    description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
    children,
    modal
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='w-full flex-1 overflow-hidden'>
                <Header />
                {children}

                {modal}
            </main>
        </div>
    );
}
