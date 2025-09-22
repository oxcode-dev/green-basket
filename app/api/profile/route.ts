import { cookies } from "next/headers";


export async function GET(request: Request) {
    //@ts-ignore
    // const sessionToken = cookies().get('token')?.value;

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('token');

    if (!sessionToken) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // const res = await fetch('https://127.0.0.1:8000/api/user', {
    //     headers: { Authorization: `Bearer ${sessionToken.value}` },
    // })

    // if (!res.ok) {
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     }
    // }

    // const user = await res.json()
   

    return new Response('Hello, Next.js!', { status: 200, headers: { 'Set-Cookie': `token=${sessionToken.value}` } });

    // return new Response(JSON.stringify({ user: {user} }), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json' },
    // });
}