'use client';

import React, { FormEvent } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/dialog';
import { PencilIcon } from '@heroicons/react/24/outline';
import { AddressItemProp } from '@/types';
import { isEmpty } from '@/types/helper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AddressForm from './AddressForm';

type FormProp = {
    address: AddressItemProp;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditAddressForm = ({ address, open, setOpen} : FormProp) => {
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

        if(getToken && !getToken?.token){
            location.href = '/logout'
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/addresses/${address.id}`, {
            method: 'DELETE',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
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
                    <button className="btn btn-sm btn-circle rounded-md bg-white text-gray-600 border border-gray-200 font-medium">
                        <PencilIcon className="size-4" />
                    </button>
                </DialogTrigger>
                <div className="">
                    <DialogContent className="!bg-white">
                        <DialogTitle>Edit Address</DialogTitle>
                        
                        <AddressForm 
                            address={{
                                city: address?.city || '',
                                street: address?.street || '',
                                state: address?.state || '',
                                postal_code: address?.postal_code || '',
                                id: address?.id || '',
                            }} 
                            setOpen={setOpen}
                        />
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    )
}

export default EditAddressForm