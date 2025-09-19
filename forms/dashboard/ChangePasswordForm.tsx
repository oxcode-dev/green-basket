import React from 'react'

const ChangePasswordForm = () => {
    return (
        <div>

            <div className="">
                <form className="space-y-4 pt-6">
                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="last_name">Current Password</label>
                        <input type="text" name="last_name" placeholder="Last Name" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="email">New Password</label>
                        <input type="email" name="email" placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="phone">Confirm Password</label>
                        <input type="text" name="phone" placeholder="+234 8123 456 7890" className="input w-full bg-white border border-gray-300" />
                    </div>
            
                    <div className="py-2 pt-6">
                        <button type="submit" className="btn bg-slate-800 text-white rounded-lg btn-md">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordForm