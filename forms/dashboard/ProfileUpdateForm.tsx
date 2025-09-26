'use client';

import ErrorAlert from '@/components/ErrorAlert';
import SuccessAlert from '@/components/SuccessAlert';
import { getUser, setUser } from '@/store/slices/auth';
import { User } from '@/types';
import { isEmpty } from '@/types/helper';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';

type FormProp = {
    first_name: string
    last_name: string
    email: string
    phone: string
};

const ProfileUpdateForm = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [errorBag, setErrorBag] = useState({})
    const [successResponse, setSuccessResponse] = useState('')

    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormProp>({
        defaultValues: {
            first_name: loggedUser?.first_name,
            last_name: loggedUser?.last_name,
            email: loggedUser?.email,
            phone: loggedUser?.phone,
        }
    });

    const onSubmit: SubmitHandler<FormProp> = async(data) => {
        setIsLoading(true);
        const getTokenResponse = await fetch('api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            return alert('Unauthenticated User')
        }

        const response = await fetch('http://127.0.0.1:8000/api/profile-update', {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                first_name: data?.first_name,
                last_name: data?.last_name,
                email: data?.email,
                phone: data?.phone,
            }),
        })

        const feedback = await response.json()

        if (feedback?.success) {
            setSuccessResponse(feedback?.message || '')
            dispatch(setUser(feedback?.data))
        } else {
            console.log(feedback)
            setErrorBag(feedback?.data)
            setIsLoading(false);
        }

        setIsLoading(false);
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
                    <label className="text-sm font-medium text-gray-800" htmlFor="first_name">First Name</label>
                    <input type="text" {...register("first_name",  { required: true })}  placeholder="First Name" className="input w-full bg-white border border-gray-300" />
                </div>
                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="last_name">Last Name</label>
                    <input type="text" {...register("last_name",  { required: true })} placeholder="Last Name" className="input w-full bg-white border border-gray-300" />
                </div>

                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="email">Email</label>
                    <input type="email" {...register("email",  { required: true })} placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                </div>

                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-800" htmlFor="phone">Phone</label>
                    <input id="phone" type="text" {...register("phone",  { required: true })} placeholder="+234 8123 456 7890" className="input w-full bg-white border border-gray-300" />
                </div>
        
                <div className="py-2 pt-6">
                    <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                        { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                        <span>{ isLoading ? 'Loading...' : 'Save Changes'}</span>
                    </button>
                </div>

                {successResponse ? (
                    <SuccessAlert 
                        message={successResponse}
                        onDismiss={() => setSuccessResponse('')}
                    />
                ): null}
            </form>
        </div>
    )
}

export default ProfileUpdateForm