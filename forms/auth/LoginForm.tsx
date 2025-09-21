import Link from 'next/link'
import React from 'react'

export const LoginForm = () => {
    return (
        <div>
            <form>
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
