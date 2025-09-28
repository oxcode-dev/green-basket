'use client';

import { EmptyState } from '@/components/EmptyState';
import Loading from '@/components/Loading';
import Pager from '@/components/Pager';
import WishlistCard from '@/components/WishlistCard';
import { WishlistDataType } from '@/types'
import { isEmpty } from '@/types/helper'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

type WishlistFetchType = {
    data: WishlistDataType[];
    message: string
    success: boolean
}

const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const page = Number(searchParams.get('page')) || 1
    const setPage = (page: number) => {
        router.push(`${pathname}?page=${page}`)
    }
 
    async function fetchWishlists(page: number) {
        const getTokenResponse = await fetch('/api/fetch-token')
    
        const getToken = await getTokenResponse.json()
    
        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/wishlists?page=${page}`, {
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
    // const [page, setPage] = React.useState(1)

    const { data: wishlists, error, isLoading } = useQuery<WishlistFetchType>({
        queryKey: ["list_wishlists", page],
        queryFn: () => fetchWishlists(page),
        placeholderData: keepPreviousData,
        staleTime: 3 * 60 * 1000,
    });

    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Wishlists</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                { isLoading ? <Loading /> : null }
                
                { !isLoading && data?.data?.length === 0 ? <EmptyState text="No Data!" /> : null }

                { !isLoading ? (
                    <div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-y-4">
                            { wishlists?.data?.data.map((item, key) => (
                                <div key={key}>
                                    <WishlistCard item={item} />
                                </div>
                            ))}
                        </div>

                        <Pager
                            last_page={wishlists?.data?.last_page}
                            current_page={wishlists?.data?.current_page}
                            setPage={setPage}
                        />
                    </div>
                ) : null }
            </div>
        </div>

    )
}

export default page