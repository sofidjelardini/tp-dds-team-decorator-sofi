import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

async function getUsers() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
}

async function updateUser(userId, updatedData) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const users = await getUsers();

    const userIndex = users.findIndex(user => user.documento === userId);
    if (userIndex === -1) {
        return null;
    }

    const user = users[userIndex];
    const updatedUser = { ...user };

    for (const key in updatedData) {
        if (updatedData[key] !== '') {
            updatedUser[key] = updatedData[key];
        }
    }

    users[userIndex] = updatedUser;

    await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2));

    return updatedUser;
}

async function deleteUser(userId) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'usuarios.json');
    const users = await getUsers();

    const userIndex = users.findIndex(user => user.documento === userId);
    if (userIndex === -1) {
        return null;
    }

    users.splice(userIndex, 1);

    await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2));

    return true;
}

export async function PUT(request) {
    const { userId, ...updatedData } = await request.json();

    if (!updatedData) {
        return NextResponse.json(
            { error: 'No se recibieron datos para actualizar' },
            { status: 400 }
        );
    }

    const updatedUser = await updateUser(userId, updatedData);

    if (!updatedUser) {
        return NextResponse.json(
            { error: 'Usuario no encontrado' },
            { status: 404 }
        );
    }

    return NextResponse.json(
        {
            message: 'Usuario actualizado exitosamente',
            user: updatedUser
        },
        { status: 200 }
    );
}

export async function DELETE(request) {
    const { userId } = await request.json();

    if (!userId) {
        return NextResponse.json(
            { error: 'No se recibió un ID de usuario para eliminar' },
            { status: 400 }
        );
    }

    const userDeleted = await deleteUser(userId);

    if (!userDeleted) {
        return NextResponse.json(
            { error: 'Usuario no encontrado' },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { message: 'Usuario eliminado exitosamente' },
        { status: 200 }
    );
}
