import { BuildingStorefrontIcon, TruckIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full flex flex-wrap md:flex-nowrap">
                    <div className="w-full md:pr-6">
                        <div>
                            <img 
                                className="w-full h-full"
                                src="/product.svg"
                                width={400}
                                alt='Product Image'
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="w-full md:pl-4 space-y-2">
                        <div>
                            <p className="text-xl md:text-3xl font-semibold">
                                Title is the greatest movie of all time
                            </p>
                            <p className="text-sm text-gray-600 font-medium">
                                Category
                            </p>
                            <p>$100</p>
                            <p>
                                summary
                            </p>
                            <div>
                                Add to Cart
                            </div>

                            <div className="pt-4">
                                <div className="border-t-2 border-gray-300 pt-4">
                                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                                        <TruckIcon className="size-8 text-gray-500" />
                                        <div className="inline-flex flex-col">
                                            <span className="text-xs font-semibold">Delivery</span>
                                            <span className="text-sm text-gray-400">
                                                Estimated delivery time: 1 - 7 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t-2 border-gray-300 pt-4">
                                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                                        <BuildingStorefrontIcon className="size-8 text-gray-500" />
                                        <div className="inline-flex flex-col">
                                            <span className="text-xs font-semibold">Pickup</span>
                                            <span className="text-sm text-gray-400">
                                                Pickup & Pay on Collection Available
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="border-t-2 border-gray-300 pt-4">
                                    <div className="text-gray-600 inline-flex space-x-4 items-center">
                                        <ArrowPathRoundedSquareIcon className="size-8 text-gray-500" />
                                        <div className="inline-flex flex-col">
                                            <span className="text-xs font-semibold">Return Policy</span>
                                            <span className="text-xs text-gray-400">
                                                Free return within 15 days for Official Store items and 7 days for other
                                                eligible items.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page;
