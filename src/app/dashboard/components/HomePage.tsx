'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import MapaHeladeras from './MapaHeladeras';
import styles from './styles/homePage.module.css';
import heladerasData from '@/data/heladeras.json';

interface HomePageProps {
    userId: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ userId }) => {
    const router = useRouter();
    const ubicacionesHeladeras = heladerasData;

    return (
        <div className={styles.local}>
            <section className={styles.section}>
                <h1 className={styles.title}>
                    Bienvenido a la Plataforma de Contribuciones!
                </h1>
            </section>
            <section className={styles.section}>
                <h2 className={styles.title}>Formas de Contribuir</h2>

                <h3 className={styles.subtitle}>
                    Si es una persona humana, puede contribuir:
                </h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donando dinero
                        </strong>
                        <p>
                            Se deberá indicar la fecha de la donación, un monto
                            y una frecuencia (en caso de que se opte por donar
                            de forma periódica).
                        </p>
                    </li>
                    <button
                        className={styles.button}
                        onClick={() =>
                            router.push(`dashboard/${userId}/donaciones`)
                        }
                    >
                        Donar Dinero
                    </button>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donando viandas
                        </strong>
                        <p>
                            Se solicitará los datos de cada vianda. Cuando un
                            colaborador decide donar una vianda debe completar
                            un formulario indicando qué comida es, una fecha de
                            caducidad, la fecha de la donación, el colaborador,
                            en qué heladera se encuentra y opcionalmente podrá
                            ingresar las calorías y el peso de la vianda.
                            Además, se debe conocer el estado en el que se
                            encuentra; es decir, si la misma fue entregada o no.
                        </p>
                    </li>
                    <button
                        className={styles.button}
                        onClick={() =>
                            router.push(`dashboard/${userId}/viandas`)
                        }
                    >
                        Cargar Viandas
                    </button>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Distribuyendo viandas
                        </strong>
                        <p>
                            Se deberá indicar la heladera origen, la heladera
                            destino, la cantidad de viandas a mover, el motivo
                            de la distribución (por el momento puede ser: un
                            desperfecto en la heladera o falta de viandas en la
                            heladera destino) y la fecha en que se realizó la
                            distribución.
                        </p>
                        <button
                            className={styles.button}
                            onClick={() =>
                                router.push(`dashboard/${userId}/distribucion`)
                            }
                        >
                            Distribuir Viandas
                        </button>
                    </li>
                </ul>

                <h3 className={styles.subtitle}>Personas Jurídicas</h3>
                <p className={styles.text}>
                    Si es una persona jurídica, puede contribuir:
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donando dinero
                        </strong>
                        <p>
                            Deberá indicar la fecha de la donación, un monto y
                            una frecuencia (en caso de que se opte por donar de
                            forma periódica).
                        </p>
                    </li>
                    <button
                        className={styles.button}
                        onClick={() =>
                            router.push(`dashboard/${userId}/donaciones`)
                        }
                    >
                        Donar Dinero
                    </button>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Haciéndose cargo de una heladera
                        </strong>
                        <p>
                            Si usted decide hacerse cargo de una heladera,
                            deberá proveer su dirección.
                        </p>
                    </li>
                </ul>

                <button
                    className={styles.button}
                    onClick={() => router.push(`dashboard/${userId}/heladeras`)}
                >
                    Gestionar Heladeras
                </button>
            </section>

            <section className={styles.section}>
                <h2 className={styles.title}>
                    Alta de Personas en situación vulnerable
                </h2>
                <p className={styles.text}>
                    De las mismas se deberá registrar el nombre, la fecha de
                    nacimiento, la fecha en la que fue registrado en el sistema,
                    si se encuentra en situación de calle o posee un domicilio
                    (en tal caso deberá ser ingresado) y el tipo y número de
                    documento (si posee). También se debe cargar si posee
                    menores a cargo, y en caso afirmativo, la cantidad.
                </p>
                <button
                    className={styles.button}
                    onClick={() => router.push(`dashboard/${userId}/personas`)}
                >
                    Registrar Persona Vulnerable
                </button>
            </section>

            <section className={styles.section}>
                <h2 className={styles.title}>
                    Ubicación de las heladeras disponibles
                </h2>
                <MapaHeladeras
                    ubicaciones={ubicacionesHeladeras}
                    mapId='heladeras'
                />
            </section>
        </div>
    );
};

export default HomePage;
