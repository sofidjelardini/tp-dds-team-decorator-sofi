import fs from 'fs';
import path from 'path';

async function obtenerTarjetas() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'tarjetas.json');

    if (!fs.existsSync(filePath)) {
        return { tarjetasDisponibles: [], tarjetasAsignadas: [] };
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');

    try {
        return (
            JSON.parse(fileContents) || {
                tarjetasDisponibles: [],
                tarjetasAsignadas: []
            }
        );
    } catch (error) {
        console.error('Error al analizar tarjetas.json:', error);
        return { tarjetasDisponibles: [], tarjetasAsignadas: [] };
    }
}

async function guardarTarjetas(tarjetas) {
    fs.writeFileSync(
        path.join(process.cwd(), 'src', 'data', 'tarjetas.json'),
        JSON.stringify(tarjetas, null, 2),
        'utf8'
    );
}

export async function GET(req) {
    const { tarjetasDisponibles, tarjetasAsignadas } = await obtenerTarjetas();
    return new Response(
        JSON.stringify({ tarjetasDisponibles, tarjetasAsignadas }),
        { status: 200 }
    );
}

export async function PUT(req) {
    try {
        const { tarjetasDisponibles, tarjetasAsignadas } = await req.json();
        await guardarTarjetas({ tarjetasDisponibles, tarjetasAsignadas });
        return new Response(
            JSON.stringify({ mensaje: 'Tarjetas actualizadas correctamente.' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al actualizar tarjetas:', error);
        return new Response(
            JSON.stringify({ error: 'Error al actualizar tarjetas.' }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const { colaboradorId } = await req.json();

        const { tarjetasDisponibles, tarjetasAsignadas } =
            await obtenerTarjetas();

        if (tarjetasDisponibles.length < 10) {
            return new Response(
                JSON.stringify({
                    mensaje: 'No hay suficientes tarjetas disponibles.'
                }),
                { status: 400 }
            );
        }

        const tarjetasAAsignar = tarjetasDisponibles.splice(0, 10);

        const nuevasAsignaciones = tarjetasAAsignar.map(numeroTarjeta => ({
            numeroTarjeta,
            colaboradorId,
            tarjetaAsignadaAPersonaVulnerable: false
        }));

        tarjetasAsignadas.push(...nuevasAsignaciones);

        await guardarTarjetas({ tarjetasDisponibles, tarjetasAsignadas });

        return new Response(
            JSON.stringify({
                mensaje: 'Tarjetas asignadas correctamente.',
                tarjetas: nuevasAsignaciones
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

export async function DELETE(req) {
    try {
        const { numeroTarjeta, colaboradorId } = await req.json();

        const { tarjetasDisponibles, tarjetasAsignadas } =
            await obtenerTarjetas();

        const tarjetaIndex = tarjetasAsignadas.findIndex(
            tarjeta =>
                tarjeta.numeroTarjeta === numeroTarjeta &&
                tarjeta.colaboradorId === colaboradorId
        );

        if (tarjetaIndex === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Tarjeta no encontrada.' }),
                { status: 404 }
            );
        }

        tarjetasAsignadas.splice(tarjetaIndex, 1);

        await guardarTarjetas({ tarjetasDisponibles, tarjetasAsignadas });

        return new Response(
            JSON.stringify({ mensaje: 'Tarjeta eliminada correctamente.' }),
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
