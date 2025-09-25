'use client';

import { setUser } from '@/store/slices/auth';
import { isEmpty } from '@/types/helper';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


type RegistrationFormProp = {
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
    terms: boolean
};

const RegistrationForm = () => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const [errorBag, setErrorBag] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegistrationFormProp>()

    const onSubmit: SubmitHandler<RegistrationFormProp> = async(data) => {
        setIsLoading(true);
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ 
            //     email: data.email, 
            //     password: data.password,
            //     terms: data.terms
            // }),
            body:  JSON.stringify({
                data: {
                    first_name: data.first_name, 
                    last_name: data.last_name, 
                    email: data.email, 
                    password: data.password,
                    confirm_password: data.confirm_password,
                    terms: data.terms,
                }
            })
            ,
        })
      
        const feedback = await response.json();

        if (response.ok) {
            // console.log(feedback?.data?.data)
            dispatch(setUser(feedback?.data?.data))
            router.push('/dashboard') // redirect to a protected page
        } else {
            setErrorMessage(feedback?.data?.message || '')
            setErrorBag(feedback?.data?.data)
            setIsLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                { !isEmpty(errorBag) ? (
                    <div role="alert" className="alert alert-error bg-red-500 text-white mb-2 text-sm">
                        <XCircleIcon className="size-5" />
                        <p className="inline-flex flex-col space-y-1.5">
                            {
                                Object.values(errorBag).map((value, key) => (
                                    //@ts-ignore
                                    <span key={key}>{value}</span>
                                ))
                            }
                        </p>
                    </div>
                ) : null}



                <div className="flex items-start space-x-4 pt-2">
                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="first_name">First Name</label>
                        <input {...register("first_name",  { required: true })} type="text" placeholder="First Name" className="input w-full bg-white border border-gray-300" />
                        {errors.first_name && <span className="text-red-600 text-xs font-medium">First Name is required</span>}
                    </div>
                    <div className="space-y-1.5 flex flex-col w-full pb-1">
                        <label className="text-sm font-medium text-gray-600" htmlFor="last_name">Last Name</label>
                        <input {...register("last_name",  { required: true })}  type="text" placeholder="Last Name" className="input w-full bg-white border border-gray-300" />
                        {errors.last_name && <span className="text-red-600 text-xs font-medium">Last Name is required</span>}
                    </div>
                </div>
                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                    <input {...register("email",  { required: true })} type="email" placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                    {errors.email && <span className="text-red-600 text-xs font-medium">Email is required</span>}
                </div>

                <div className="flex items-start space-x-4">
                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                        <input {...register("password",  { required: true })}  type="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                        {errors.password && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                    </div>

                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="confirm_password">Confirm Password</label>
                        <input {...register("confirm_password",  { required: true })} type="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                        {errors.confirm_password && <span className="text-red-600 text-xs font-medium">Confirm Password is required</span>}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <label className="label text-xs">
                            <input 
                                type="checkbox" 
                                {...register("terms")} 
                                defaultChecked 
                                className="checkbox checkbox-success checked:text-white checked:bg-green-600 checked:border-transparent checkbox-sm" 
                            />
                            I agree with the Terms of Service and Conditions
                        </label>
                    </div>
                </div>
        
                <div className="py-2 pt-6">
                    <div className="py-2 pt-6">
                        <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                            { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                            <span>{ isLoading ? 'Loading...' : 'Register'}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm