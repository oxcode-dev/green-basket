'use client'

import { EmptyState } from '@/components/EmptyState'
import Loading from '@/components/Loading'
import Pager from '@/components/Pager'
import { OrderList } from '@/sections/OrderSection'
import { OrderType } from '@/types'
import { isEmpty } from '@/types/helper'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type OrderFetchType = {
    data: OrderType[];
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
 
    async function fetchOrders(page: number) {
        const getTokenResponse = await fetch('/api/fetch-token')
    
        const getToken = await getTokenResponse.json()
    
        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/orders?page=${page}`, {
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

    const { data: orders, error, isLoading, isFetching } = useQuery<OrderFetchType>({
        queryKey: ["list_orders", page],
        queryFn: () => fetchOrders(page),
        placeholderData: keepPreviousData,
        staleTime: 3 * 60 * 1000,
    });

    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Orders</h2>
                </div>
            </div>

            { isLoading || isFetching ? <Loading /> : null }
                
            { !isLoading && orders?.data?.data.length === 0 ? <EmptyState text="No Data!" /> : null }

            { !isFetching && orders?.data?.data.length > 0 ? (
                <div>
                    <OrderList orders={orders?.data?.data} />
                    <div>
                        <Pager
                            last_page={orders?.data?.last_page}
                            current_page={orders?.data?.current_page}
                            setPage={setPage}
                        />
                    </div>
                </div>
            ): null }
        </div>
    )
}

export default page