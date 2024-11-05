'use client';

import React from 'react';
import { Heading } from './Heading';
import { Separator } from '@/components/ui/separator';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { getPageData } from '@/lib/data/page-data';

type BreadcrumbItemProps = {
    title: string;
    link: string;
};

interface PageContainerProps {
    children: React.ReactNode;
    scrollable?: boolean;
}

const getThirdSegment = (path: string): string => {
    const segments = path.split('/').filter(Boolean); // Divide la ruta y elimina segmentos vacíos
    return segments.length >= 3 ? segments[2] : null; // Devuelve la tercera posición o null si no existe
};

export const PageContainer = ({
    children,
    scrollable = false
}: PageContainerProps) => {
    const pathname = usePathname(); // Obtiene el path actual
    const { idUser } = useParams();
    const path = getThirdSegment(pathname);

    const { title, description, breadcrumbs } = getPageData(
        path,
        idUser.toString()
    );
    return (
        <>
            {scrollable ? (
                <ScrollArea className='h-[calc(100dvh-52px)]'>
                    <div className='h-full  p-4 md:px-8 '>
                        <div className='mb-4'>
                            <Breadcrumbs items={breadcrumbs} />
                            <Heading title={title} description={description} />
                        </div>
                        <Separator />
                        <div className='space-y-4 mt-4'>{children}</div>
                    </div>
                </ScrollArea>
            ) : (
                <div className='h-full  p-4 md:px-8'>
                    <div className='mb-4'>
                        <Breadcrumbs items={breadcrumbs} />
                        <Heading title={title} description={description} />
                    </div>
                    <Separator />
                    <div className='space-y-4 mt-4'>{children}</div>
                </div>
            )}
        </>
    );
};
