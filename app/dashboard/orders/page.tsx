'use client'

import { OrderList, OrderView } from '@/sections/OrderSection'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const page = () => {
    const [showOrderView, setShowOrderView] = useState<Boolean>(false)
    return (
        <div>
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

            { showOrderView ?
                <OrderView /> :
                <OrderList
                    setShowOrderView={setShowOrderView}
                />
            }

        </div>
    )
}

export default page