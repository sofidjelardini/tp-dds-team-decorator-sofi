import React, { useState, useEffect } from 'react';
import tarjetasData from '@/data/tarjetas.json';
import usosData from '@/data/usosTarjetas.json';
import { Button } from '@/components/ui/button';

const GestionTarjetas: React.FC = () => {
    const [tarjetasColaborador, setTarjetasColaborador] = useState<any>();
    const [userId, setUserId] = useState<any>();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        setTarjetasColaborador(
            tarjetasData.tarjetasAsignadas.filter(
                tarjeta => tarjeta.colaboradorId === userId
            )
        );
    }, [userId]);

    const eliminarTarjeta = async (numeroTarjeta: any) => {
        try {
            const response = await fetch('/api/tarjetas', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ numeroTarjeta, colaboradorId: userId })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.mensaje || 'Error al eliminar la tarjeta.'
                );
            }

            setTarjetasColaborador((prev: any[]) =>
                prev.filter(
                    (tarjeta: { numeroTarjeta: any }) =>
                        tarjeta.numeroTarjeta !== numeroTarjeta
                )
            );
        } catch (error) {
            console.error('Error eliminando la tarjeta:', error);
        }
    };

    return (
        <>
            <section className='technicians-list'>
                <h2 className='text-lg font-semibold'>Lista de Tarjetas</h2>
                <p className='mt-2 mb-5 text-l'>
                    Si perdiste o hubo algún problema con alguna de las tarjetas
                    que tenés asignadas, acá podes eliminarla para que la
                    deshabilitemos.
                </p>
                <ul className='list-disc pl-5'>
                    {tarjetasColaborador?.map(
                        (tarjeta: {
                            numeroTarjeta: React.Key | null | undefined;
                            tarjetaAsignadaAPersonaVulnerable: boolean;
                        }) => (
                            <li
                                key={tarjeta.numeroTarjeta}
                                className='flex justify-between items-center mb-2'
                            >
                                <div className='flex justify-between items-center mb-2 w-2/3'>
                                    <p className='font-semibold mr-2'>
                                        Número de tarjeta:
                                    </p>
                                    {tarjeta.numeroTarjeta}
                                    {tarjeta.tarjetaAsignadaAPersonaVulnerable ? (
                                        <b className='text-yellow-600'>
                                            Tarjeta Entregada
                                        </b>
                                    ) : (
                                        <b className='text-green-600'>
                                            Tarjeta Disponible
                                        </b>
                                    )}
                                </div>
                                <div className='flex space-x-2'>
                                    <Button
                                        onClick={() => {
                                            eliminarTarjeta(
                                                tarjeta.numeroTarjeta
                                            );
                                        }}
                                        className='w-auto'
                                    >
                                        Eliminar Tarjeta
                                    </Button>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </section>

            {tarjetasColaborador?.map(
                (tarjeta: {
                    numeroTarjeta: any;
                    tarjetaAsignadaAPersonaVulnerable: boolean;
                }) => {
                    const usos: any = usosData.filter(
                        (u: any) =>
                            u.numeroTarjeta === tarjeta.numeroTarjeta &&
                            tarjeta.tarjetaAsignadaAPersonaVulnerable === true
                    );
                    return usos.length ? (
                        <section className='mt-5' key={tarjeta.numeroTarjeta}>
                            <h2 className='text-lg font-semibold mb-5'>
                                Usos de la Tarjeta {tarjeta.numeroTarjeta}
                            </h2>
                            <ul className='list-disc pl-5'>
                                {usos.length > 0 ? (
                                    usos.map(
                                        (uso: {
                                            id: any;
                                            descripcion: any;
                                            fecha: any;
                                        }) => (
                                            <li
                                                key={uso?.id}
                                                className='flex justify-between items-center mb-2'
                                            >
                                                {uso?.descripcion} - Fecha:{' '}
                                                {uso?.fecha}
                                            </li>
                                        )
                                    )
                                ) : (
                                    <li>
                                        No hay usos registrados para esta
                                        tarjeta.
                                    </li>
                                )}
                            </ul>
                        </section>
                    ) : undefined;
                }
            )}
        </>
    );
};

export default GestionTarjetas;
