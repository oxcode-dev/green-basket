import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full min-h-28 rounded-xl bg-center flex items-center" style={{ backgroundImage: "url(/shop-hero.svg)"}}>
                    <div className="p-4 sm:px-8 md:px-12 py-4">
                        <p className="font-semibold text-xl md:text-3xl">
                            Shopping Cart
                        </p>
                    </div>
                </div>

                <div className="w-full py-4 md:py-8">
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-2/3 md:pr-6">
                            <div className="border border-gray-300 rounded-xl p-2 w-full">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead className="text-gray-500">
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <div>
                                                        <div>
                                                            <img 
                                                                src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                                width={80}
                                                                alt='Product Image'
                                                                height={80}
                                                            />
                                                            <div>
                                                                <p>
                                                                    Product Title Name
                                                                </p>
                                                                <p>
                                                                    $30
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="join">
                                                        <button className="join-item btn btn-sm border-gray-300 bg-white text-gray-800">
                                                            <MinusIcon className="size-5" />
                                                        </button>
                                                        <div className="join-item min-w-12 shadow-lg inline-flex justify-center items-center border border-gray-300 bg-white text-gray-800">
                                                            1
                                                        </div>
                                                        <button className="join-item btn btn-sm border-gray-300 bg-white text-gray-800">
                                                            <PlusIcon className="size-5" />
                                                        </button>
                                                    </div>
                                                    <div className="inline-flex space-x-6">
                                                        <button className="bg-green-700 text-white rounded-full p-1">
                                                            <MinusIcon className="size-5" />
                                                        </button>
                                                        <p className="text-lg">3</p>
                                                        <a className="bg-green-700 text-white rounded-full p-1" href="#">
                                                            <PlusIcon className="size-5" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>$102</td>
                                                <td>Blue</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 md:pl-2">
                            <div className="border border-gray-300 rounded-lg p-4 md:p-8 w-full">

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default page;