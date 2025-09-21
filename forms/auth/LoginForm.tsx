'use client';

import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
}

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginFormProp>()

    const onSubmit: SubmitHandler<LoginFormProp> = async(data) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: data.email, 
                password: data.password,
                remember_me: data.remember_me
            }),
        })
      
        const newData = await response.json()

        if (response.ok) {
            console.log(newData)
        // router.push('/dashboard') // redirect to a protected page
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                className="checkbox checkbox-success checked:text-white" 
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
                    <button type="submit" className="btn bg-green-600 border-green-600 text-white btn-md">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}
