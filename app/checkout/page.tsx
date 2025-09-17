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

                                <div className="space-y-3 pb-2">
                                    { Array.from({ length: 3 }).map((item, key) => (
                                        <div key={key} className="relative">
                                            <input
                                                className="hidden peer"
                                                defaultValue={key}
                                                id={`option${key}-checkbox`}
                                                name="options"
                                                type="radio"
                                            />
                                            <label
                                                className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600 peer-checked:border-green-200 peer-checked:text-neutral-900 peer-checked:bg-green-200/50 hover:text-neutral-900 hover:border-neutral-300"
                                                htmlFor={`option${key}-checkbox`}
                                            >
                                                <div className="flex items-center space-x-5">
                                                    {/* icon */}
                                                    <div className="flex flex-col justify-start space-y-1">
                                                        <div className="w-full font-semibold">Oxcode</div>
                                                        <div className="w-full text-xs opacity-60 space-x-1.5">
                                                            <span>Address</span>
                                                            <span>City</span>
                                                            <span>State</span>
                                                            <span>Phone</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Payment
                                </p>
                                <div>
                                    <div className="space-y-4 py-2">
                                        <div className="space-y-4 md:space-y-0">
                                            <label>Name on Card</label>
                                            <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                                        </div>
                                        <div className="space-y-4 md:space-y-0">
                                            <label>Card Number</label>
                                            <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                                        </div>
                                        <div>
                                            <p>Expiry</p>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-3">
                                                <div className="space-y-4 md:space-y-0">
                                                    <label>Month</label>
                                                    <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                                                </div>
                                                <div className="space-y-4 md:space-y-0">
                                                    <label>Year</label>
                                                    <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                                                </div>
                                                <div className="space-y-4 md:space-y-0">
                                                    <label>CVV</label>
                                                    <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
