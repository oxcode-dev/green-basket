'use client'

import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="w-full border-b border-gray-200 shadow px-4">
        <div className="w-full container mx-auto flex justify-between items-center">
          <div className="py-3">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div>
            <Link href="/cart" className="uppercase font-medium text-sm">
              Back to Shopping Cart
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
