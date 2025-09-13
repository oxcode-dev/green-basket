import React from 'react'

export const ContactFormCard = () => {
    return (
        <div className="p-4 md:p-10">
            <div className="space-y-1.5">
                <p className="text-sm text-success font-semibold">
                    Contact Form
                </p>
                <p className="text-xl text-slate-800 font-bold">
                    Drop Us a Line.
                </p>
                <p className="text-xs text-gray-500 font-light">
                    Your email address will not published. Required fields are indicated *
                </p>
            </div>
            <form className="space-y-4 pt-6">
                <div className="space-y-4 md:space-y-0 flex gap-x-4 grid md:grid-cols-2">
                    <div>
                        <input type="text" placeholder="Name" className="input w-full bg-white" />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" className="input w-full bg-white" />
                    </div>
                </div>
                <div className="space-y-4 md:space-y-0 flex gap-x-4 grid md:grid-cols-2">
                    <div>
                        <input type="text" name="phone" placeholder="Your Phone" className="input w-full bg-white" />
                    </div>
                    <div>
                        <input type="text" name="subject" placeholder="Subject" className="input w-full bg-white" />
                    </div>
                </div>
                <div>
                    <textarea className="textarea w-full h-24 bg-white" placeholder="Message"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn bg-slate-800 text-white rounded-lg btn-md">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
