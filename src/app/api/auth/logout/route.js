export async function POST(req) {
    //vamos a ver
    return new Response(JSON.stringify({ message: 'Logout exitoso' }), {
        status: 200,
        headers
    });
}
