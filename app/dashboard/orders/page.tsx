'use client'

import { OrderList, OrderView } from '@/sections/OrderSection'
import React, { useState } from 'react'

const page = () => {

    const [showOrderView, setShowOrderView] = useState<Boolean>(false)
    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Orders</h2>
                </div>
            </div>

            { 
                showOrderView ?
                    <OrderView /> :
                    <OrderList
                        setShowOrderView={setShowOrderView}
                    />
            }

        </div>
    )
}

export default page