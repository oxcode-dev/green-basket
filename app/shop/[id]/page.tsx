import { MinusIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/20/solid';
import { HeartIcon, BuildingStorefrontIcon, TruckIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
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
                    <div className="w-full md:pl-4">
                        <div className="space-y-2">
                            <p className="text-xl md:text-3xl font-semibold">
                                Title is the greatest movie of all time
                            </p>
                            <p className="text-sm text-gray-500 font-medium uppercase">
                                Category
                            </p>
                            <p className="text-3xl text-green-600 font-semibold py-2">$100</p>
                            <p className="text-sm text-gray-500 font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident porro ducimus et nam error quaerat consequatur natus assumenda, blanditiis
                            </p>
                            <div>
                                <div className="flex items-center space-x-2 flex-wrap py-2">
                                    <div className="inline-flex space-x-6">
                                        <button className="bg-green-700 text-white rounded-full p-1">
                                            <MinusIcon className="size-5" />
                                        </button>
                                        <p className="text-lg">3</p>
                                        <a className="bg-green-700 text-white rounded-full p-1" href="#">
                                            <PlusIcon className="size-5" />
                                        </a>
                                    </div>
                                    <div className="space-x-2">
                                        <button className="btn btn-sm bg-green-600 rounded text-white border-green-600 inline-flex items-center space-x-1">
                                            <ShoppingBagIcon className="size-4" />
                                            <span>Add to cart</span>
                                        </button>

                                        <button className="btn btn-sm bg-white text-gray-500 border-gray-300 rounded">
                                            <HeartIcon className="size-4" />
                                        </button>
                                    </div>
                                </div>
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

                <div className="w-full flex flex-wrap md:flex-nowrap py-4 md:py-8">
                    <div className="border border-gray-300 rounded-lg p-4 md:p-8 w-full">

                        <div className="space-x-2">
                            <button className="btn btn-sm rounded-full bg-white text-gray-500 border-gray-300">Description</button>
                            <button className="btn btn-sm rounded-full bg-white text-gray-500 border-gray-300">Review (3)</button>
                        </div>

                        <div className="pt-4 md:pt-6">
                            <div className="text-gray-500 text-sm">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat! Provident aspernatur asperiores dolor adipisci aliquid doloribus, excepturi sapiente, voluptatibus eum labore minima eius inventore reprehenderit officia quos commodi. In.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
