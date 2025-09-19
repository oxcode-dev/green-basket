import React from 'react'

const DeleteAccountForm = () => {
    return (
        <div>

            <div className="">
                <form className="space-y-4 pt-6">
                    <div>
                        <p className="text-sm font-normal text-gray-500">
                            You are about to request that we permanently delete your data and close 
                            your GreenBasket account and all of your personal data permanently. All goods and 
                            services that you have access to through your account will stop being offered as soon as it is deleted.
                        </p>
                    </div>
                    <div className="space-y-1.5 flex flex-col pt-4">
                        <label className="text-sm font-normal text-gray-500" htmlFor="last_name">
                            Kindly provided your email address to confirm delete.
                        </label>
                        <input type="text" name="last_name" placeholder="Last Name" className="input w-full bg-white border border-gray-300" />
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

export default DeleteAccountForm;