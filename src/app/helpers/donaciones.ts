export function validarDonaciones(donaciones: any[]) {
    const errores: string[] = [];

    donaciones.forEach(
        (
            donacion: { fecha: any; monto: number; frecuencia: any },
            index: number
        ) => {
            if (!donacion.fecha) {
                errores.push(
                    `La fecha es requerida para la donación ${index + 1}.`
                );
            }
            if (donacion.monto <= 0) {
                errores.push(
                    `El monto debe ser mayor que cero para la donación ${
                        index + 1
                    }.`
                );
            }
            if (!donacion.frecuencia) {
                errores.push(
                    `La frecuencia es requerida para la donación ${index + 1}.`
                );
            }
        }
    );

    return errores;
}
