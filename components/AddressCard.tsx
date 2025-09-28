import React from 'react'
import { DevicePhoneMobileIcon, MapPinIcon, PencilIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { AddressItemProp, User } from '@/types'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/slices/auth'
import DeleteAddressForm from '@/forms/dashboard/DeleteAddressForm'
import EditAddressForm from '@/forms/dashboard/EditAddressForm'

type AddressCardProp = {
    address: AddressItemProp,
}
const AddressCard = ({ address }: AddressCardProp) => {
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    return (
        <div>
            <div className="border border-gray-200 shadow-sm rounded-md">
                <div className="flex flex-col space-y-2.5 p-2 text-gray-500 pb-2">
                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <span>
                            <UserCircleIcon className="size-4" />
                        </span>
                        <span className="pl-0.5">{loggedUser?.name}</span>
                    </p>

                    <p className="inline-flex items-center space-x-2 text-xs font-medium">
                        <span>
                            <MapPinIcon className="size-5" />
                        </span>
                        <span className="space-x-1.5 pl-0.5">
                            <span>{address.street}</span>
                            <span>{address.city}</span>
                            <span>{address.state}</span>
                            <span>{address.postal_code}</span>
                        </span>
                    </p>

                    {loggedUser?.phone ? (
                        <p className="inline-flex items-center space-x-2 text-xs font-medium">
                            <span>
                                <DevicePhoneMobileIcon className="size-4" />
                            </span>
                            <span className="pl-0.5">{loggedUser?.phone}</span>
                        </p>
                    ): null}

                </div>
                
                <div className="border-t border-gray-200 p-2 py-1 w-full">
                    <div className="space-x-2 flex justify-end w-full">
                        <DeleteAddressForm
                            address={address}
                            setOpen={setOpenDelete}
                            open={openDelete}
                        />

                        <EditAddressForm
                            address={address}
                            setOpen={setOpenEdit}
                            open={openEdit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressCard