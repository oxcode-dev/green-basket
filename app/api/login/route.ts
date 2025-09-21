import { NextRequest } from "next/server";

type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
}

export async function POST(request: NextRequest) {
    try{
        // Parse the request body
        // const formData = await request.formData();
        // const email = formData.get('email');
        //@ts-ignore
        const body : LoginFormProp = request.body;

        const { email, password, remember_me } = body

        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, remember_me }),
        })

        const data = await response.json()

        // if (!response.ok) {
        //     return res.status(401).json({ message: 'Invalid credentials' })
        // }

        // Assuming API returns a token (JWT)
        // const token = data.token
    
        return new Response(JSON.stringify(data), {
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