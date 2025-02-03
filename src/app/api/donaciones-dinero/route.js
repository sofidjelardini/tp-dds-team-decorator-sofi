import { validarDonaciones } from '@/app/helpers/donaciones';
import fs from 'fs';
import path from 'path';

function verificarDuplicados(nuevasDonaciones, donacionesExistentes) {
    return nuevasDonaciones.filter(nueva => {
        return !donacionesExistentes.some(
            existente =>
                existente.fecha === nueva.fecha &&
                existente.monto === nueva.monto &&
                existente.frecuencia === nueva.frecuencia &&
                existente.userId === nueva.userId
        );
    });
}

export async function POST(req) {
    try {
        const donaciones = await req.json();
        const errores = validarDonaciones(donaciones);
        if (errores.length > 0) {
            return new Response(JSON.stringify({ errores }), { status: 400 });
        }

        const filePath = path.join(
            process.cwd(),
            'src',
            'data',
            'donaciones.json'
        );
        let existingData = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContents);
        }

        const donacionesSinDuplicados = verificarDuplicados(
            donaciones,
            existingData
        );

        if (donacionesSinDuplicados.length === 0) {
            return new Response(
                JSON.stringify({
                    mensaje: 'No hay donaciones nuevas para cargar.'
                }),
                { status: 200 }
            );
        }

        const updatedData = [...existingData, ...donacionesSinDuplicados];

        fs.writeFileSync(
            filePath,
            JSON.stringify(updatedData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Donaciones cargadas exitosamente'
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
