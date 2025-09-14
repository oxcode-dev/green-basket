import { ProductCard } from '@/components/ProductCard';
import { ArrowRightIcon, ChevronDownIcon, TagIcon } from '@heroicons/react/20/solid';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="flex w-full flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-4/5 md:pr-6">
                        <div className="dropdown pb-8 md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-neutral">
                                <div className="inline-flex items-center space-x-2">
                                    <span>
                                        <TagIcon className="size-5" />
                                    </span>
                                    <span>All Categories</span>
                                    <span>
                                        <ChevronDownIcon className="size-5" />
                                    </span>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between">
                                        Account
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>

                        <div className="space-y-2 pb-2 hidden">
                            <h3 className="font-semibold text-2xl">
                                Popular Products
                            </h3>
                            <p className="font-medium text-gray-600 text-sm pb-4">
                                These are some of our most popular products among customers.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6 sm:gap-4">
                            { Array.from({ length: 20 }).map((item, key) => (
                                <div key={key}>
                                    <ProductCard />
                                </div>
                            ))}
                        </div>

                        <div className="py-8 flex justify-center">
                            <button className="btn btn-pill">
                                <span>Visit Shop</span>
                                <ArrowRightIcon className="size-5" />
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default page;
