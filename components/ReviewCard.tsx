import { ReviewItem } from '@/types'
import { formatDate } from '@/types/helper'
import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

type ReviewCardProp = {
    review: ReviewItem
}
export const ReviewCard = ({ review } : ReviewCardProp) => {
  return (
    <div>
        <div className="card w-full bg-white card-md shadow-sm">
            <div className="card-body">
                <div>
                    <div className="rating">
                        { Array.from({ length: 5 }).map((item, key) => (
                            <div key={key} className="mask mask-star bg-warning" aria-label={`${key} star`} aria-current={key === 4}></div>
                        ))}
                    </div>
                </div>
                <p className="py-2 text-gray-600">
                    {review?.comment}
                </p>
                <div className="inline-flex space-x-4 justify-start text-gray-500 font-light items-center">
                    <span className="inline-flex space-x-1.5 items-center">
                        <CalendarDaysIcon className="size-4" />
                        <span>{formatDate(review?.created_at)}</span>
                    </span>
                    <span className="inline-flex space-x-1.5 items-center">
                        <UserIcon className="size-4" />
                        <span>{review?.user?.first_name}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
