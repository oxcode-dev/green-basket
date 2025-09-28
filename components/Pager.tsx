import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Prop = {
    last_page: number
    current_page: number
    setPage: (page: number) => void
}

const Pager = ({last_page, current_page, setPage}: Prop) => {
    return (
        <div>
            <div className="py-8 flex justify-center">
                <div className="join border-gray-300">
                    <button disabled={current_page === 1} onClick={() => setPage(current_page - 1)} className="join-item btn bg-white border-gray-300 text-gray-500">
                        <ArrowLeftIcon className="size-5" />
                    </button>
                    <button disabled className="join-item btn bg-white border-gray-300 text-gray-500 disabled:!bg-white">Page {current_page}</button>
                    <button disabled={current_page === last_page} onClick={() => setPage(current_page + 1)} className="join-item btn bg-white border-gray-300 text-gray-500">
                        <ArrowRightIcon className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pager