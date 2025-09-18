import { DevicePhoneMobileIcon, MapPinIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Delivery Addresses</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                    <div className="border border-green-200 rounded-md">
                        <div className="flex flex-col space-y-2.5 p-2">
                            <p className="inline-flex items-center space-x-2 text-xs font-medium">
                                <UserCircleIcon className="size-4" />
                                <span>Oxcode</span>
                            </p>

                            <p className="inline-flex items-center space-x-2 text-xs font-medium">
                                <MapPinIcon className="size-4" />
                                <span>
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page