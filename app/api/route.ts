import type { NextRequest } from "next/server";

 // For example, fetch data from your DB here
 let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export async function GET(request: Request) {
   
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: NextRequest) {

  try{
    // Parse the request body
    // const body = await request.json();
    const formData = await request.formData();
    const name = formData.get('name');

    // e.g. Insert new user into your DB
    users.push({ id: users.length + 1, name: name||'' })
    // users.push({ id: Date.now(), name: name })
  
    return new Response(JSON.stringify(users), {
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