import { Logo } from '@/components/Logo';
import Image from 'next/image'
import React, { Children } from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div className="relative">
                <div className="w-full h-screen overflow-hidden fixed inset-0">
                    <Image
                        className="w-full object-center object-cover"
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
                            <div className="py-6 md:pt-16 px-4 md:px-8">
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