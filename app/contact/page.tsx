import Image from 'next/image';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="w-full container mx-auto md:py-16">
                <div className="flex flex-wrap md:flex-nowrap gap-8 w-full">

                    <div className="w-full md:w-2/3 bg-gray-50">
                        <div className="p-4 md:p-10">
                            <div>
                                <p>
                                    Contact Form
                                </p>
                                <p>
                                    Drop Us a Line.
                                </p>
                                <p>
                                    Your email address will not published. Required fields are indicated *
                                </p>
                            </div>
                            <form className="space-y-4 pt-6">
                                <div className="space-y-4 md:space-y-0 flex gap-x-4 grid md:grid-cols-2">
                                    <div>
                                        <input type="text" placeholder="Name" className="input w-full" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Your Email" className="input w-full" />
                                    </div>
                                </div>
                                <div className="space-y-4 md:space-y-0 flex gap-x-4 grid md:grid-cols-2">
                                    <div>
                                        <input type="text" placeholder="Your Phone" className="input w-full" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Subject" className="input w-full" />
                                    </div>
                                </div>
                                <div>
                                    <textarea className="textarea w-full h-24" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div>
                            <Image
                                className="w-full rounded-lg"
                                src="/contact-img.svg"
                                alt="Next.js logo"
                                width={500}
                                height={350}
                                priority
                                layout="responsive"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page;