import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/dialog';
import { TrashIcon } from '@heroicons/react/24/outline';
import { AddressItemProp } from '@/types';

type FormProp = {
    address: AddressItemProp;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DeleteAddressForm = ({ address, open, setOpen} : FormProp) => {

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="btn btn-sm btn-circle rounded-md bg-red-500 border-red-500 text-white font-medium">
                        <TrashIcon className="size-4" />
                    </button>
                </DialogTrigger>
                <DialogContent className='!bg-white'>
                    <DialogTitle>Are you sure you want to delete this address?</DialogTitle>
                    {/* <DialogDescription>
                        Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password
                        to confirm you would like to permanently delete your account.
                    </DialogDescription> */}
                    <form onSubmit={() => setOpen(false)} className="space-y-6">
                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <button type="button" className="btn bg-gray-200 border-gray-300 text-gray-500 rounded-md">
                                    Cancel
                                </button>
                            </DialogClose>

                            <button type="submit" className="btn bg-red-500 border-red-500 text-white rounded-md">
                                Delete account
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DeleteAddressForm