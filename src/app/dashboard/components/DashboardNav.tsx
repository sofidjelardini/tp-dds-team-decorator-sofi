'use client';
import { Icons } from '@/components/icons/Icons';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/store/dashboardStore';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DashboardNavProps {
    userId?: string;
    isMobileNav?: boolean;
}

const DashboardNav = ({ userId, isMobileNav = false }: DashboardNavProps) => {
    const { isMinimized } = useDashboard();
    const router = useRouter();

    const items = [
        {
            title: 'Heladeras',
            href: `/dashboard/${userId}/heladeras`,
            icon: 'heladera'
        },
        {
            title: 'Registro Personas en Situación Vulnerable',
            href: `/dashboard/${userId}/registro-personas`,
            icon: 'persona'
        },
        {
            title: 'Carga de Viandas',
            href: `/dashboard/${userId}/viandas`,
            icon: 'vianda'
        },
        {
            title: 'Donaciones',
            href: `/dashboard/${userId}/donaciones`,
            icon: 'donaciones'
        },
        {
            title: 'Distribución Viandas',
            href: `/dashboard/${userId}/distribucion`,
            icon: 'camion'
        },
        {
            title: 'Gestión Técnicos',
            href: `/dashboard/${userId}/tecnicos`,
            icon: 'tecnico'
        },
        {
            title: 'Editar Perfil',
            href: `/dashboard/${userId}/editar-perfil`,
            icon: 'editarPerfil'
        },
        {
            title: 'Administradores',
            href: `/dashboard/${userId}/administradores`,
            icon: 'administrador'
        }
    ];

    async function handleLogout(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            localStorage.clear();
            router.push('/auth');
        } catch (error) {
            console.error(
                'Ocurrió un error. Contacte con el administrador',
                error
            );
        }
    }

    const handleNavClick = (href: string) => {
        if (!isMinimized) {
            router.push(href);
        } else {
            // Si está minimizado, simplemente navegamos sin expandir el menú
            router.push(href);
        }
    };

    return (
        <nav className='flex flex-col h-full'>
            <TooltipProvider>
                <div
                    className={`flex flex-col ${
                        isMinimized
                            ? 'items-center justify-center'
                            : 'items-start justify-start'
                    }`}
                >
                    {items.map((item, index) => {
                        const Icon = Icons[item.icon || 'arrowRight'];
                        return (
                            item.href && (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={item.href}
                                            onClick={e => {
                                                if (isMinimized) {
                                                    e.preventDefault();
                                                    handleNavClick(item.href);
                                                } else {
                                                    handleNavClick(item.href);
                                                }
                                            }}
                                            className={cn(
                                                `flex items-center gap-2 rounded-md py-2 mb-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground w-full ${
                                                    isMinimized
                                                        ? 'items-center justify-center'
                                                        : 'items-start justify-start'
                                                }`
                                            )}
                                        >
                                            <Icon />
                                            {isMobileNav ||
                                            (!isMinimized && !isMobileNav) ? (
                                                <span className='mr-2 truncate'>
                                                    {item.title}
                                                </span>
                                            ) : null}
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        align='center'
                                        side='right'
                                        sideOffset={8}
                                    >
                                        {item.title}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        );
                    })}
                </div>
                <div className='mt-auto'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onClick={handleLogout}
                                className={cn(
                                    `flex items-center gap-2 rounded-md py-2 mb-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground w-full ${
                                        isMinimized
                                            ? 'items-center justify-center'
                                            : 'items-start justify-start'
                                    }`
                                )}
                            >
                                <LogOut className={`ml-1 size-5 flex-none`} />
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
                </div>
            </TooltipProvider>
        </nav>
    );
};

export default DashboardNav;
