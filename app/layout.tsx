'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubscriptionSection } from "@/sections/SubscriptionSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ScrollToTop = ({ 
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const location = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased min-h-screen`}
      >
        <ScrollToTop>
          <Header />
          <div className="pt-24 md:pt-0">
            {children}
          </div>
          <SubscriptionSection />
          <Footer />
        </ScrollToTop>
      </body>
    </html>
  );
}
