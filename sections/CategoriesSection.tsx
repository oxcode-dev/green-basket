import { useFetchCategories } from '@/hooks/useFetchCategories'
import { CategoryItem } from '@/types'
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
                            <a href="#" key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-1.5 space-x-1.5">
                                <span className="text-xs font-medium text-gray-600 capitalize">{ item.name }</span>
                                <span>
                                    <span className="badge bg-green-600 border-0 badge-xs font-medium text-white">100</span>
                                </span>
                            </a>
                        ))
                    }
                </div>
                ): null 
            }
        </div>
    )
}
