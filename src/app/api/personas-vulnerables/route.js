import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

async function getPersonasVulnerables() {
    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        'personas-vulnerables.json'
    );
    const fileContents = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContents);
}

async function addPersonaVulnerable(newPersona) {
    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        'personas-vulnerables.json'
    );
    const personas = await getPersonasVulnerables();

    personas.push(newPersona);

    await fs.promises.writeFile(filePath, JSON.stringify(personas, null, 2));

    return newPersona;
}

async function deleteUser(documentoPersonaVulnerable) {
    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        'personas-vulnerables.json'
    );
    const personasVulnerables = await getPersonasVulnerables();

    const userIndex = personasVulnerables.findIndex(
        user => user.numDoc === documentoPersonaVulnerable
    );
    if (userIndex === -1) {
        return null;
    }

    personasVulnerables.splice(userIndex, 1);

    await fs.promises.writeFile(
        filePath,
        JSON.stringify(personasVulnerables, null, 2)
    );

    return true;
}

export async function POST(request) {
    const newPersona = await request.json();

    if (
        !newPersona.nombre ||
        !newPersona.fechaNacimiento ||
        !newPersona.tipoDoc ||
        !newPersona.numDoc
    ) {
        return NextResponse.json(
            { mensaje: 'Faltan campos obligatorios' },
            { status: 400 }
        );
    }

    const addedPersona = await addPersonaVulnerable(newPersona);

    return NextResponse.json(
        {
            mensaje: 'Persona registrada con éxito',
            persona: addedPersona
        },
        { status: 201 }
    );
}

export async function GET() {
    const personas = await getPersonasVulnerables();
    return NextResponse.json(personas, { status: 200 });
}

export async function DELETE(request) {
    const { documentoPersonaVulnerable } = await request.json();

    if (!documentoPersonaVulnerable) {
        return NextResponse.json(
            { error: 'No se recibió un ID de usuario para eliminar' },
            { status: 400 }
        );
    }

    const userDeleted = await deleteUser(documentoPersonaVulnerable);

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
