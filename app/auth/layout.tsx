'use client';

import { Logo } from '@/components/Logo';
import useRedirectIfAuthenticated from '@/hooks/useRedirectIfAuthenticated';
import Image from 'next/image'
import React, { Children } from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
   
    useRedirectIfAuthenticated()

    return (
        <div>
            <div className="relative">
                <div className="w-full h-screen bg-[#d18849] overflow-hidden fixed inset-0 md:flex hidden">
                    <Image
                        className="w-full h-full object-center object-cover"
                        src="/auth-bg.jpg"
                        alt="Auth Background"
                        width={500}
                        height={350}
                        priority
                        layout="responsive"
                    />
                </div>

                <div className="relative z-50 w-full h-screen">
                    <div className="w-full flex justify-end">
                        <div className="w-full h-full md:max-w-xl bg-white min-h-screen bg-gradient-to-br from-0% to-60% from-green-50 to-white">
                            <div className="py-6 pt-12 md:pt-20 px-4 md:px-8 h-full">
                                <Logo />

                                <div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default layout