import { useFetchCategories } from '@/hooks/useFetchCategories'
import { CategoryItem } from '@/types'
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
                            <Link href={`/shop/${item.slug}`} key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-1.5 space-x-1.5">
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
