import fs from 'fs';
import path from 'path';
import { validarTecnicos } from '@/app/helpers/tecnicos';

const filePath = path.join(process.cwd(), 'src', 'data', 'tecnicos.json');

export async function GET(req) {
    try {
        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const tecnicos = JSON.parse(fileContents);
            return new Response(JSON.stringify(tecnicos), { status: 200 });
        } else {
            return new Response(JSON.stringify([]), { status: 200 });
        }
    } catch (error) {
        console.error('Error al obtener los técnicos:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al obtener los técnicos.'] }),
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const { dni, ...actualizacion } = await req.json();
        let existingData = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContents);
        }

        const index = existingData.findIndex(tecnico => tecnico.dni === dni);
        if (index === -1) {
            return new Response(
                JSON.stringify({ errores: ['Técnico no encontrado.'] }),
                { status: 404 }
            );
        }

        // Actualizar el técnico
        existingData[index] = { ...existingData[index], ...actualizacion };

        fs.writeFileSync(
            filePath,
            JSON.stringify(existingData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({
                mensaje: 'Información del técnico actualizada exitosamente.'
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al actualizar el técnico:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al actualizar el técnico.'] }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const nuevoTecnico = await req.json();
        const errores = validarTecnicos(nuevoTecnico);

        if (errores.length > 0) {
            return new Response(JSON.stringify({ errores }), { status: 400 });
        }

        let existingData = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContents);
        }

        const tecnicosSinDuplicados = verificarDuplicados(
            nuevoTecnico,
            existingData
        );

        if (!tecnicosSinDuplicados) {
            return new Response(
                JSON.stringify({
                    mensaje: 'El técnico ya existe.'
                }),
                { status: 400 }
            );
        }

        existingData.push(nuevoTecnico);

        fs.writeFileSync(
            filePath,
            JSON.stringify(existingData, null, 2),
            'utf8'
        );

        return new Response(
            JSON.stringify({ mensaje: 'Técnico cargado exitosamente.' }),
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

function verificarDuplicados(nuevoTecnico, tecnicosExistentes) {
    return !tecnicosExistentes.some(
        existente => existente.numeroDocumento === nuevoTecnico.numeroDocumento
    );
}
