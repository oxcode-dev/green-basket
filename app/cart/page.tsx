import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid';
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
                                            <tr className="">
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white">
                                                    <div>
                                                        <div className="inline-flex space-x-3 items-center">
                                                            <img 
                                                                src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                                width={80}
                                                                alt='Product Image'
                                                                height={80}
                                                                className="size-12 object-cover"
                                                            />
                                                            <div>
                                                                <p className="font-semibold text-lg">
                                                                    Product Title Name
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
                                                </td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">
                                                    <div className="inline-flex rounded-full p-0.5 border border-gray-400 text-gray-600">
                                                        <button className="text-gray-800 font-semibold p-0.5 px-1.5">
                                                            <MinusIcon className="size-4" />
                                                        </button>
                                                        <p className="text-md font-semibold w-4">3</p>
                                                        <button className="text-gray-800 font-semibold p-0.5 px-1.5">
                                                            <PlusIcon className="size-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">$102</td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">
                                                    <a className="text-gray-600 p-1 inline-flex justify-center" href="#">
                                                        <TrashIcon className="size-5" />
                                                    </a>
                                                </td>
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