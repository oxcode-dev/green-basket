import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/dialog';
import { TrashIcon } from '@heroicons/react/24/outline';


const DeleteAddressForm = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="btn btn-sm btn-circle rounded-md btn-error text-white font-medium">
                        <TrashIcon className="size-4" />
                    </button>
                </DialogTrigger>
                <DialogContent className='!bg-white'>
                    <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                    <DialogDescription>
                        Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password
                        to confirm you would like to permanently delete your account.
                    </DialogDescription>
                    <form className="space-y-6">
                        <div className="grid gap-2">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                            />

                        </div>

                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <button>
                                    Cancel
                                </button>
                            </DialogClose>

                            <button>
                                <button type="submit">Delete account</button>
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DeleteAddressForm