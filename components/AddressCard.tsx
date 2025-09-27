import React from 'react'
import { DevicePhoneMobileIcon, MapPinIcon, PencilIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { AddressItemProp, User } from '@/types'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/slices/auth'
import DeleteAddressForm from '@/forms/dashboard/DeleteAddressForm'

type AddressCardProp = {
    address: AddressItemProp,
    onEdit: (() => void) | null;
    onDelete: (() => void) | null;
}
const AddressCard = ({ address, onDelete, onEdit }: AddressCardProp) => {
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    return (
        <div>
            <div className="border border-gray-200 shadow-sm rounded-md">
                <div className="flex flex-col space-y-2.5 p-2 text-gray-500">
                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <UserCircleIcon className="size-4" />
                        <span>{loggedUser?.name}</span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <MapPinIcon className="size-5" />
                        <span className="space-x-1.5">
                            <span>{address.street}</span>
                            <span>{address.city}</span>
                            <span>{address.state}</span>
                            <span>{address.postal_code}</span>
                        </span>
                    </p>

                    {loggedUser?.phone ? (
                        <p className="inline-flex items-center space-x-2 text-xs font-medium">
                            <DevicePhoneMobileIcon className="size-4" />
                            <span>{loggedUser?.phone}</span>
                        </p>
                    ): null}

                </div>
                { onEdit || onDelete ? (
                    <div className="border-t border-gray-200 p-2 py-1 w-full">
                        <div className="space-x-2 flex justify-end w-full">
                            <DeleteAddressForm />
                            { onEdit ? (
                                <button onClick={onEdit} className="btn btn-sm btn-circle rounded-md bg-white text-gray-600 border border-gray-200 font-medium">
                                    <PencilIcon className="size-4" />
                                </button>
                            ): null }
                        </div>
                    </div>
                ) : null }
            </div>
        </div>
    )
}

export default AddressCard