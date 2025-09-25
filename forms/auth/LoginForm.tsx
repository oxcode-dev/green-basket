'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { setUser } from '@/store/slices/auth';
import { useDispatch } from "react-redux"


type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
};

export const LoginForm = () => {

    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginFormProp>()

    const onSubmit: SubmitHandler<LoginFormProp> = async(data) => {
        setIsLoading(true);
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: data.email, 
                password: data.password,
                remember_me: data.remember_me
            }),
        })
      
        const feedback = await response.json()

        if (response.ok) {
            // console.log(feedback?.data?.data)
            await dispatch(setUser(feedback?.data?.data))
            setTimeout(() => {
                router.push('/dashboard') // redirect to a protected page
            }, 2000)
        } else {
            // console.log(feedback.data, feedback.data.message)
            setErrorMessage(feedback?.data?.message || '')
            setIsLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                { errorMessage ? (
                    <div role="alert" className="alert alert-error bg-red-500 text-white mb-2 text-sm">
                        <XCircleIcon className="size-5" />
                        <span>{errorMessage}</span>
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

                <div className="space-y-1.5 flex flex-col py-1.5">
                    <label className="text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                    <input type="password" {...register("password",  { required: true })} placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    {errors.password && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                </div>

                <div className="flex justify-between items-center py-1.5">
                    <div>
                        <label className="label text-sm">
                            <input 
                                type="checkbox" 
                                {...register("remember_me")} 
                                defaultChecked
                                className="checkbox checkbox-success checked:text-white checked:bg-green-600 checked:border-transparent checkbox-sm" 
                            />
                            Remember me
                        </label>
                    </div>

                    <div>
                        <Link href="/auth/forgot-password" className="text-sm text-gray-500 font-medium underline">
                            Forgot Password?
                        </Link>
                    </div>

                </div>
        
                <div className="py-2 pt-6">
                    <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                        { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                        <span>{ isLoading ? 'Loading...' : 'Sign In'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
