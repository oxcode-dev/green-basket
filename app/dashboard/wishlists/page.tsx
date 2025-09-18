import { ProductCard } from '@/components/ProductCard'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Wishlists</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                    { Array.from({ length: 10 }).map((item, key) => (
                        <div key={key}>
                            <ProductCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default page