'use client';

import { HandCoins } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Commerce from './Commerce';
import { useState, useEffect } from 'react';
import dataUsuarios from '@/data/usuarios.json';
import dataCanjes from '@/data/canjes.json';
import { Button } from '@/components/ui/button';

const PuntosCanjesSection = () => {
    const [userId, setUserId] = useState<string | null | undefined>();
    const [canjes, setCanjes] = useState<any>();
    const [puntosUtilizados, setPuntosUtilizados] = useState<number>(0);

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        canjesUsuario();
    }, [userId]);

    useEffect(() => {
        console.log('canjes: ', canjes);
    }, [canjes]);

    const calcularPuntajeUsuario = () => {
        const colaborador = dataUsuarios.find(
            usuario => usuario.documento === userId
        );

        return (
            (colaborador?.pesosDonados || 0) * 0.5 +
            (colaborador?.viandasDistribuidas || 0) +
            (colaborador?.viandasDonadas || 0) * 1.5 +
            (colaborador?.tarjetasRepartidas || 0) * 2 -
            puntosUtilizados
        );
    };

    const canjesUsuario = () => {
        const canjesRealizados = dataCanjes.filter(
            canje => canje.userId === userId
        );
        const precios = canjesRealizados.map(canje => canje.producto.price);

        setCanjes(canjesRealizados);
        setPuntosUtilizados(
            precios.reduce((acumulador, precio) => acumulador + precio, 0)
        );
    };

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
                        <div className='text-2xl font-bold'>
                            {calcularPuntajeUsuario()}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Commerce puntajeUsuario={calcularPuntajeUsuario()} />
            {canjes && canjes.length > 0 ? (
                <>
                    <h2 className='text-xl font-bold mb-4 mt-8'>
                        Canjes Realizados
                    </h2>
                    <ul>
                        {canjes.map((canje: any) => (
                            <li
                                key={canje.id}
                                className='flex justify-between items-center mb-2 mr-10'
                            >
                                <div>
                                    <h3 className='font-semibold'>
                                        {canje.producto.title}
                                    </h3>
                                    <p>
                                        Puntos Utilizados:{' '}
                                        {canje.producto.price}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No hay canjes realizados.</p>
            )}
        </>
    );
};

export default PuntosCanjesSection;
