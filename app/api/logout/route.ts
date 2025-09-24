import { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import cookie from 'cookie'
import { NextApiResponse } from "next";

export async function POST(request: NextRequest, res: NextApiResponse) {
    try{
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get('token');
    
        // if (!sessionToken) {
        //     return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        //         status: 401,
        //         headers: { 'Content-Type': 'application/json' },
        //     });
        // }

        const response = await fetch('http://127.0.0.1:8000/api/logout', {
            method: 'GET',
            headers: { 
                Authorization: `Bearer ${sessionToken?.value}`,
                'Content-Type': 'application/json' 
            },
            // credentials: 'include',
        })

        const data = await response.json()
        
        //@ts-ignore
        cookieStore.set({
            name: 'token',
            value: '',
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            expires: new Date(0),
            path: ''
        });    


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