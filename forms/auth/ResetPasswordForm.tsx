'use client'

import { XCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type FormProp = {
    otp: number
    email: string
    password: string
};

const ResetPasswordForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormProp>()

    const onSubmit: SubmitHandler<FormProp> = async(data) => {
        setIsLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: data.email, 
                otp: data.otp, 
                password: data.password, 
            }),
        })
      
        const feedback = await response.json()

        if (response.ok) {
            // console.log(feedback)
            router.push('/auth')
        } else {
            // console.log(feedback)
            setErrorMessage(feedback.message || '')
            setIsLoading(false);
        }
    }
    return (
        <div>
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                { errorMessage ? (
                    <div role="alert" className="alert alert-error bg-red-500 text-white mb-2 text-sm">
                        <XCircleIcon className="size-5" />
                        <span className="capitalize">{errorMessage}</span>
                    </div>
                ) : null}
                
                <div className="space-y-1.5 flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600" htmlFor="otp">OTP</label>
                    <input {...register("otp",  { required: true })} type="text" placeholder="Enter Otp" className="input w-full bg-white border border-gray-300" />
                    {errors.otp && <span className="text-red-600 text-xs font-medium">OTP is required</span>}
                </div>

                <div className="space-y-1.5 flex flex-col py-1.5">
                    <label className="text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        {...register("email",  { required: true })} 
                        placeholder="Your Email"  required
                        className="input w-full bg-white border border-gray-300" 
                    />
                    {errors.email && <span className="text-red-600 text-xs font-medium">Email is required</span>}
                </div>
                <div className="space-y-1.5 flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                    <input {...register("password",  { required: true })}  type="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    {errors.password && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                </div>
        
                <div className="py-2 pt-6">
                    <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                        { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                        <span>{ isLoading ? 'Loading...' : 'Submit'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm