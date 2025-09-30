'use client'

import { ProductCard } from '@/components/ProductCard';
import { CategoriesSection, CategoryDropdown } from '@/sections/CategoriesSection';
import { AppSetup } from '@/setups/AppSetup';
import { ArrowsUpDownIcon, ChevronDownIcon, TagIcon } from '@heroicons/react/20/solid';
import React from 'react'

const page = () => {
    return (
        <AppSetup>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full min-h-28 rounded-xl bg-center flex items-center" style={{ backgroundImage: "url(/shop-hero.svg)"}}>
                    <div className="p-4 sm:px-8 md:px-12 py-4">
                        <p className="font-semibold text-xl md:text-3xl">
                            All Products
                        </p>
                    </div>
                </div>
            </div>

            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="flex w-full flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-1/5 md:flex hidden">
                        <div className="flex flex-col space-y-4">
                            <div className="border border-gray-300 shadow-sm rounded-md p-4">
                                <div className="space-y-2 pb-2">
                                    <h3 className="font-semibold">
                                        Categories
                                    </h3>
                                    <div className="w-full h-0.5 relative bg-gray-300 rounded-full">
                                        <div className="w-[30%] h-0.5 relative bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className='pt-2 space-y-2'>
                                    <CategoriesSection />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full md:w-4/5 md:pl-6">
                        <div className="pb-8 md:hidden">
                            <CategoryDropdown />
                        </div>

                        <div className="space-y-2 pb-3">
                           <div className="flex justify-end">
                                    
                                <div className="space-x-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-sm bg-gray-100 border-gray-300 rounded-md">
                                            <div className="inline-flex items-center text-xs text-gray-500 space-x-2">
                                                <span>Show</span>
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
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-sm bg-gray-100 border-gray-300 rounded-md">
                                            <div className="inline-flex items-center text-xs text-gray-500 space-x-2">
                                                <span>
                                                    <ArrowsUpDownIcon className="size-4" />
                                                </span>
                                                <span>Sort</span>
                                                <span>
                                                    <ChevronDownIcon className="size-4" />
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
                                </div>
                                
                           </div>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6 sm:gap-4">
                            { Array.from({ length: 20 }).map((item, key) => (
                                <div key={key}>
                                    <ProductCard />
                                </div>
                            ))}
                        </div>

                        <div className="py-8 flex justify-center">
                            <div className="join">
                                <button className="join-item btn">«</button>
                                <button className="join-item btn">Page 22</button>
                                <button className="join-item btn">»</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </AppSetup>
    )
}

export default page;
