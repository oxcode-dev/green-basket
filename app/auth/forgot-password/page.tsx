'use client'

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
                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <label className="label text-sm">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success checked:text-white" />
                                Remember me
                            </label>
                        </div>

                        <div>
                            <Link href="#" className="text-sm text-gray-500 font-medium underline">
                                Forgot Password?
                            </Link>
                        </div>

                    </div>
            
                    <div className="py-2 pt-6">
                        <button type="submit" className="btn bg-green-600 border-green-600 text-white btn-md">
                            Sign In
                        </button>
                    </div>

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