'use client'

import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';


type FormProp = {
    email: string
};

const page = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormProp>()

    const onSubmit: SubmitHandler<FormProp> = async(data) => {
        setIsLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: data.email, 
            }),
        })
      
        const feedback = await response.json()

        if (response.ok) {
            console.log(feedback)
            // router.push('/dashboard') // redirect to a protected page
        } else {
            console.log(feedback)
            setErrorMessage(feedback.message || '')
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div className="flex flex-col">
                <div className="py-4 md:py-8 space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Forgot Password
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Please provide your email address to retrieve your password.
                    </p>
                </div>

                <div className="w-full space-y-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        { errorMessage ? (
                            <div role="alert" className="alert alert-error bg-red-500 text-white mb-2 text-sm">
                                <XCircleIcon className="size-5" />
                                <span className="capitalize">{errorMessage}</span>
                            </div>
                        ) : null}
                        
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
                
                        <div className="py-2 pt-6">
                            <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                                { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                                <span>{ isLoading ? 'Loading...' : 'Submit'}</span>
                            </button>
                        </div>
                    </form>

                    <div className="pt-4 md:pt-6">
                        <p className="text-sm text-gray-500 font-medium">
                            <Link href="/auth" className="text-green-600 font-semibold underline">
                               Back to Login
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page;