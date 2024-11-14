import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

async function getUsers() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
}

async function saveUser(newUser) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const users = await getUsers();

    users.push(newUser);

    await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2));
}

export async function POST(request) {
    const data = await request.json();
    const { password2, ...userData } = data;
    const camposPersonaHumana = ['nombre', 'apellido', 'email', 'telefono'];
    const camposPersonaJuridica = ['razonSocial', 'tipo', 'rubro', 'email'];

    if (userData.personaJuridica) {
        if (!Object.keys(userData).includes(...camposPersonaJuridica)) {
            return NextResponse.json(
                { error: 'Por favor, completá todos los campos requeridos' },
                { status: 400 }
            );
        }
    } else {
        if (!Object.keys(userData).includes(...camposPersonaHumana)) {
            return NextResponse.json(
                { error: 'Por favor, completá todos los campos requeridos' },
                { status: 400 }
            );
        }
    }

    const users = await getUsers();

    const userExists = users.some(
        user => user.documento === userData.documento
    );
    if (userExists) {
        return NextResponse.json(
            { error: 'El documento ya está registrado' },
            { status: 409 }
        );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

    await saveUser(userData);

    return NextResponse.json(
        {
            message: 'Usuario registrado exitosamente',
            user: {
                documento: userData.documento,
                personaJuridica: userData.personaJuridica
            }
        },
        { status: 200 }
    );
}
