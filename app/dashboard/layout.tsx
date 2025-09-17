'use client'

import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            {children}
        </div>
    );
}
