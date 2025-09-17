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
                {children}
            </div>
        </div>
    )
}
