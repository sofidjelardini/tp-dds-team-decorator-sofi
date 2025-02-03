'use client';
import { Button } from '@/components/ui/button';
import heladerasData from '@/data/heladeras.json';
import viandasData from '@/data/viandas.json';
import incidentesData from '@/data/incidentes.json';
import { useEffect, useState } from 'react';
import MockBroker from './MockBroker';

const ListadoHeladeras = () => {
    const [heladeras, setHeladeras] = useState<any>(heladerasData);
    const [colaborador, setColaborador] = useState<any>();
    const [temperatures, setTemperatures] = useState<{ [key: number]: number }>(
        {}
    );
    const broker = new MockBroker();

    useEffect(() => {
        setColaborador(localStorage.getItem('userId'));
        heladeras.forEach((heladera: { id: any }) => {
            broker.simulateTemperatureUpdates(heladera.id);
        });

        recibirDataBroker();

        setInterval(() => {
            recibirDataBroker();
        }, 600000);
    }, [heladeras]);

    const recibirDataBroker = () => {
        while (true) {
            const temperatureMessage = broker.receiveFromQueue('temperatures');
            if (!temperatureMessage) break;

            setTemperatures(prev => ({
                ...prev,
                [temperatureMessage.heladeraId]: temperatureMessage.temperature
            }));
        }
    };

    const actualizarHeladeras = async () => {
        try {
            const response = await fetch('/api/heladeras');
            if (!response.ok) {
                throw new Error('Error al fetch las heladeras');
            }
            const data = await response.json();
            setHeladeras(data);
        } catch (error) {
            console.error('Error al actualizar heladeras:', error);
        }
    };

    const colaboradorSuscripto = (heladeraId: number) => {
        const dataHeladera = heladeras.find(
            (heladera: { id: number }) => heladera.id === heladeraId
        );
        return dataHeladera?.colaboradoresSuscriptos?.includes(colaborador);
    };

    const contarViandas = (heladeraId: number) => {
        const viandasEnHeladera = viandasData.filter(
            vianda => vianda.heladera === heladeraId
        );
        return viandasEnHeladera.length;
    };

    const suscripcionHeladera = async (heladeraId: number) => {
        const dataHeladera = heladeras.find(
            (heladera: { id: number }) => heladera.id === heladeraId
        );

        const heladeraData = {
            ...dataHeladera,
            colaboradoresSuscriptos: [
                ...dataHeladera?.colaboradoresSuscriptos,
                colaborador
            ]
        };
        try {
            const response = await fetch('/api/heladeras', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heladeraData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.mensaje);
                await actualizarHeladeras();
            } else {
                alert(result.mensaje || 'Error al suscribirse a la heladera');
                await actualizarHeladeras();
            }
        } catch (error) {
            console.error('Error al suscribirse a la heladera:', error);
            alert('Error al suscribirse a la heladera');
        }
    };

    const desuscripcionHeladera = async (heladeraId: number) => {
        const colaborador = localStorage.getItem('userId');
        const dataHeladera = heladeras.find(
            (heladera: { id: number }) => heladera.id === heladeraId
        );
        const colaboradoresSinUsuarioActual =
            dataHeladera.colaboradoresSuscriptos.filter(
                (colab: string | null) => colab !== colaborador
            );
        const heladeraData = {
            ...dataHeladera,
            colaboradoresSuscriptos: colaboradoresSinUsuarioActual
        };
        try {
            const response = await fetch('/api/heladeras', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heladeraData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Desuscripción exitosa!');
                await actualizarHeladeras();
            } else {
                alert(
                    result.mensaje || 'Error al desuscribirse de la heladera'
                );
                await actualizarHeladeras();
            }
        } catch (error) {
            console.error('Error al desuscribirse de la heladera:', error);
            alert('Error al desuscribirse de la heladera');
        }
    };

    return (
        <div>
            <section className='technicians-list'>
                <ul className='list-disc pl-5'>
                    {heladeras.map((heladera: any) => (
                        <li
                            key={heladera.id}
                            className='flex justify-between items-center mb-2 mr-10'
                        >
                            {heladera.nombre} - Dirección: {heladera.direccion}-
                            Estado: {heladera.estado}- Viandas disponibles:{' '}
                            {contarViandas(heladera.id)}- Temperatura:{' '}
                            {temperatures[heladera.id]
                                ? `${temperatures[heladera.id].toFixed(2)} °C`
                                : 'N/A'}
                            - Alertas:{' '}
                            {incidentesData
                                .filter(
                                    incidente =>
                                        incidente.heladeraId === heladera.id &&
                                        incidente.solucionado === false
                                )
                                .map(inc => inc?.subtipo || inc?.descripcion)
                                .join(', ') || 'Sin alertas'}
                            <div className='flex'>
                                <Button
                                    onClick={() =>
                                        colaboradorSuscripto(heladera.id)
                                            ? desuscripcionHeladera(heladera.id)
                                            : suscripcionHeladera(heladera.id)
                                    }
                                    className={
                                        colaboradorSuscripto(heladera.id)
                                            ? 'w-auto bg-yellow-600 hover:bg-yellow-500'
                                            : 'w-auto bg-blue-500 hover:bg-blue-400'
                                    }
                                >
                                    {colaboradorSuscripto(heladera.id)
                                        ? 'Desuscribirse'
                                        : 'Suscribirse'}
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ListadoHeladeras;
