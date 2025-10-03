import { useFetchCategories } from '@/hooks/useFetchCategories'
import { CategoryItem } from '@/types'
import { ChevronDownIcon, TagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type CategoryProp = { 
    categories: CategoryItem[]
    isFetching: boolean
}
export const CategoriesSection = () => {
    const { categories, isFetching } : CategoryProp = useFetchCategories()

    return (
        <div>
            { !isFetching ? (
                <div className='pt-2 space-y-2'>
                    {
                        categories.map((item, key) => (
                            <Link href={`/shop/category/${item.slug}`} key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-1.5 space-x-1.5">
                                <span className="text-xs font-medium text-gray-600 capitalize">{ item.name }</span>
                                <span>
                                    <span className="badge bg-green-600 border-0 badge-xs font-medium text-white">{item.products_count}</span>
                                </span>
                            </Link>
                        ))
                    }
                </div>
                ): null 
            }
        </div>
    )
}

export const CategoryDropdown = () => {
    const { categories, isFetching } : CategoryProp = useFetchCategories()

    return (
        <div>
            <div className="dropdown">
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
                {
                    !isFetching ? (
                        <ul
                            tabIndex={0}
                            className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {categories.map((item, key) => (
                                <li key={key}>
                                    <Link href={`/shop/category/${item.slug}`} className="justify-between capitalize">
                                        { item.name }
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}