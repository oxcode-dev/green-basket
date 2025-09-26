import { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { NextApiResponse } from "next";

type RegistrationFormProp = {
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
    terms: boolean
};

export async function POST(request: NextRequest, res: NextApiResponse) {
    try{
        // Parse the request body
        const body = await request.json();

        await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/sanctum/csrf-cookie`)

        const { data: formData } = body
        // return new Response(JSON.stringify({ ...formData}), {
        //     status: 201,
        //     headers: { 'Content-Type': 'application/json' },
        // });

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData })
            // body: JSON.stringify({ email, password, remember_me }),
        })

        const data = await response.json()

        if (!data.success) {
            return new Response(JSON.stringify({ data }), {
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