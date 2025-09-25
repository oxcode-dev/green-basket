'use client'

import ResetPasswordForm from '@/forms/auth/ResetPasswordForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    
    return (
        <div>
            <div className="flex flex-col">
                <div className="py-4 md:py-8 space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Reset Password
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Please provide the OTP sent to your email address to reset your password.
                    </p>
                </div>

                <div className="w-full space-y-2">
                    <ResetPasswordForm />

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