import React from 'react'

export const ReviewSection = () => {
    return (
        <div className="w-full mx-auto py-12 px-4 bg-gray-50">

            <div className="text-center space-y-4 w-full md:max-w-xl mx-auto pt-4">
                <p className="text-2xl md:text-3xl font-bold">
                    Happy & Satisfied Faces
                </p>
                <p className="text-md text-gray-500 font-medium">
                    Here's what some of our satisfied customers have to say about us.
                </p>
            </div>

            <div className="container w-full mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-6 pt-6">
                    {
                        Array.from({ length: 3 }).map((item, key) => (
                            <div key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-8 space-x-1.5 bg-white">
                                <div className="flex flex-col space-y-4 py-4">
                                    <svg className="w-12 text-gray-400 fill-current opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                                    <p className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt vitae voluptatem dolore sed, ducimus culpa.
                                    </p>
                                    <div>
                                    <p className="text-lg font-semibold text-gray-800">
                                        Femi Ojo
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        Business Analysis
                                    </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
