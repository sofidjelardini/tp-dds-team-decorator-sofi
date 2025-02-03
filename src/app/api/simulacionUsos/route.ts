import { NextResponse } from 'next/server';
import cron from 'node-cron';
import tarjetasData from '@/data/tarjetas.json';
import personasVulnerablesData from '@/data/personas-vulnerables.json';

let task: cron.ScheduledTask;
let viandasEntregadas = 0;
let fechaActual = new Date().toISOString().split('T')[0];

export async function POST(req: Request) {
    const { userId } = await req.json();

    if (!task) {
        startCronJob(userId);
    }
    return NextResponse.json(
        { message: 'Simulación de usos iniciada' },
        { status: 200 }
    );
}

function startCronJob(userId: string) {
    if (!userId || task) {
        return;
    }

    task = cron.schedule('0 */3 * * *', async () => {
        const hoy = new Date().toISOString().split('T')[0];

        if (hoy !== fechaActual) {
            viandasEntregadas = 0;
            fechaActual = hoy;
        }

        const tarjetaId = getRandomTarjetaId(userId);
        const persona = getPersonaByTarjeta(tarjetaId);

        const limiteViandas = calcularLimiteViandas(persona);

        if (viandasEntregadas < limiteViandas) {
            const uso = simulateUsage(tarjetaId);
            await saveUsageToFile(uso);

            viandasEntregadas += 1;
        }
    });

    task.start();
}

function simulateUsage(tarjetaId: string) {
    return {
        id: Math.floor(Math.random() * 1000000),
        numeroTarjeta: tarjetaId,
        fecha: new Date().toISOString()
    };
}

function getRandomTarjetaId(userId: string) {
    const tarjetaIds = tarjetasData.tarjetasAsignadas
        .filter(
            tarjetas =>
                tarjetas.colaboradorId === userId &&
                tarjetas.tarjetaAsignadaAPersonaVulnerable === true
        )
        .map(tarj => tarj.numeroTarjeta);
    return tarjetaIds[Math.floor(Math.random() * tarjetaIds.length)];
}

function getPersonaByTarjeta(tarjetaId: string) {
    return personasVulnerablesData.find(
        persona => persona.tarjetaAsignada === tarjetaId
    );
}

function calcularLimiteViandas(persona: any) {
    if (persona && persona.tieneMenores) {
        return 4 + persona.cantMenores * 2;
    }
    return 4;
}

async function saveUsageToFile(uso: any) {
    try {
        const response = await fetch('http://localhost:3000/api/usosTarjetas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uso)
        });

        if (!response.ok) {
            throw new Error(`Error al guardar uso: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error guardando el uso:', error);
    }
}
