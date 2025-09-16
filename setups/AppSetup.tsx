import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SubscriptionSection } from '@/sections/SubscriptionSection';
import React from 'react'

export const AppSetup = ({
        children,
    }: Readonly<{
    children: React.ReactNode;
    }>) => {
    return (
        <div>
            <Header />
            <div className="pt-24 md:pt-0">
                {children}
            </div>
            <SubscriptionSection />
            <Footer />
        </div>
    )
}
