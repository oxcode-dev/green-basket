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
    
        return new Response(JSON.stringify({ email, password, remember_me }), {
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