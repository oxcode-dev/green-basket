import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SubscriptionSection } from '@/sections/SubscriptionSection';
import React from 'react'

export const DashboardSetup = ({
        children,
    }: Readonly<{
    children: React.ReactNode;
    }>) => {
    return (
        <div>
            <div className="pt-24 md:pt-0">
                <div className="container w-full mx-auto py-8 px-4 md:px-0">
                    <div className="w-full flex flex-wrap md:flex-nowrap items-start space-y-6 md:space-y-0">
                        <div className="w-full md:w-1/3 md:pr-6">
                            <div className="space-y-4">
                                <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                    Hello
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 md:pr-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
