import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try{
        // Parse the request body
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        const rememberMe = formData.get('remember_me');
    
        return new Response(JSON.stringify({email, password, rememberMe}), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        new Response(JSON.stringify(error), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  }