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

    if (!tecnico.numeroDocumento) {
        errors.push('El número de documento es obligatorio.');
    } else if (!/^\d+$/.test(tecnico.numeroDocumento)) {
        errors.push('El número de documento debe contener solo dígitos.');
    }

    if (!tecnico.nombre) {
        errors.push('El nombre es obligatorio.');
    }

    if (!tecnico.apellido) {
        errors.push('El apellido es obligatorio.');
    }

    if (!tecnico.medioContacto) {
        errors.push('El medio de contacto es obligatorio.');
    } else if (
        !/\S+@\S+\.\S+/.test(tecnico.medioContacto) &&
        !/^(\+?[\d\s-]{7,15})$/.test(tecnico.medioContacto)
    ) {
        errors.push(
            'El medio de contacto debe ser un correo electrónico o un número de teléfono válido.'
        );
    }

    if (!tecnico.areaCobertura) {
        errors.push('El área de cobertura es obligatoria.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
