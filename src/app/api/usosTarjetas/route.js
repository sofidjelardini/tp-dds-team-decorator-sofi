import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'usosTarjetas.json');

const readUsos = () => {
    if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    }
    return [];
};

const writeUsos = usos => {
    fs.writeFileSync(filePath, JSON.stringify(usos, null, 2), 'utf8');
};

const verificarDuplicados = (nuevoUso, usosExistentes) => {
    return !usosExistentes.some(
        existente =>
            existente.numeroTarjeta === nuevoUso.numeroTarjeta &&
            existente.fecha === nuevoUso.fecha &&
            existente.descripcion === nuevoUso.descripcion
    );
};

export async function GET(req) {
    try {
        const usos = readUsos();
        return new Response(JSON.stringify(usos), { status: 200 });
    } catch (error) {
        console.error('Error procesando la solicitud de obtención:', error);
        return new Response(
            JSON.stringify({ errores: ['Error al procesar la solicitud.'] }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const nuevoUso = await req.json();
        const usosExistentes = readUsos();

        if (!verificarDuplicados(nuevoUso, usosExistentes)) {
            return new Response(
                JSON.stringify({ mensaje: 'El uso ya existe.' }),
                { status: 400 }
            );
        }

        usosExistentes.push(nuevoUso);
        writeUsos(usosExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Uso registrado exitosamente' }),
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
        const usoModificado = await req.json();
        const usosExistentes = readUsos();

        const index = usosExistentes.findIndex(
            uso => uso.id === usoModificado.id
        );

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Uso no encontrado.' }),
                { status: 404 }
            );
        }

        usosExistentes[index] = usoModificado;
        writeUsos(usosExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Uso actualizado exitosamente' }),
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
        const { usoAEliminar } = await req.json();
        const usosExistentes = readUsos();

        const index = usosExistentes.findIndex(uso => uso.id === usoAEliminar);

        if (index === -1) {
            return new Response(
                JSON.stringify({ mensaje: 'Uso no encontrado.' }),
                { status: 404 }
            );
        }

        usosExistentes.splice(index, 1);
        writeUsos(usosExistentes);

        return new Response(
            JSON.stringify({ mensaje: 'Uso eliminado exitosamente' }),
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
