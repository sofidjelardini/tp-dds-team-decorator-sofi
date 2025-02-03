'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import incidentesData from '@/data/incidentes.json';
import distribucionesData from '@/data/distribuciones.json';
import heladerasData from '@/data/heladeras.json';

Chart.register(...registerables);

const Reportes: React.FC = () => {
    const [reportes, setReportes] = useState({
        fallasPorHeladera: {},
        viandasRetiradas: {},
        viandasColocadas: {},
        viandasPorColaborador: {}
    });

    const heladerasMap = heladerasData.reduce(
        (acc: { [key: string]: string }, heladera) => {
            acc[heladera.id] = heladera.nombre;
            return acc;
        },
        {}
    );

    useEffect(() => {
        obtenerReportes();
    }, []);

    const obtenerReportes = async () => {
        const fallasPorHeladera = calcularFallasPorHeladera(incidentesData);
        const viandasRetiradas = calcularViandasRetiradas(distribucionesData);
        const viandasColocadas = calcularViandasColocadas(distribucionesData);
        const viandasPorColaborador =
            calcularViandasPorColaborador(distribucionesData);

        setReportes({
            fallasPorHeladera,
            viandasRetiradas,
            viandasColocadas,
            viandasPorColaborador
        });
    };

    const calcularFallasPorHeladera = (incidentes: any[]) => {
        return incidentes.reduce(
            (
                acc: { [x: string]: any },
                incidente: { heladeraId: string | number }
            ) => {
                acc[incidente.heladeraId] =
                    (acc[incidente.heladeraId] || 0) + 1;
                return acc;
            },
            {}
        );
    };

    const calcularViandasRetiradas = (distribuciones: any[]) => {
        return distribuciones.reduce(
            (
                acc: { [x: string]: any },
                distribucion: { heladeraOrigen: string | number }
            ) => {
                acc[distribucion.heladeraOrigen] =
                    (acc[distribucion.heladeraOrigen] || 0) + 1;
                return acc;
            },
            {}
        );
    };

    const calcularViandasColocadas = (distribuciones: any[]) => {
        return distribuciones.reduce(
            (
                acc: { [x: string]: any },
                distribucion: { heladeraDestino: string | number }
            ) => {
                acc[distribucion.heladeraDestino] =
                    (acc[distribucion.heladeraDestino] || 0) + 1;
                return acc;
            },
            {}
        );
    };

    const calcularViandasPorColaborador = (distribuciones: any[]) => {
        return distribuciones.reduce(
            (
                acc: { [x: string]: any },
                distribucion: { colaborador: string | number }
            ) => {
                acc[distribucion.colaborador] =
                    (acc[distribucion.colaborador] || 0) + 1;
                return acc;
            },
            {}
        );
    };

    const generarGraficoFallas = () => {
        const labels = Object.keys(reportes.fallasPorHeladera).map(
            id => heladerasMap[id] || id
        );
        const data = Object.values(reportes.fallasPorHeladera);

        return {
            labels,
            datasets: [
                {
                    label: 'Fallas por Heladera',
                    data,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }
            ]
        };
    };

    const generarGraficoViandasRetiradas = () => {
        const labels = Object.keys(reportes.viandasRetiradas).map(
            id => heladerasMap[id] || id
        );
        const data = Object.values(reportes.viandasRetiradas);

        return {
            labels,
            datasets: [
                {
                    label: 'Viandas Retiradas',
                    data,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)'
                }
            ]
        };
    };

    const generarGraficoViandasColocadas = () => {
        const labels = Object.keys(reportes.viandasColocadas).map(
            id => heladerasMap[id] || id
        );
        const data = Object.values(reportes.viandasColocadas);

        return {
            labels,
            datasets: [
                {
                    label: 'Viandas Colocadas',
                    data,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                }
            ]
        };
    };

    const generarGraficoViandasColaborador = () => {
        const labels = Object.keys(reportes.viandasPorColaborador);
        const data = Object.values(reportes.viandasPorColaborador);

        return {
            labels,
            datasets: [
                {
                    label: 'Viandas por Colaborador',
                    data,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }
            ]
        };
    };

    return (
        <div>
            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <h3 className='font-semibold'>Fallas por Heladera</h3>
                    <Bar data={generarGraficoFallas()} />
                </div>
                <div>
                    <h3 className='font-semibold'>Viandas Retiradas</h3>
                    <Bar data={generarGraficoViandasRetiradas()} />
                </div>
                <div>
                    <h3 className='font-semibold'>Viandas Colocadas</h3>
                    <Bar data={generarGraficoViandasColocadas()} />
                </div>
                <div>
                    <h3 className='font-semibold'>Viandas por Colaborador</h3>
                    <Bar data={generarGraficoViandasColaborador()} />
                </div>
            </div>
        </div>
    );
};

export default Reportes;
