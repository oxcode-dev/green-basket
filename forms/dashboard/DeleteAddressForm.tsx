import React, { FormEvent, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/dialog';
import { TrashIcon } from '@heroicons/react/24/outline';
import { AddressItemProp } from '@/types';
import { isEmpty } from '@/types/helper';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type FormProp = {
    address: AddressItemProp;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DeleteAddressForm = ({ address, open, setOpen} : FormProp) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => handleDeleteAddress()
    })

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        mutation.mutate()
    }

    const handleDeleteAddress = async () => {
        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/addresses/${address.id}`, {
            method: 'DELETE',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
        });

        const feedback = await response.json()

        if (feedback?.success) {
            queryClient.invalidateQueries({ queryKey: ['list_address'] })
            setOpen(false)
        } else {
            console.log(feedback)
        }
    }

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
                    
                    <form onSubmit={onSubmit} className="space-y-6">
                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <button type="button" className="btn bg-gray-200 border-gray-300 text-gray-500 rounded-md">
                                    Cancel
                                </button>
                            </DialogClose>

                            <button disabled={mutation.isPending} type="submit" className="btn bg-red-500 active:bg-red-500 border-red-500 text-white rounded-md">
                                { mutation.isPending && <span className="loading loading-spinner loading-sm text-white"></span> }
                                <span>{ mutation.isPending ? 'Loading...' : 'Delete account'}</span>
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DeleteAddressForm