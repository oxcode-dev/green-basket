'use client';

import AddressCard from '@/components/AddressCard';
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
            </div>

            <div className="hidden fixed z-50 inset-0 flex items-start pt-10 justify-center overflow-hidden">
                <div className="z-[10] bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Rules to Follow
                        </h3>
                    
                        </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            type="button">
                            Accept
                        </button>
                    </div>
                </div>
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-400 opacity-75" />
                </div>
            </div>
        </div>
    )
}

export default page