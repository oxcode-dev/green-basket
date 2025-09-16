import { BenefitSection } from '@/sections/BenefitSection';
import { ReviewSection } from '@/sections/ReviewSection';
import { AppSetup } from '@/setups/AppSetup';
import Image from 'next/image';
import React from 'react'

const page = () => {
    return (
        <AppSetup>
            <div className="w-full mx-auto md:pt-16">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full sm:w-1/2 order-last md:order-first">
                            <div className="px-4">
                                <h1 className="text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800">
                                    Our Story
                                </h1>
                                <div className="my-1.5 text-gray-600 sm:text-lg font-light sm:pr-4 space-y-4">
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
                                        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                                        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.
                                    </p>
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:order-last order-first">
                            <div className="sm:pl-8">
                                <Image
                                    className="w-full rounded-lg"
                                    src="/about-2.svg"
                                    alt="Next.js logo"
                                    width={500}
                                    height={350}
                                    priority
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center pt-8 md:pt-20">
                        <div className="w-full sm:w-1/2 order-last md:order-last">
                            <div className="px-4">
                                <h1 className="text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800 sm:pl-4">
                                    Our Mission
                                </h1>
                                <div className="my-1.5 text-gray-600 sm:text-lg font-light sm:pl-4 space-y-4">
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
                                        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                                        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:order-first order-first">
                            <div className="sm:pr-8">
                                <Image
                                    className="w-full rounded-lg"
                                    src="/about1.svg"
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

                <BenefitSection />
                <ReviewSection />
            </div>
        </AppSetup>
    )
}


export default page;