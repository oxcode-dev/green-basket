'use client';

import AddressCard from '@/components/AddressCard';
import { AddressItemProp, AddressTypeProp } from '@/types';
import { isEmpty } from '@/types/helper';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

type AddressFetchType = {
    data: AddressTypeProp;
    message: string
    success: boolean
}

async function fetchUser() {
    const getTokenResponse = await fetch('/api/fetch-token')

    const getToken = await getTokenResponse.json()

    if(isEmpty(getToken)) {
        return alert('Unauthenticated User')
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/addresses`, {
        headers: { 
            Authorization: `Bearer ${getToken.token}`,
            'Content-Type': 'application/json' 
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
}

const page = () => {
    const { data, error, isLoading } = useQuery<AddressFetchType>({
        queryKey: ["user"],
        queryFn: fetchUser,
    });
    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Delivery Addresses</h2>
                </div>
            </div>
            <div className="p-3 md:p-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    { data?.data?.data?.map((item, key) => (
                        <div key={key}>
                            <AddressCard address={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default page