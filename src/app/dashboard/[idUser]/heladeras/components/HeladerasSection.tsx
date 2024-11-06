'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MapaHeladeras from '@/app/dashboard/components/MapaHeladeras';

const HeladerasSection = () => {
    const [isOpenModalHeladera, setIsOpenModalHeladera] =
        useState<boolean>(false);

    const ubicacionesHeladeras = [
        { lat: -34.6037, lng: -58.3816, nombre: 'Heladera 1' },
        { lat: -34.6157, lng: -58.3839, nombre: 'Heladera 2' },
        { lat: -34.6295, lng: -58.4278, nombre: 'Heladera 3' }
    ];

    return (
        <div>
            <div>Heladeras Disponibles: </div>
            <MapaHeladeras ubicaciones={ubicacionesHeladeras} />
            <Button
                variant='outline'
                className='my-4'
                onClick={() => setIsOpenModalHeladera(true)}
            >
                Nueva heladera
            </Button>
            <div>RECOMENDACIÓN DE UBICACIÓN DE NUEVA HELADERA</div>
            <div>ALTA BAJA Y MODIFICACIÓN DE HELADERAS</div>
        </div>
    );
};

export default HeladerasSection;
