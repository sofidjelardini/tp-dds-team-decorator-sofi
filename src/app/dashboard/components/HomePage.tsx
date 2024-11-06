'use client';
import { redirect } from 'next/navigation';
import React from 'react';
import MapaHeladeras from './MapaHeladeras';
import styles from './styles/homePage.module.css';

interface HomePageProps {
    userId: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ userId }) => {
    const ubicacionesHeladeras = [
        { lat: -34.6037, lng: -58.3816, nombre: 'Heladera 1' },
        { lat: -34.6157, lng: -58.3839, nombre: 'Heladera 2' },
        { lat: -34.6295, lng: -58.4278, nombre: 'Heladera 3' }
    ];

    return (
        <div className={styles.local}>
            <section className={styles.section}>
                <h1 className={styles.title}>
                    Bienvenido a la Plataforma de Contribuciones!
                </h1>
            </section>
            <section className={styles.section}>
                <h2 className={styles.title}>Formas de Contribuir</h2>

                <h3 className={styles.subtitle}>Personas Humanas</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donaciones de dinero
                        </strong>
                        <p>
                            Se deberá indicar la fecha de la donación, un monto
                            y una frecuencia (en caso de que se opte por donar
                            de forma periódica)
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donación de vianda
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
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Distribución de viandas
                        </strong>
                        <p>
                            Se deberá indicar la heladera origen, la heladera
                            destino, la cantidad de viandas a mover, el motivo
                            de la distribución (por el momento puede ser: un
                            desperfecto en la heladera o falta de viandas en la
                            heladera destino) y la fecha en que se realizó la
                            distribución.
                        </p>
                    </li>
                </ul>

                <h3 className={styles.subtitle}>Personas Jurídicas</h3>
                <p className={styles.text}>
                    Si es una persona jurídica deberá indicar razón social, su
                    tipo (Gubernamental, ONG, Empresa, Institución), rubro y al
                    menos un medio de contacto. En caso de poseer, puede indicar
                    una dirección.
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Donación de dinero
                        </strong>
                        <p>
                            Se deberá indicar la fecha de la donación, un monto
                            y una frecuencia (en caso de que se opte por donar
                            de forma periódica)
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <strong className={styles.strong}>
                            Hacerse cargo de una heladera
                        </strong>
                        <p>
                            En muchos casos hay empresas como kioscos,
                            restaurantes, estaciones de servicio, etc. que
                            deciden colocar una heladera en la puerta de sus
                            locales.
                        </p>
                    </li>
                </ul>

                <button
                    className={styles.button}
                    onClick={() => redirect(`${userId}/viandas`)}
                >
                    Cargar Viandas
                </button>
                <button
                    className={styles.button}
                    onClick={() => redirect(`${userId}/personas`)}
                >
                    Registrar Persona Vulnerable
                </button>
                <button
                    className={styles.button}
                    onClick={() => redirect(`${userId}/heladeras`)}
                >
                    Gestionar Heladeras
                </button>
                <button
                    className={styles.button}
                    onClick={() => redirect(`${userId}/mapa`)}
                >
                    Ver Mapa de Heladeras
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
            </section>

            <section className={styles.section}>
                <h2 className={styles.title}>
                    Ubicación de las heladeras disponibles
                </h2>
                <MapaHeladeras ubicaciones={ubicacionesHeladeras} />
            </section>
        </div>
    );
};

export default HomePage;
