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

export async function POST(req) {
    try {
        const nuevaVianda = await req.json();
        const filePath = path.join(
            process.cwd(),
            'src',
            'data',
            'viandas.json'
        );
        let existingData = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContents);
        }

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
            filePath,
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
