import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { latitud, longitud, radio } = await req.json();
        const recomendaciones = obtenerRecomendaciones(
            latitud,
            longitud,
            radio
        );

        return new Response(JSON.stringify({ recomendaciones }), {
            status: 200
        });
    } catch (error) {
        console.error(
            'Error procesando la solicitud de recomendaciones:',
            error
        );
        return new Response(
            JSON.stringify({
                errores: ['Error al procesar la solicitud de recomendaciones.']
            }),
            { status: 500 }
        );
    }
}

function obtenerRecomendaciones(latitud, longitud, radio) {
    const recomendaciones = [];

    const densidadDemografica = calcularDensidadDemografica(latitud, longitud);
    const nuevaUbicacionDensidad = encontrarNuevaUbicacionPorDensidad(
        latitud,
        longitud,
        densidadDemografica,
        radio
    );
    recomendaciones.push({
        latitud: nuevaUbicacionDensidad.lat,
        longitud: nuevaUbicacionDensidad.lng,
        razon: `Recomendación basada en la densidad demográfica: ${densidadDemografica}`
    });

    const movimientosCirculatorios = calcularMovimientosCirculatorios(
        latitud,
        longitud
    );
    const nuevaUbicacionMovimientos = encontrarNuevaUbicacionPorMovimientos(
        latitud,
        longitud,
        movimientosCirculatorios,
        radio
    );
    recomendaciones.push({
        latitud: nuevaUbicacionMovimientos.lat,
        longitud: nuevaUbicacionMovimientos.lng,
        razon: `Recomendación basada en movimientos circulatorios: ${movimientosCirculatorios}`
    });

    const nuevaUbicacionHeladeras = encontrarNuevaUbicacionPorHeladeras(
        latitud,
        longitud,
        radio
    );
    recomendaciones.push({
        latitud: nuevaUbicacionHeladeras.lat,
        longitud: nuevaUbicacionHeladeras.lng,
        razon: `Recomendación basada en heladeras existentes`
    });

    return recomendaciones;
}

function encontrarNuevaUbicacionPorDensidad(
    latitud,
    longitud,
    densidadDemografica,
    radio
) {
    const desplazamiento =
        parseInt(densidadDemografica) > 500 ? -radio * 0.1 : radio * 0.1;
    return encontrarNuevaUbicacion(
        latitud + desplazamiento / 111320,
        longitud,
        radio
    );
}

function encontrarNuevaUbicacionPorMovimientos(
    latitud,
    longitud,
    movimientosCirculatorios,
    radio
) {
    const desplazamiento =
        parseInt(movimientosCirculatorios) > 250 ? radio * 0.2 : -radio * 0.2;
    return encontrarNuevaUbicacion(
        latitud,
        longitud +
            desplazamiento / (111320 * Math.cos((latitud * Math.PI) / 180)),
        radio
    );
}

function encontrarNuevaUbicacionPorHeladeras(latitud, longitud, radio) {
    return encontrarNuevaUbicacion(latitud, longitud, radio);
}

function encontrarNuevaUbicacion(latitud, longitud, radio) {
    const heladerasExistentes = cargarHeladerasDesdeArchivo();
    const posiblesUbicaciones = [];

    for (let i = 0; i < 100; i++) {
        const nuevaLat = latitud + (Math.random() - 0.5) * (radio / 111320);
        const nuevaLng =
            longitud +
            (Math.random() - 0.5) *
                (radio / (111320 * Math.cos((latitud * Math.PI) / 180)));

        const esValida = heladerasExistentes.every(heladera => {
            const distancia = calcularDistancia(
                nuevaLat,
                nuevaLng,
                heladera.lat,
                heladera.lng
            );
            return distancia >= 500;
        });

        if (esValida) {
            posiblesUbicaciones.push({ lat: nuevaLat, lng: nuevaLng });
        }

        if (posiblesUbicaciones.length >= 1) {
            break;
        }
    }

    return posiblesUbicaciones.length > 0 ? posiblesUbicaciones[0] : null;
}

function cargarHeladerasDesdeArchivo() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'heladeras.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function calcularDensidadDemografica(latitud, longitud) {
    return Math.floor(Math.random() * 1000);
}

function calcularMovimientosCirculatorios(latitud, longitud) {
    return Math.floor(Math.random() * 500);
}

function calcularDistancia(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000;
}
