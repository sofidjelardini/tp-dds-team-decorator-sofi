'use client';
import MapaHeladeras from '@/app/dashboard/components/MapaHeladeras';
import heladerasData from '@/data/heladeras.json';

const HeladerasSection = () => {
    const heladeras = heladerasData;

    return (
        <div>
            <div>Heladeras Disponibles: </div>
            <MapaHeladeras ubicaciones={heladeras} mapId='heladeras' />
        </div>
    );
};

export default HeladerasSection;
