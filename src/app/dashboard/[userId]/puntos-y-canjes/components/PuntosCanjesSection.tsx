'use client';

import { HandCoins } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Commerce from './Commerce';

const PuntosCanjesSection = () => {
    return (
        <>
            <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
                <Card x-chunk='dashboard-01-chunk-0'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>
                            Puntos acumulados
                        </CardTitle>
                        <HandCoins className='h-4 w-4 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <div className='text-2xl font-bold'>1.402</div>
                    </CardContent>
                </Card>
            </div>
            <Commerce />
        </>
    );
};

export default PuntosCanjesSection;
