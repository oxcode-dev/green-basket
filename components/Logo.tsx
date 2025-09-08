import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const Logo = () => {
    return (
        <div className="inline-flex space-x-2 items-center text-green-500">
            <div>
                <ShoppingCartIcon className="size-8" />
            </div>
            <div className="text-sm font-semibold">
                <p>GREEN</p>
                <p>BASKET</p>
            </div>
        </div>
    )
}

