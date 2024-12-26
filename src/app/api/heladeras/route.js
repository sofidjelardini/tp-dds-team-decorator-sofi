import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'heladeras.json');

const readHeladeras = () => {
    if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    }
    return [];
};

const writeHeladeras = heladeras => {
    fs.writeFileSync(filePath, JSON.stringify(heladeras, null, 2), 'utf8');
};

const verificarDuplicados = (nuevaHeladera, heladerasExistentes) => {
    return !heladerasExistentes.some(
        existente =>
            existente.nombre === nuevaHeladera.nombre &&
            existente.direccion === nuevaHeladera.direccion &&
            existente.longitud === nuevaHeladera.longitud &&
            existente.latitud === nuevaHeladera.latitud
    );
};

export async function POST(req) {
    try {
        const nuevaHeladera = await req.json();
        const heladerasExistentes = readHeladeras();

        if (!verificarDuplicados(nuevaHeladera, heladerasExistentes)) {
            return new Response(
                JSON.stringify({ mensaje: 'La heladera ya existe.' }),
                { status: 400 }
            );
        }

        heladerasExistentes.push(nuevaHeladera);
        writeHeladeras(heladerasExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Heladera registrada exitosamente' }),
            { status: 201 }
        );
    } catch (error) {
        console.error('Error procesando la solicitud de registro:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const heladeraModificada = await req.json();
        const heladerasExistentes = readHeladeras();

        const index = heladerasExistentes.findIndex(
            heladera => heladera.nombre === heladeraModificada.nombre
        );

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Heladera no encontrada.' }),
                { status: 404 }
            );
        }

        heladerasExistentes[index] = heladeraModificada;
        writeHeladeras(heladerasExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Heladera actualizada exitosamente' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error procesando la solicitud de modificación:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
    try {
        const { nombre } = await req.json();
        const heladerasExistentes = readHeladeras();

        const index = heladerasExistentes.findIndex(
            heladera => heladera.nombre === nombre
        );

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Heladera no encontrada.' }),
                { status: 404 }
            );
        }

        heladerasExistentes.splice(index, 1);
        writeHeladeras(heladerasExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Heladera eliminada exitosamente' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error procesando la solicitud de baja:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}
