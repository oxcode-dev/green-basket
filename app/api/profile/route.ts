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

    const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${sessionToken?.value}`,
            'Content-Type': 'application/json' 
        },
        // credentials: 'include',
    })


    const data = await response.json()

    // if (!res.ok) {
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     }
    // }

    // return new Response('Hello, Next.js!', { status: 200, headers: { 'Set-Cookie': `token=${sessionToken?.value}` } });

    return new Response(JSON.stringify({ user: data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}