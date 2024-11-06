import { validarColaboraciones } from '@/app/helpers/colaboraciones';
import fs from 'fs';
import path from 'path';

function verificarDuplicados(nuevasColaboraciones, colaboracionesExistentes) {
    return nuevasColaboraciones.filter(nueva => {
        return !colaboracionesExistentes.some(
            existente => existente.documento === nueva.documento
        );
    });
}

export async function POST(req) {
    try {
        const colaboraciones = await req.json();
        const errores = validarColaboraciones(colaboraciones);
        if (errores.length > 0) {
            return new Response(JSON.stringify({ errores }), { status: 400 });
        }

        const filePath = path.join(
            process.cwd(),
            'src',
            'data',
            'colaboraciones.json'
        );
        let existingData = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContents);
        }

        const colaboracionesSinDuplicados = verificarDuplicados(
            colaboraciones,
            existingData
        );

        if (colaboracionesSinDuplicados.length === 0) {
            return new Response(
                JSON.stringify({
                    mensaje: 'No hay colaboraciones nuevas para cargar.'
                }),
                { status: 200 }
            );
        }

        const updatedData = [...existingData, ...colaboracionesSinDuplicados];

        fs.writeFileSync(
            filePath,
            JSON.stringify(updatedData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Colaboraciones cargadas exitosamente'
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
