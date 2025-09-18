import React from 'react'

const page = () => {
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Account Management</h2>
                </div>
            </div>
            <div className="py-4 p-6">
                <div className="">
                    <form className="space-y-4 pt-6">
                        <div>
                            <input type="text" placeholder="First Name" className="input w-full bg-white border border-gray-300" />
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" className="input w-full bg-white" />
                        </div>

                        <div>
                            <input type="email" placeholder="Your Email" className="input w-full bg-white" />
                        </div>
                
                        <div>
                            <button type="submit" className="btn bg-slate-800 text-white rounded-lg btn-md">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default page