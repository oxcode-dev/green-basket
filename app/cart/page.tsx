import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full min-h-28 rounded-xl bg-center flex items-center" style={{ backgroundImage: "url(/shop-hero.svg)"}}>
                    <div className="p-4 sm:px-8 md:px-12 py-4">
                        <p className="font-semibold text-xl md:text-3xl">
                            All Products
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;