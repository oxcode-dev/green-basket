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
                <div className="w-full min-h-screen absolute inset-0">
                    <Image
                        className="w-full rounded-lg"
                        src="/auth-bg.jpg"
                        alt="Auth Background"
                        width={500}
                        height={350}
                        priority
                        layout="responsive"
                    />
                </div>

                {children}

            </div>
        </div>
    )
}

export default layout