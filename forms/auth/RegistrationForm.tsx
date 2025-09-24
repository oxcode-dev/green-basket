import React from 'react'


type RegistrationFormProp = {
    email: string
    password: string
    remember_me: boolean
};

const RegistrationForm = () => {
    return (
        <div>
            <form className="space-y-3">
                <div className="flex items-center space-x-4">
                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" className="input w-full bg-white border border-gray-300" />
                    </div>
                    <div className="space-y-1.5 flex flex-col w-full pb-1">
                        <label className="text-sm font-medium text-gray-600" htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" className="input w-full bg-white border border-gray-300" />
                    </div>
                </div>
                <div className="space-y-1.5 flex flex-col">
                    <label className="text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Your Email" className="input w-full bg-white border border-gray-300" />
                </div>

                <div className="flex items-center space-x-4">
                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    </div>

                    <div className="space-y-1.5 flex flex-col w-full">
                        <label className="text-sm font-medium text-gray-600" htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" name="confirm_password" placeholder="*********" className="input w-full bg-white border border-gray-300" />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <label className="label text-xs">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-success checked:text-white" />
                            I agree with the Terms of Service and Conditions
                        </label>
                    </div>
                </div>
        
                <div className="py-2 pt-6">
                    <button type="submit" className="btn bg-green-600 border-green-600 text-white btn-md">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm