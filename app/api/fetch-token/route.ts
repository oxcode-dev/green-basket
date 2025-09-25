import { cookies } from "next/headers";


export async function GET(request: Request) {

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('token');

    if (!sessionToken) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    // return new Response('Hello, Next.js!', { status: 200, headers: { 'Set-Cookie': `token=${sessionToken?.value}` } });

    return new Response(JSON.stringify({ token: sessionToken?.value }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}