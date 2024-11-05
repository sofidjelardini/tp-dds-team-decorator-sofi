//@ts-nocheck
'use client';

import { Icons } from '@/components/icons/Icons';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/store/dashboardStore';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface DashboardNavProps {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isMobileNav?: boolean;
}

const DashboardNav = ({ setOpen, isMobileNav = false }: DashboardNavProps) => {
    const path = usePathname();

    const { isMinimized } = useDashboard();
    const router = useRouter();
    const { idUser } = useParams();

    async function handleLogout(evt) {
        evt.preventDefault();
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/auth/business/');
        } catch (error) {
            console.error(
                'Ocurrió un error. Contacte con el administrador',
                error
            );
        }
    }

    const items = [
        {
            title: 'Heladeras',
            href: `/dashboard/${idUser}/heladeras`,
            icon: 'heladera',
            label: 'Heladeras'
        }
    ];

    return (
        <nav className='grid items-start gap-2 h-full'>
            <TooltipProvider className=''>
                <div>
                    {items.map((item, index) => {
                        const Icon = Icons[item.icon || 'arrowRight'];
                        return (
                            item.href && (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                'flex items-center gap-2 overflow-hidden rounded-md py-2 mb-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground',
                                                path === item.href
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'transparent'
                                            )}
                                        >
                                            <Icon
                                                className={`ml-3 size-5 flex-none`}
                                            />
                                            {isMobileNav ||
                                            (!isMinimized && !isMobileNav) ? (
                                                <span className='mr-2 truncate'>
                                                    {item.title}
                                                </span>
                                            ) : (
                                                ''
                                            )}
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        align='center'
                                        side='right'
                                        sideOffset={8}
                                        className={
                                            !isMinimized
                                                ? 'hidden'
                                                : 'inline-block'
                                        }
                                    >
                                        {item.title}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        );
                    })}
                </div>
                <li className=' flex items-end mt-auto w-full'>
                    <Tooltip className=''>
                        <TooltipTrigger asChild>
                            <button
                                onClick={handleLogout}
                                variant='link'
                                className='flex items-center gap-2 overflow-hidden rounded-md  text-sm font-medium hover:bg-primary hover:text-primary-foreground w-full justify-start py-2'
                            >
                                <LogOut className={`ml-3 size-5 flex-none`} />

                                {isMobileNav ||
                                (!isMinimized && !isMobileNav) ? (
                                    <span className='mr-2 truncate'>
                                        Cerrar sesión
                                    </span>
                                ) : (
                                    ''
                                )}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            align='center'
                            side='right'
                            sideOffset={8}
                            className={!isMinimized ? 'hidden' : 'inline-block'}
                        >
                            Cerrar sesión
                        </TooltipContent>
                    </Tooltip>
                </li>
            </TooltipProvider>
        </nav>
    );
};

export default DashboardNav;
