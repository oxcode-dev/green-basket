import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

 // For example, fetch data from your DB here
 let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export async function GET(request: Request) {
  const token = (await cookies()).get('token');
  // Optionally validate token with external API
  const res = await fetch('https://127.0.0.1:8000/api/user', {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!res.ok) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const user = await res.json()
   
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
