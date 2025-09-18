import { DevicePhoneMobileIcon, MapPinIcon, PencilIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Delivery Addresses</h2>
                </div>
            </div>
            <div className="p-3 md:p-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    { Array.from({ length: 3 }).map((item, key) => (
                        <div key={key} className="border border-gray-200 shadow-sm rounded-md">
                            <div className="flex flex-col space-y-2.5 p-2 text-gray-500">
                                <p className="inline-flex items-center space-x-2 text-xs font-medium">
                                    <UserCircleIcon className="size-4" />
                                    <span>Oxcode</span>
                                </p>

                                <p className="inline-flex items-center space-x-2 text-xs font-medium">
                                    <MapPinIcon className="size-4" />
                                    <span className="space-x-1.5">
                                        <span>Street</span>
                                        <span>city</span>
                                        <span>state</span>
                                        <span>postal_code</span>
                                    </span>
                                </p>

                                <p className="inline-flex items-center space-x-2 text-xs font-medium">
                                    <DevicePhoneMobileIcon className="size-4" />
                                    <span>+2348079344556</span>
                                </p>

                            </div>
                            <div className="border-t border-gray-200 p-2 py-1 w-full">
                                <div className="space-x-2 flex justify-end w-full">
                                    <button className="btn btn-sm btn-circle rounded-md btn-error text-white font-medium">
                                        <TrashIcon className="size-4" />
                                    </button>
                                    <button className="btn btn-sm btn-circle rounded-md bg-white text-gray-600 border border-gray-200 font-medium">
                                        <PencilIcon className="size-4" />
                                    </button>
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