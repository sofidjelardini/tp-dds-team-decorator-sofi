export function validarColaboraciones(colaboraciones: any[]) {
    const errores: string[] = [];
    const tiposDocPermitidos = ['LC', 'LE', 'DNI'];
    const formasColaboracionPermitidas = [
        'DINERO',
        'DONACION_VIANDAS',
        'REDISTRIBUCION_VIANDAS',
        'ENTREGA_TARJETAS'
    ];

    colaboraciones.forEach(
        (
            colab: {
                tipoDoc: any;
                documento: any;
                nombre: any;
                apellido: any;
                mail: any;
                fechaColaboracion: any;
                formaColaboracion: any;
                cantidad: any;
            },
            index: number
        ) => {
            const {
                tipoDoc,
                documento,
                nombre,
                apellido,
                mail,
                fechaColaboracion,
                formaColaboracion,
                cantidad
            } = colab;

            if (!tiposDocPermitidos.includes(tipoDoc)) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Tipo de documento inválido '${tipoDoc}'. Debe ser uno de ${tiposDocPermitidos.join(
                        ', '
                    )}.`
                );
            }

            if (!/^\d{10}$/.test(documento)) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Documento '${documento}' debe ser numérico y tener 10 dígitos.`
                );
            }

            if (typeof nombre !== 'string' || nombre.length > 50) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Nombre '${nombre}' debe ser texto y no exceder los 50 caracteres.`
                );
            }

            if (typeof apellido !== 'string' || apellido.length > 50) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Apellido '${apellido}' debe ser texto y no exceder los 50 caracteres.`
                );
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) || mail.length > 50) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Mail '${mail}' debe tener formato válido y no exceder los 50 caracteres.`
                );
            }

            if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaColaboracion)) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Fecha de colaboración '${fechaColaboracion}' debe estar en formato dd/mm/aaaa.`
                );
            }

            if (!formasColaboracionPermitidas.includes(formaColaboracion)) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Forma de colaboración '${formaColaboracion}' inválida. Debe ser uno de ${formasColaboracionPermitidas.join(
                        ', '
                    )}.`
                );
            }

            if (!/^\d{1,7}$/.test(cantidad)) {
                errores.push(
                    `Error en la colaboración ${
                        index + 1
                    }: Cantidad '${cantidad}' debe ser numérica y tener hasta 7 dígitos.`
                );
            }
        }
    );

    return errores;
}
