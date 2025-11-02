export async function get(url: string, token: string = '') {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api${url}`, {
        headers: { 
            Authorization: `Bearer ${token ?? ''}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    if (!res.ok) {
        // throw new Error("Failed to fetch posts");
        console.log("Failed to fetch posts");
    }
    return res.json();
}