'use client'

import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div>
                    <p>
                        Welcome Back
                    </p>

                    <p>
                        Sign in with your email and password.
                    </p>
                </div>

                <div className="w-full">
                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success checked:text-white" />
                                Remember me
                            </label>
                        </div>

                        <div>
                            <Link href="#">
                                Forgot Password?
                            </Link>
                        </div>

                    </div>
            
                    <div className="py-2 pt-6">
                        <button type="submit" className="btn bg-slate-800 text-white rounded-lg btn-md">
                            Save Changes
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page