import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Orders</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                <div className="space-y-4">
                    { Array.from({ length: 6 }).map((item, key) => (

                        <div className="card w-full bg-white border border-gray-300 card-sm shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">Xsmall Card</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default page