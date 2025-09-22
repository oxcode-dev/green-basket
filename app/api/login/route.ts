import { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import cookie from 'cookie'
import { NextApiResponse } from "next";

type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
}

export async function POST(request: NextRequest, res: NextApiResponse) {
    try{
        // Parse the request body
        // const formData = await request.formData();
        // const email = formData.get('email');
        //@ts-ignore
        // const body : LoginFormProp = request.body;
        const body = await request.json();

        const { email, password, remember_me } = body

        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, remember_me }),
        })

        const data = await response.json()

        if (!data.success) {
            return new Response(JSON.stringify({ message: 'Invalid credentials', data }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Assuming API returns a token (JWT)
        const token = data?.data?.token

        if(token) {
            const cookieStore = await cookies();
            //@ts-ignore
            cookieStore.set({
                name: 'token',
                value: token,
                httpOnly: true, // Prevents client-side JavaScript access
                // secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
                sameSite: 'strict', // Enhances security against CSRF attacks
                maxAge: 60 * 60 * 24 * 7, // 1 week expiration
                path: '/', // Available across the entire site
            });    

        }

        return new Response(JSON.stringify({data}), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        new Response(JSON.stringify(error), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  }