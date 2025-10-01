import React from 'react'

export const ReviewCard = () => {
  return (
    <div>
        <div className="card w-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <div>
                    <div className="rating">
                        { Array.from({ length: 5 }).map((item, key) => (
                            <div key={key} className="mask mask-star" aria-label={`${item} star`} aria-current={item === 3}></div>
                        ))}
                        {/* <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star"></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div> */}
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
