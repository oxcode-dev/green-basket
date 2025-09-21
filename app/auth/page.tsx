'use client'

import { LoginForm } from '@/forms/auth/LoginForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="py-4 md:py-8 space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Welcome Back
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Sign in with your email and password.
                    </p>
                </div>

                <div className="w-full space-y-2">
                    <LoginForm />
                   
                    <div className="pt-4 md:pt-6">
                        <p className="text-sm text-gray-500 font-medium">
                            <span>Don't have an account? </span>
                            <Link href="/auth/register" className="text-green-600 font-semibold underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page