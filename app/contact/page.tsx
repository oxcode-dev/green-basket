import { ContactFormCard } from '@/components/ContactFormCard';
import { ContactInfoSection } from '@/sections/ContactInfoSection';
import { AppSetup } from '@/setups/AppSetup';
import Image from 'next/image';
import React from 'react'


const page = () => {
    return (
        <AppSetup>
            <ContactInfoSection />

            <div className="w-full container mx-auto md:py-8 md:pb-16">
                <div className="flex flex-wrap md:flex-nowrap gap-8 w-full">

                    <div className="w-full md:w-2/3 bg-gray-50">
                        <ContactFormCard />
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
        </AppSetup>
    )
}

export default page;