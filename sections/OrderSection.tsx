import { DevicePhoneMobileIcon, MapPinIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const OrderView = () => {
    return (
        <div className="py-4 p-6 space-y-4">
            <div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <p className="text-xl font-semibold">
                        Order Information
                    </p>
                    {/* <p></p> */}
                </div>

                <dl className="space-y-2 divide-y divide-gray-200 text-gray-500 pt-2">
                    <div className="flex justify-between items-center">
                        <dt className="font-medium">Order Number</dt>
                        <dd>HuJ2320/4345</dd>
                    </div>
                    <div className="flex justify-between items-center">
                        <dt className="font-medium">Order Date</dt>
                        <dd>11 Dec 2024</dd>
                    </div>
                    <div className="flex justify-between items-center">
                        <dt className="font-medium">Delivery Fee</dt>
                        <dd>#3000</dd>
                    </div>
                    <div className="flex justify-between items-center">
                        <dt className="font-medium">Items Total</dt>
                        <dd>#20000</dd>
                    </div>
                    <div className="flex justify-between items-center text-gray-700">
                        <dt className="font-semibold">Total Amount</dt>
                        <dd className="font-semibold">#200000</dd>
                    </div>
                </dl>
            </div>
            <div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <p className="text-xl font-semibold">
                        Delivery Information
                    </p>
                </div>

                <div className="flex flex-col space-y-2.5 p-2 text-gray-500">
                    <p className="inline-flex items-center space-x-2 text-sm font-medium">
                        <UserCircleIcon className="size-4" />
                        <span>Oxcode</span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-sm font-medium">
                        <MapPinIcon className="size-4" />
                        <span className="space-x-1.5">
                            <span>Street</span>
                            <span>city</span>
                            <span>state</span>
                            <span>postal_code</span>
                        </span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-sm font-medium">
                        <DevicePhoneMobileIcon className="size-4" />
                        <span>+2348079344556</span>
                    </p>

                </div>
            </div>

            <div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <p className="text-xl font-semibold">
                        Items Ordered
                    </p>
                </div>

                <div className="flex flex-col space-y-4 pt-4 p-2 text-gray-500">
                    { Array.from({ length: 3 }).map((item, key) => (
                        <div className="card w-full bg-white border border-gray-300 card-sm shadow-sm hover:bg-gray-100">
                            <div className="card-body">
                                <div className="flex space-x-3">
                                    <div className="flex flex-col">
                                        <img 
                                            src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                            width={160}
                                            alt='Product Image'
                                            height={160}
                                            className="size-16 object-cover object-top rounded-md"
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-gray-800 font-semibold text-lg">
                                            Bell Pepper
                                        </p>
                                        <p className="text-gray-600 text-base font-medium">
                                            $100.00
                                        </p>
                                        <p className="cart-text text-gray-400 text-md font-medium">
                                            <span>Quantity: </span>
                                            <span>1</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="justify-end card-actions md:-mt-3">
                                    <button className="btn btn-success text-white">Buy Again</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const OrderList = () => {
    return (
        <div className="py-4 p-6 hidden">
            <div className="space-y-4">
                { Array.from({ length: 6 }).map((item, key) => (
                    <div className="card w-full bg-white border border-gray-300 card-sm shadow-sm hover:bg-gray-100">
                        <a href="#" className="card-body">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 text-lg font-semibold">
                                    <span>Order Date:</span>
                                    <span>11 Dec 2024</span>
                                </p>
                                <div>
                                    <span>status</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">
                                    <span className="font-semibold">Total:</span>
                                    <span>£2000</span>
                                </p>
                                <p className="text-gray-500 text-sm">
                                    <span className="font-semibold">Order No:</span>
                                    <span>pj3034934</span>
                                </p>
                            </div>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
const OrderSection = () => {
    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Orders</h2>
                </div>
            </div>

        </div>
    )
}

export default OrderSection