import fs from 'fs';
import path from 'path';

async function obtenerIncidentes() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'incidentes.json');

    if (!fs.existsSync(filePath)) {
        return [];
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');

    try {
        return JSON.parse(fileContents) || [];
    } catch (error) {
        console.error('Error al analizar incidentes.json:', error);
        return [];
    }
}

async function guardarIncidentes(incidentes) {
    const existingData = await obtenerIncidentes();

    const nuevasIncidentes = incidentes.filter(
        incidente =>
            !existingData.some(existing => existing.id === incidente.id)
    );

    if (nuevasIncidentes.length > 0) {
        const updatedData = [...existingData, ...nuevasIncidentes];

        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'incidentes.json'),
            JSON.stringify(updatedData, null, 2),
            'utf8'
        );
    }
}

export async function GET() {
    try {
        const incidentes = await obtenerIncidentes();

        return new Response(JSON.stringify(incidentes), { status: 200 });
    } catch (error) {
        console.error('Error procesando la solicitud:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const incidente = await req.json();
        await guardarIncidentes([incidente]);

        return new Response(
            JSON.stringify({
                mensaje: 'Incidente registrado exitosamente'
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error('Error procesando la solicitud:', error);
        return new Response(
            JSON.stringify({
                errores: ['Error al procesar la solicitud.']
            }),
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const incidenteActualizado = await req.json();
        const existingData = await obtenerIncidentes();

        const index = existingData.findIndex(
            incidente => incidente.id === incidenteActualizado.id
        );

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Incidente no encontrado' }),
                { status: 404 }
            );
        }

        existingData[index] = {
            ...existingData[index],
            ...incidenteActualizado
        };
        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'incidentes.json'),
            JSON.stringify(existingData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Incidente actualizado exitosamente'
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error procesando la solicitud:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}
