import React from 'react'

export const ReviewCard = () => {
  return (
    <div>
        <div className="card w-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <div>
                    <div className="rating">
                        { Array.from({ length: 5 }).map((item, key) => (
                            <div key={key} className="mask mask-star bg-warning" aria-label={`${key} star`} aria-current={key === 4}></div>
                        ))}
                    </div>
                </div>
                <p className="py-2 text-gray-600">
                    comment
                </p>
                <div className="inline-flex space-x-3 justify-start text-gray-500 font-light">
                    <span>date</span>
                    <span>user</span>
                </div>
            </div>
        </div>
    </div>
  )
}
