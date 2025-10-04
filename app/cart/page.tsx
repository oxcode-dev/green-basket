'use client';

import { AppSetup } from '@/setups/AppSetup';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Link from "next/link";
import { useCartDetail } from '@/hooks/useCartDetail';

const page = () => {
    const {getAllCarts, handleAddCart, handleReduceCartQuantity, handleRemoveCartItem, cartProductsIds, data } = useCartDetail();

    return (
        <AppSetup>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full min-h-28 rounded-xl bg-center flex items-center" style={{ backgroundImage: "url(/shop-hero.svg)"}}>
                    <div className="p-4 sm:px-8 md:px-12 py-4">
                        <p className="font-semibold text-xl md:text-3xl">
                            Shopping Cart
                        </p>
                    </div>
                </div>

                <div className="w-full py-4 md:py-8">
                    <pre>{JSON.stringify(cartProductsIds)}</pre>
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-2/3 md:pr-6">
                            <div className="border border-gray-300 rounded-xl p-2 w-full">
                                <div className="overflow-x-auto hidden md:flex">
                                    <table className="table">
                                        {/* head */}
                                        <thead className="text-gray-500">
                                            <tr>
                                                <th className="text-center">Product</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center">Total</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { getAllCarts.map((item, key) => (
                                            <tr key={key} className="">
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white">
                                                    <div>
                                                        <div className="inline-flex space-x-3 items-start">
                                                            <img 
                                                                src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                                width={80}
                                                                alt='Product Image'
                                                                height={80}
                                                                className="size-12 object-cover rounded-md"
                                                            />
                                                            <div>
                                                                <p className="font-semibold text-gray-800">
                                                                    Product Title Name
                                                                    Product
                                                                </p>
                                                                <p className="font-semibold text-gray-500">
                                                                    $30
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">
                                                    <div className="inline-flex rounded-full p-0.5 border border-gray-400 text-gray-600">
                                                        <a onClick={e => handleReduceCartQuantity(item.product_id, e)} href="#" type="button" className="text-gray-800 font-semibold p-0.5 px-1.5 cursor-pointer">
                                                            <MinusIcon className="size-4" />
                                                        </a>
                                                        <p className="text-md font-semibold w-4">{item?.quantity}</p>
                                                        <a onClick={e => handleAddCart(item.product_id, e)} href="#" type="button" className="text-gray-800 font-semibold p-0.5 px-1.5 cursor-pointer">
                                                            <PlusIcon className="size-4" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">$102</td>
                                                <td className="px-1 py-2 border-t border-gray-200 bg-white text-md text-center">
                                                    <a onClick={e => handleRemoveCartItem(item.product_id, e)} className="text-gray-600 p-1 inline-flex justify-center" href="#">
                                                        <TrashIcon className="size-5" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="md:hidden">
                                    <p className="font-semibold text-gray-800 text-2xl py-2">Your Cart</p>
                                    <div>
                                    { getAllCarts.map((item, key) => (
                                        <div key={key} className="py-1.5 border-t border-gray-300">
                                            <div className="inline-flex space-x-3 items-start">
                                                <img 
                                                    src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                    width={80}
                                                    alt='Product Image'
                                                    height={80}
                                                    className="size-16 object-cover rounded-md"
                                                />
                                                <div className="w-full">
                                                    <p className="text-sm md:text-base font-semibold text-gray-800">
                                                        Product Title Name
                                                        Product Title Name
                                                        Product
                                                    </p>
                                                    <p className="font-semibold text-gray-500">
                                                        $30
                                                    </p>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <div className="inline-flex rounded-full p-0.5 border border-gray-400 text-gray-600">
                                                                <a onClick={e => handleReduceCartQuantity(item.product_id, e)} href="#" type="button" className="text-gray-800 font-semibold p-0.5 px-1.5 cursor-pointer">
                                                                    <MinusIcon className="size-4" />
                                                                </a>
                                                                <p className="text-md font-semibold w-4">{item?.quantity}</p>
                                                                <a onClick={e => handleAddCart(item.product_id, e)} href="#" type="button" className="text-gray-800 font-semibold p-0.5 px-1.5 cursor-pointer">
                                                                    <PlusIcon className="size-4" />
                                                                </a>
                                                            </div>
                                                            <a onClick={e => handleRemoveCartItem(item.product_id, e)} href="#" className="text-gray-600 p-1 inline-flex justify-center">
                                                                <TrashIcon className="size-5" />
                                                            </a>
                                                        </div>
                                                        <p className="px-1 py-2 font-bold text-lg text-center">$102</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 md:pl-2 md:pt-0 pt-6">
                            <div className="border border-gray-300 rounded-lg p-4 w-full">
                                <div className="w-full">
                                    <p className="text-md text-gray-600 font-semibold pb-6">
                                        Order Summary
                                    </p>

                                    <dl className="space-y-1">
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Sub Total</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200NGN</dd>
                                        </div>
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Tax</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200NGN</dd>
                                        </div>
                                        {/* <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Delivery Fee</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200</dd>
                                        </div> */}
                                    </dl>

                                    <div className="w-full inline-flex justify-between items-center pt-2 border-t border-gray-300">
                                        <dt className="text-md text-gray-600 font-normal">Total</dt>
                                        <dd className="text-xl text-gray-800 font-medium">$200NGN</dd>
                                    </div>

                                    <div className="py-4">
                                        <p className="text-xs text-gray-500 font-normal inline-flex space-x-2">
                                            <ShieldExclamationIcon className="size-5" />
                                            <span>
                                                Delivery charges will be calculate at checkout
                                            </span>
                                        </p>
                                    </div>

                                    <div className="pt-6">
                                        <Link href="/checkout" className="btn btn-md bg-black text-white border-black w-full rounded-full">
                                            Checkout Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </AppSetup>
    )
}

export default page;