'use client'

import RegistrationForm from '@/forms/auth/RegistrationForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col justify-center h-full">
                <div className="py-4 md:py-8 space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Create new account
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Please enter the relevant details
                    </p>
                </div>

                <div className="w-full space-y-4">
                    <div>
                        <RegistrationForm />
                    </div>

                    <div className="pt-4 md:pt-6">
                        <p className="text-sm text-gray-500 font-medium">
                            <span>Already have an account? </span>
                            <Link href="/auth" className="text-green-600 font-semibold underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page