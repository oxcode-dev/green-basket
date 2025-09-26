import React from 'react'
import { DevicePhoneMobileIcon, MapPinIcon, PencilIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { AddressItemProp } from '@/types'

type AddressCardProp = {
    address: AddressItemProp,
}
const AddressCard = ({ address }: AddressCardProp) => {
    return (
        <div>
            <div className="border border-gray-200 shadow-sm rounded-md">
                <div className="flex flex-col space-y-2.5 p-2 text-gray-500">
                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <UserCircleIcon className="size-4" />
                        <span>Oxcode</span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <MapPinIcon className="size-4" />
                        <span className="space-x-1.5">
                            <span>{address.street}</span>
                            <span>{address.city}</span>
                            <span>{address.state}</span>
                            <span>{address.postal_code}</span>
                        </span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <DevicePhoneMobileIcon className="size-4" />
                        <span>{address?.phone}</span>
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
        </div>
    )
}

export default AddressCard