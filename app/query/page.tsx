'use client'

import Loading from '@/components/Loading';
import Pager from '@/components/Pager';
import { ProductCard } from '@/components/ProductCard';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { AppSetup } from '@/setups/AppSetup';
import { FetchedProductType } from '@/types';
import { ArrowsUpDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const search = searchParams.get('search') || ''
    const page = Number(searchParams.get('page')) || 1
    const per_page = Number(searchParams.get('perPage'))
    const sort = searchParams.get('sort')

    const { products, isFetching, productsMeta, perPageLists, productSortLists } : FetchedProductType = useFetchProducts()
    const setPage = (page: number) => {
        if(per_page || sort) {
            router.push(`${pathname}?search=${search}&page=${page}&perPage=${per_page || 20}&sort=${sort || 'latest'}`)
            return;
        }

        router.push(`${pathname}?search=${search}&page=${page}`)
    }

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

                    <div className="w-full">
                        <div className="space-y-2 pb-3">
                           <div className="flex justify-end">
                                    
                                <div className="space-x-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-sm bg-gray-100 border-gray-300 rounded-md">
                                            <div className="inline-flex items-center text-xs text-gray-500 space-x-2">
                                                <span>Show({per_page || 20})</span>
                                                <span>
                                                    <ChevronDownIcon className="size-5" />
                                                </span>
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-12  p-2 shadow"
                                        >
                                            {perPageLists.map((item, key) => (
                                                <li key={key}>
                                                    <Link href={`${pathname}?page=${1}&perPage=${item}`} className="justify-between">{item}</Link>
                                                </li>
                                            ))}
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
                                            {productSortLists.map((item, key) => (
                                                <li key={key}>
                                                    <Link href={`${pathname}?page=${1}&sort=${item?.value}`} className="justify-between">{item?.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                           </div>
                        </div>

                        { isFetching ? <Loading /> : null }
                        
                        { !isFetching ? (
                            <div>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-6 sm:gap-4">
                                    { products.map((item, key) => (
                                        <div key={key}>
                                            <ProductCard product={item} />
                                        </div>
                                    ))}
                                </div>
                                <div className="py-8 flex justify-center">
                                    <Pager
                                        last_page={productsMeta?.last_page}
                                        current_page={productsMeta?.current_page}
                                        setPage={setPage}
                                    />
                                </div>
                            </div>
                        ): null }
                    </div>
                </div>
            </div>
        </AppSetup>
    )
}

export default page;
