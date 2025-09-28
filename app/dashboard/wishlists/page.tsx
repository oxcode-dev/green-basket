import { ProductCard } from '@/components/ProductCard'
import { WishlistItemType } from '@/types'
import { isEmpty } from '@/types/helper'
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type WishlistFetchType = {
    data: WishlistItemType[];
    message: string
    success: boolean
}

const page = () => {
    async function fetchAddress() {
        const getTokenResponse = await fetch('/api/fetch-token')
    
        const getToken = await getTokenResponse.json()
    
        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/wishlists`, {
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

    const { data, error, isLoading } = useQuery<WishlistFetchType>({
        queryKey: ["list_address"],
        queryFn: fetchAddress,
    });

    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Wishlists</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-y-4">
                    { Array.from({ length: 6 }).map((item, key) => (
                        <div className="group relative" key={key}>
                            <a href="#" title="Remove from Wishlist" className="absolute -top-2 -right-1 flex md:hidden group-hover:flex">
                                <span className="bg-red-500 text-white rounded-full p-1">
                                    <TrashIcon className="size-5" />
                                </span>
                            </a>
                            <ProductCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default page