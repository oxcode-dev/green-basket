'use client';

import AddressCard from '@/components/AddressCard';
import { EmptyState } from '@/components/EmptyState';
import Loading from '@/components/Loading';
import { AddressItemProp } from '@/types';
import { isEmpty } from '@/types/helper';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

type AddressFetchType = {
    data: AddressItemProp[];
    message: string
    success: boolean
}

async function fetchAddress() {
    const getTokenResponse = await fetch('/api/fetch-token')

    const getToken = await getTokenResponse.json()

    if(isEmpty(getToken)) {
        location.href = '/logout'
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
        queryKey: ["list_address"],
        queryFn: fetchAddress,
    });

    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Delivery Addresses</h2>
                </div>
            </div>
            <div className="p-3 md:p-4">
                { isLoading ? <Loading /> : null }
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    { data?.data?.map((item, key) => (
                        <div key={key}>
                            <AddressCard address={item} />
                        </div>
                    ))}
                </div>
                { !isLoading && data?.data?.length === 0 ? <EmptyState text="No Data!" /> : null }
            </div>
        </div>
    )
}

export default page