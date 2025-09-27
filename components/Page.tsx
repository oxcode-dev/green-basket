import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Pager = () => {
    return (
        <div>
            <div className="py-8 flex justify-center">
                <div className="join border-gray-300">
                    <button className="join-item btn bg-white border-gray-300 text-gray-500">
                        <ArrowLeftIcon className="size-5" />
                    </button>
                    <button disabled className="join-item btn bg-white border-gray-300 text-gray-500">Page 22</button>
                    <button className="join-item btn bg-white border-gray-300 text-gray-500">
                        <ArrowRightIcon className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pager