'use client';
import Head from 'next/head';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';

const Home = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        console.log('storedUserId: ', storedUserId);
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            redirect('/auth');
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Contribuciones a la Comunidad</title>
                <meta
                    name='description'
                    content='Contribuye a ayudar a personas en situación vulnerable.'
                />
            </Head>
            <main>
                <HomePage userId={userId} />
            </main>
        </div>
    );
};

export default Home;
