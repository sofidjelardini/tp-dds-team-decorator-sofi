import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

async function getUsers() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
}

export async function POST(request) {
    const data = await request.json();
    const { documento, password } = data;

    if (!documento || !password) {
        return NextResponse.json(
            { error: 'Documento y contraseña son requeridos' },
            { status: 400 }
        );
    }

    const users = await getUsers();

    const user = users.find(user => user.documento === documento);
    if (!user) {
        return NextResponse.json(
            { error: 'Usuario no encontrado' },
            { status: 404 }
        );
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return NextResponse.json(
            { error: 'Contraseña incorrecta' },
            { status: 401 }
        );
    }

    return NextResponse.json(
        {
            message: 'Inicio de sesión exitoso',
            user: {
                documento: user.documento,
                personaJuridica: user.personaJuridica
            }
        },
        { status: 200 }
    );
}
