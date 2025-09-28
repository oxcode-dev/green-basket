'use client';

import ErrorAlert from '@/components/ErrorAlert';
import { isEmpty } from '@/types/helper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FormEvent, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type AddressFormProp = {
    street?: string
    city?: string
    state?: string
    postal_code?: string,
    id?: string | null
};

type FormProp = {
    address: AddressFormProp,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddressForm = ({ address, setOpen }: FormProp) => {

    const [errorBag, setErrorBag] = useState({})

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data: AddressFormProp) => handleForm(data)
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<AddressFormProp>({
        defaultValues: {
            city: address?.city || '',
            street: address?.street || '',
            state: address?.state || '',
            postal_code: address?.postal_code || '',
            id: address?.id || '',
        }
    });

    const onSubmit: SubmitHandler<AddressFormProp> = async(data) => {
        mutation.mutate(data)
    }

    const handleForm = async (data: AddressFormProp) => {
        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            return alert('Unauthenticated User')
        }

        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/addresses${data.id ? '/' + data.id : ''}`

        const response = await fetch(url, {
            method: data.id ? 'PUT' : 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                street: data?.street,
                city: data?.city,
                state: data?.state,
                postal_code: data?.postal_code,
            }),
        })

        const feedback = await response.json()

        if (feedback?.success) {
            queryClient.invalidateQueries({ queryKey: ['list_address'] })
            setErrorBag({})
            setOpen(false)
        } else {
            setErrorBag(feedback?.data)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
                { !isEmpty(errorBag) ? (
                    <ErrorAlert>
                        <ol className="inline-flex flex-col space-y-1.5 list-disc list-inside">
                            { Object.values(errorBag).map((value, key) => (
                                //@ts-ignore
                                <li key={key}>{value}</li>
                            ))}
                        </ol>
                    </ErrorAlert>
                ) : null}

                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="street">Street</label>
                    <input type="text" {...register("street",  { required: true })}  placeholder="Street" className="input w-full bg-white border border-gray-300" />
                    {errors.street && <span className="text-red-600 text-xs font-medium">Street is required</span>}
                </div>
                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="city">City</label>
                    <input type="text" {...register("city",  { required: true })} placeholder="City" className="input w-full bg-white border border-gray-300" />
                    {errors.city && <span className="text-red-600 text-xs font-medium">City is required</span>}
                </div>

                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="state">State</label>
                    <input type="text" {...register("state",  { required: true })} placeholder="Your State" className="input w-full bg-white border border-gray-300" />
                    {errors.state && <span className="text-red-600 text-xs font-medium">State is required</span>}
                </div>

                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="postal_code">Postal Code</label>
                    <input id="postal_code" type="text" {...register("postal_code",  { required: true })} placeholder="Postal Code" className="input w-full bg-white border border-gray-300" />
                    {errors.postal_code && <span className="text-red-600 text-xs font-medium">Postal Code is required</span>}
                </div>
        
                <div className="py-2 pt-6 space-x-3">
                    <button onClick={() => setOpen(false)} type="button" className="btn btn-md bg-gray-200 border-gray-300 text-gray-500 rounded-md">
                        Cancel
                    </button>
                    <button disabled={mutation.isPending} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md rounded-md">
                        { mutation.isPending && <span className="loading loading-spinner loading-sm text-white"></span> }
                        <span>{ mutation.isPending ? 'Loading...' : 'Save'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddressForm