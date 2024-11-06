import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './styles/mapa.module.css';

const loadLeaflet = async () => {
    const L = await import('leaflet');
    return L;
};

const MapaHeladeras: React.FC<{
    ubicaciones: { lat: number; lng: number; nombre: string }[];
}> = ({ ubicaciones }) => {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        const initializeMap = async () => {
            const L = await loadLeaflet(); // Carga Leaflet dinámicamente

            if (!mapRef.current) {
                mapRef.current = L.map('map').setView(
                    [ubicaciones[0]?.lat || 0, ubicaciones[0]?.lng || 0],
                    12
                );

                L.tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        maxZoom: 19
                    }
                ).addTo(mapRef.current);

                const markerIcon = L.icon({
                    iconUrl:
                        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowUrl:
                        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                    shadowSize: [41, 41]
                });

                ubicaciones.forEach(ubicacion => {
                    L.marker([ubicacion.lat, ubicacion.lng], {
                        icon: markerIcon
                    })
                        .addTo(mapRef.current)
                        .bindPopup(ubicacion.nombre);
                });
            }
        };

        if (typeof window !== 'undefined') {
            initializeMap();
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [ubicaciones]);

    return <div id='map' className={styles.mapContainer}></div>;
};

export default MapaHeladeras;
