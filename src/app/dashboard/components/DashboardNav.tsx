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
import usuariosData from '@/data/usuarios.json';
import { useEffect, useState } from 'react';

interface DashboardNavProps {
    userId?: string;
    isMobileNav?: boolean;
}

const DashboardNav = ({ userId, isMobileNav = false }: DashboardNavProps) => {
    const { isMinimized } = useDashboard();
    const router = useRouter();
    const colaboradorData = usuariosData.find(
        usuario => usuario.documento == userId
    );
    const [barraCompleta, setBarraCompleta] = useState<
        {
            title: string;
            href: string;
            icon: string;
        }[]
    >([]);

    useEffect(() => {
        setBarraCompleta([
            {
                title: 'Inicio',
                href: `/dashboard`,
                icon: 'homepage'
            },
            {
                title: 'Heladeras',
                href: `/dashboard/${userId}/heladeras`,
                icon: 'heladera'
            },
            {
                title: 'Carga de Viandas',
                href: `/dashboard/${userId}/viandas`,
                icon: 'vianda'
            },
            {
                title: 'Distribución Viandas',
                href: `/dashboard/${userId}/distribucion`,
                icon: 'camion'
            },
            {
                title: 'Donaciones',
                href: `/dashboard/${userId}/donaciones`,
                icon: 'donaciones'
            },
            {
                title: 'Gestión Técnicos',
                href: `/dashboard/${userId}/tecnicos`,
                icon: 'tecnico'
            },
            {
                title: 'Carga de Colaboraciones',
                href: `/dashboard/${userId}/cargar-colaboraciones`,
                icon: 'cargaColaboraciones'
            },
            {
                title: 'Incidentes',
                href: `/dashboard/${userId}/incidentes`,
                icon: 'incidentes'
            },
            {
                title: 'Reportes',
                href: `/dashboard/${userId}/reportes`,
                icon: 'reportes'
            },
            {
                title: 'Editar Perfil',
                href: `/dashboard/${userId}/editar-perfil`,
                icon: 'editarPerfil'
            }
        ]);
    }, [userId]);

    useEffect(() => {
        if (colaboradorData?.ayudarPersonas) {
            setBarraCompleta([
                ...barraCompleta,
                {
                    title: 'Puntos y canjes',
                    href: `/dashboard/${userId}/puntos-y-canjes`,
                    icon: 'carrito'
                },
                {
                    title: 'Registro Personas en Situación Vulnerable',
                    href: `/dashboard/${userId}/registro-personas`,
                    icon: 'persona'
                },
                {
                    title: 'Gestión de Tarjetas',
                    href: `/dashboard/${userId}/tarjetas`,
                    icon: 'tarjetas'
                }
            ]);
        }
    }, [colaboradorData]);

    console.log('userID: ', userId);

    async function handleLogout(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            localStorage.clear();
            router.push('/auth');
        } catch (error) {
            console.error(
                'Ocurrió un error. Contáctese con el administrador',
                error
            );
        }
    }

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
                    {barraCompleta?.map((item, index) => {
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
                                                    router.push(item.href);
                                                } else {
                                                    router.push(item.href);
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
