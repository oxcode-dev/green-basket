'use client';

import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/dialog';
import AddressForm from './AddressForm';

type FormProp = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateAddressForm = ({ open, setOpen} : FormProp) => {

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="btn rounded-md bg-blue-500 text-white border border-blue-500 font-medium">
                        {/* <PencilIcon className="size-4" /> */}
                        <span>Create</span>
                    </button>
                </DialogTrigger>
                <div className="">
                    <DialogContent className="!bg-white">
                        <DialogTitle>Create New Address</DialogTitle>
                        
                        <AddressForm 
                            address={{
                                city: '',
                                street: '',
                                state: '',
                                postal_code: '',
                                // id: '',
                            }} 
                            setOpen={setOpen}
                        />
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    )
}

export default CreateAddressForm