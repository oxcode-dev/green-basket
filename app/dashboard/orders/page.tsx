import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>My Orders</h2>
                </div>
            </div>

            <div className="py-4 p-6 hidden">
                <div className="space-y-4">
                    { Array.from({ length: 6 }).map((item, key) => (

                        <div className="card w-full bg-white border border-gray-300 card-sm shadow-sm hover:bg-gray-100">
                            <a href="#" className="card-body">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-800 text-lg font-semibold">
                                        <span>Order Date:</span>
                                        <span>11 Dec 2024</span>
                                    </p>
                                    <div>
                                        <span>status</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Total:</span>
                                        <span>£2000</span>
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Order No:</span>
                                        <span>pj3034934</span>
                                    </p>
                                </div>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-4 p-6">
            </div>
        </div>

    )
}

export default page