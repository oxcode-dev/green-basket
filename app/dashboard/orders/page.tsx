'use client'

import Pager from '@/components/Pager'
import { OrderList, OrderView } from '@/sections/OrderSection'
import { OrderType } from '@/types'
import { isEmpty } from '@/types/helper'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

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

    const [showOrderView, setShowOrderView] = useState<Boolean>(false)
    return (
        <div>
            <pre>{JSON.stringify(orders)}</pre>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                { showOrderView ?
                    <div className="flex space-x-2 items-center">
                        <button onClick={() => setShowOrderView(false)} className="btn btn-circle bt-ghost btn-sm">
                            <ArrowLeftIcon className="size-5" />
                        </button>
                        <h2>Order Details</h2>
                    </div> :
                    <div>
                        <h2>My Orders</h2>
                    </div>
                }
                
            </div>

            { showOrderView ? (
                    <div>
                        <OrderView />
                    </div>
                ) : (
                    <div>
                        <OrderList
                            setShowOrderView={setShowOrderView}
                        />
                        <div>
                            <Pager
                                last_page={orders?.data?.last_page}
                                current_page={orders?.data?.current_page}
                                setPage={setPage}
                            />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default page