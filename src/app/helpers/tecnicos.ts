interface Tecnico {
    numeroDocumento: string;
    nombre: string;
    apellido: string;
    habilitado: boolean;
    medioContacto: string;
    areaCobertura: string;
}

export const validarTecnicos = (
    tecnico: Tecnico
): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Validar número de documento
    if (!tecnico.numeroDocumento) {
        errors.push('El número de documento es obligatorio.');
    } else if (!/^\d+$/.test(tecnico.numeroDocumento)) {
        // Verificar que sea solo números
        errors.push('El número de documento debe contener solo dígitos.');
    }

    // Validar nombre
    if (!tecnico.nombre) {
        errors.push('El nombre es obligatorio.');
    }

    // Validar apellido
    if (!tecnico.apellido) {
        errors.push('El apellido es obligatorio.');
    }

    // Validar medio de contacto
    if (!tecnico.medioContacto) {
        errors.push('El medio de contacto es obligatorio.');
    } else if (
        !/\S+@\S+\.\S+/.test(tecnico.medioContacto) &&
        !/^(\+?[\d\s-]{7,15})$/.test(tecnico.medioContacto)
    ) {
        // Verifica si es un correo o un número de teléfono válido
        errors.push(
            'El medio de contacto debe ser un correo electrónico o un número de teléfono válido.'
        );
    }

    // Validar área de cobertura
    if (!tecnico.areaCobertura) {
        errors.push('El área de cobertura es obligatoria.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
