import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { producto, userId } = await req.json();
        if (!producto || !userId) {
            return new Response(
                JSON.stringify({ error: 'Datos incompletos' }),
                { status: 400 }
            );
        }

        const canje = {
            producto,
            userId,
            fechaCanje: new Date().toISOString()
        };

        const filePath = path.join(process.cwd(), 'src', 'data', 'canjes.json');

        let canjes = [];

        if (fs.existsSync(filePath)) {
            const canjesData = fs.readFileSync(filePath, 'utf-8');
            if (canjesData) {
                canjes = JSON.parse(canjesData);
            }
        }

        canjes.push(canje);

        fs.writeFileSync(filePath, JSON.stringify(canjes, null, 2));

        return new Response(
            JSON.stringify({ message: 'Canje guardado exitosamente' }),
            { status: 201 }
        );
    } catch (error) {
        console.error('Error al guardar el canje:', error);
        return new Response(
            JSON.stringify({ error: 'Error al guardar el canje' }),
            { status: 500 }
        );
    }
}
