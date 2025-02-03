import fs from 'fs';
import path from 'path';

async function obtenerDistribuciones() {
    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        'distribuciones.json'
    );

    if (!fs.existsSync(filePath)) {
        return [];
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');

    try {
        return JSON.parse(fileContents) || [];
    } catch (error) {
        console.error('Error al analizar distribuciones.json:', error);
        return [];
    }
}

async function guardarDistribuciones(distribuciones) {
    const existingData = await obtenerDistribuciones();

    const nuevasDistribuciones = distribuciones.filter(
        distribucion =>
            !existingData.some(
                existing =>
                    existing.viandaId === distribucion.viandaId &&
                    existing.heladeraOrigen === distribucion.heladeraOrigen &&
                    existing.heladeraDestino === distribucion.heladeraDestino &&
                    existing.motivo === distribucion.motivo &&
                    existing.fecha === distribucion.fecha &&
                    existing.colaborador === distribucion.colaborador
            )
    );

    if (nuevasDistribuciones.length > 0) {
        const updatedData = [...existingData, ...nuevasDistribuciones];

        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'distribuciones.json'),
            JSON.stringify(updatedData, null, 2),
            'utf8'
        );
    }
}

export async function POST(req) {
    try {
        const distribuciones = await req.json();
        await guardarDistribuciones(distribuciones);

        return new Response(
            JSON.stringify({
                mensaje: 'Distribuciones guardadas exitosamente'
            }),
            { status: 200 }
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
        const distribucionActualizada = await req.json();
        const existingData = await obtenerDistribuciones();

        const index = existingData.findIndex(
            distribucion =>
                distribucion.viandaId === distribucionActualizada.viandaId
        );

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Distribución no encontrada' }),
                { status: 404 }
            );
        }

        existingData[index].estado = distribucionActualizada.estado;
        await guardarDistribuciones(existingData);

        return new Response(
            JSON.stringify({
                mensaje: 'Estado de la distribución actualizado exitosamente'
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
