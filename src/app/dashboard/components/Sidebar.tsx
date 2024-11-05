'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { useDashboard } from '@/store/dashboardStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DashboardNav from './DashboardNav';

type SidebarProps = {
    className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
    const { isMinimized, toggle } = useDashboard();

    const handleToggle = () => {
        toggle();
    };

    return (
        <aside
            className={cn(
                `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block top:0 `,
                !isMinimized ? 'w-72' : 'w-[72px]',
                className
            )}
        >
            {/* <div className='hidden p-5 pt-10 lg:block'>
                <Link
                    href={
                        'https://github.com/Kiranism/next-shadcn-dashboard-starter'
                    }
                    target='_blank'
                >
                    <img
                        src='https://logopond.com/avatar/257420/logopond.png'
                        alt='logo del negocio'
                        className='size-8 mr-2'
                    />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-8 w-8'
                    >
                        <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                    </svg>
                </Link>
            </div> */}
            {/* <div className='hidden p-5 pt-10 lg:block'>
                <Avatar
                    className={`mr-2 ${
                        isMinimized ? 'size-8' : 'size-12'
                    } transition transform`}
                >
                    <AvatarImage src={logoURL} alt='logo del negocio' />
                    <AvatarFallback>HS</AvatarFallback>
                </Avatar>
            </div> */}

            <ChevronLeft
                className={cn(
                    'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                    isMinimized && 'rotate-180'
                )}
                onClick={handleToggle}
            />
            <div className='space-y-4 py-4 h-[85%]'>
                <div className='px-3 py-2 h-full'>
                    <div className='mt-3 space-y-1 h-full'>
                        <DashboardNav />
                    </div>
                </div>
            </div>
        </aside>
    );
}
