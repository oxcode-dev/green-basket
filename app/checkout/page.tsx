import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full flex flex-wrap md:flex-nowrap items-start space-y-6 md:space-y-0">
                    <div className="w-full md:w-2/3 md:pr-6">
                        <div className="space-y-4">
                            <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Shipping Address
                                </p>
                            </div>
                        </div>

                        
                    </div>

                    <div className="w-full md:w-1/3 md:pl-2">
                        <div className="space-y-4">
                            <div className="border border-gray-300 rounded-xl p-2 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Order Summary
                                </p>
                                { Array.from({ length: 3 }).map((item, key) => (
                                    <div key={key} className="py-1.5 border-t border-gray-300">
                                        <div className="inline-flex space-x-3 items-start">
                                            <img 
                                                src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                width={80}
                                                alt='Product Image'
                                                height={80}
                                                className="size-12 object-cover rounded-md"
                                            />
                                            <div className="w-full">
                                                <p className="font-semibold text-sm text-gray-800">
                                                    Product Title Name
                                                    Product Title Name
                                                </p>
                                                
                                                <div className="flex justify-between items-center">
                                                    <p className="font-medium text-xs text-gray-500">
                                                        <span>Qty:</span>
                                                        <span>2</span>
                                                    </p>
                                                    <p className="font-semibold text-gray-500 hidden">
                                                        $30
                                                    </p>
                                                    <p className="px-1 py-2 font-bold text-lg text-center">$102</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border border-gray-300 rounded-lg p-4 w-full">
                                <div className="w-full">
                                    <dl className="space-y-1">
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Sub Total</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200NGN</dd>
                                        </div>
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Tax</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200NGN</dd>
                                        </div>
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Delivery Fee</dt>
                                            <dd className="text-sm text-gray-800 font-medium">200</dd>
                                        </div>
                                    </dl>

                                    <div className="w-full inline-flex justify-between items-center pt-2 border-t border-gray-300">
                                        <dt className="text-md text-gray-600 font-normal">Total</dt>
                                        <dd className="text-xl text-gray-800 font-medium">$200NGN</dd>
                                    </div>

                                    <div className="pt-6">
                                        <button className="btn btn-md bg-black text-white border-black w-full rounded-full">
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
