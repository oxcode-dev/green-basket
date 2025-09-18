'use client'

import { Header } from "@/components/Header";
import { ShoppingBagIcon, HomeIcon, BookmarkIcon, MapIcon, ArrowLeftStartOnRectangleIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Header />
            <div>
                <div className="pt-24 md:pt-0">
                    <div className="container w-full mx-auto py-8 px-4 md:px-0">
                        <div className="w-full flex flex-wrap md:flex-nowrap items-start space-y-6 md:space-y-0">
                            <div className="w-full md:w-1/3 md:pr-6">
                                <div className="space-y-4">
                                    <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                        {/* Profile Info and Avatar */}
                                        <div>
                                            <div className="flex flex-col items-center w-full py-6 border-gray-300 md:border-b">
                                                <div>
                                                    <img
                                                        className="w-20 h-20 rounded-full object-cover object-center"
                                                        src="https://firebasestorage.googleapis.com/v0/b/jobquest-ac99d.appspot.com/o/talents%2Favatar%2FIMG_0965.jpgb12beebd-03de-4167-a91e-1331fe607ff4?alt=media&token=069b1783-4f7c-4a6a-b58a-7e413e64590f"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h2 className="text-xl font-semibold text-gray-500 pt-3">Vivian Brooks</h2>
                                                    <a className="underline text-sm text-gray-500" href="#">
                                                        Change Avatar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Dashboard Navigation */}
                                        <div>
                                            <ul className="hidden md:flex flex-col py-2">
                                                <li className="py-1 w-full">
                                                    <a
                                                        className="inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="/dashboard/"
                                                    >
                                                        <HomeIcon className="size-6" />
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                                <li className="py-1 w-full">
                                                    <a
                                                        className="inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="/dashboard/"
                                                    >
                                                        <MapIcon className="size-6" />
                                                        <span>My Addresses</span>
                                                    </a>
                                                </li>
                                                <li className="py-1 w-full">
                                                    <a
                                                        aria-current="page"
                                                        className="router-link-active router-link-exact-active bg-white font-medium inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="/dashboard/applied-jobs"
                                                    >
                                                        <ShoppingBagIcon className="size-6" />
                                                        <span>My Orders</span>
                                                    </a>
                                                </li>
                                                <li className="py-1 w-full">
                                                    <a
                                                        className="inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="/dashboard/saved-jobs"
                                                    >
                                                        <BookmarkIcon className="size-6" />
                                                        <span>Saved Products</span>
                                                    </a>
                                                </li>
                                                <li className="py-1 w-full">
                                                    <a
                                                        className="inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="/dashboard/account"
                                                    >
                                                        <Cog8ToothIcon className="size-6" />
                                                        <span>Account Management</span>
                                                    </a>
                                                </li>
                                                <li className="py-1 w-full">
                                                    <a
                                                        className="inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5"
                                                        href="#"
                                                    >
                                                        <ArrowLeftStartOnRectangleIcon className="size-6" />
                                                        <span>Sign out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 md:pr-6">
                                <div className="space-y-4">
                                    <div className="border border-gray-300 rounded-xl w-full">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
