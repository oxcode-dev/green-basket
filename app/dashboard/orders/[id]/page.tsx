'use client'

import { EmptyState } from '@/components/EmptyState'
import Loading from '@/components/Loading'
import { OrderView } from '@/sections/OrderSection'
import { OrderItem } from '@/types'
import { isEmpty } from '@/types/helper'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

type OrderFetchType = {
    data: OrderItem;
    message: string
    success: boolean
}

const page = () => {
    const params = useParams<{ id: string }>()
 
    async function fetchOrder() {
        const getTokenResponse = await fetch('/api/fetch-token')
    
        const getToken = await getTokenResponse.json()
    
        if(getToken && !getToken?.token){
            location.href = '/logout'
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/orders/${params.id}`, {
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    }

    const { data: order, error, isLoading, isFetching } = useQuery<OrderFetchType>({
        queryKey: ["list_orders", params.id],
        queryFn: () => fetchOrder(),
        placeholderData: keepPreviousData,
        staleTime: 3 * 60 * 1000,
    });

    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div className="flex space-x-2 items-center">
                    <Link href="/dashboard/orders" className="btn btn-circle bt-ghost btn-sm">
                        <ArrowLeftIcon className="size-5" />
                    </Link>
                    <h2>Order Details</h2>
                </div>
            </div>

            { isLoading || isFetching ? <Loading /> : null }
                
            { !isLoading && isEmpty(order?.data || {}) ? <EmptyState text="No Data!" /> : null }

            { !isFetching && !isEmpty(order?.data || {}) ? (

                <div>
                    <OrderView order={order?.data || {}} />
                </div>
            ) : null}
        </div>
    )
}

export default page