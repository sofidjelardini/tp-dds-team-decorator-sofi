import fs from 'fs';
import path from 'path';

function verificarDuplicados(nuevaVianda, viandasExistentes) {
    return !viandasExistentes.some(
        existente =>
            existente.comida === nuevaVianda.comida &&
            existente.fechaCaducidad === nuevaVianda.fechaCaducidad &&
            existente.fechaDonacion === nuevaVianda.fechaDonacion &&
            existente.colaborador === nuevaVianda.colaborador &&
            existente.heladera === nuevaVianda.heladera &&
            existente.calorias === nuevaVianda.calorias &&
            existente.peso === nuevaVianda.peso &&
            existente.estado === nuevaVianda.estado
    );
}

async function obtenerViandas() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'viandas.json');
    let existingData = [];

    if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        existingData = JSON.parse(fileContents);
    }

    return existingData;
}

export async function POST(req) {
    try {
        const nuevaVianda = await req.json();
        const existingData = await obtenerViandas();

        if (!verificarDuplicados(nuevaVianda, existingData)) {
            return new Response(
                JSON.stringify({
                    mensaje: 'La vianda ya existe.'
                }),
                { status: 400 }
            );
        }

        const updatedData = [...existingData, nuevaVianda];

        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'viandas.json'),
            JSON.stringify(updatedData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Vianda cargada exitosamente'
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
        const viandaActualizada = await req.json();
        const existingData = await obtenerViandas();

        const viandaIndex = existingData.findIndex(
            vianda => vianda.id === viandaActualizada.id
        );
        if (viandaIndex === -1) {
            return new Response(
                JSON.stringify({
                    mensaje: 'Vianda no encontrada.'
                }),
                { status: 404 }
            );
        }

        existingData[viandaIndex] = {
            ...existingData[viandaIndex],
            ...viandaActualizada
        };

        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'viandas.json'),
            JSON.stringify(existingData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Vianda actualizada exitosamente'
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

export async function DELETE(req) {
    try {
        const { id } = await req.json(); // Suponiendo que se envía el ID de la vianda a eliminar
        const existingData = await obtenerViandas();

        const viandaIndex = existingData.findIndex(vianda => vianda.id === id);
        if (viandaIndex === -1) {
            return new Response(
                JSON.stringify({
                    mensaje: 'Vianda no encontrada.'
                }),
                { status: 404 }
            );
        }

        // Eliminar la vianda
        existingData.splice(viandaIndex, 1);

        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'viandas.json'),
            JSON.stringify(existingData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Vianda eliminada exitosamente'
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
