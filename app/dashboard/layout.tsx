'use client'

import { Header } from "@/components/Header";
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { getUser, setUser } from '@/store/slices/auth';
import { useDispatch, useSelector } from "react-redux"
import { usePathname, useRouter } from 'next/navigation'
import { FormEvent } from "react";
import { User } from "@/types";
import { useInitials } from "@/types/helper";
import { useNavigationItems } from "@/hooks/useNavigationItems";
import useRedirectIfNotAuthenticated from "@/hooks/useRedirectIfNotAuthenticated";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    useRedirectIfNotAuthenticated('/auth')

    const { navigationItems } = useNavigationItems()
    const pathname = usePathname()
    
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

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
                                                    {/* <img
                                                        className="w-20 h-20 rounded-full object-cover object-center"
                                                        src="https://firebasestorage.googleapis.com/v0/b/jobquest-ac99d.appspot.com/o/talents%2Favatar%2FIMG_0965.jpgb12beebd-03de-4167-a91e-1331fe607ff4?alt=media&token=069b1783-4f7c-4a6a-b58a-7e413e64590f"
                                                    /> */}
                                                    <div className="avatar avatar-placeholder">
                                                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                                            <span className="text-3xl">
                                                                {useInitials(`${loggedUser?.first_name} ${loggedUser?.last_name}`)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <h2 className="text-xl font-semibold text-gray-500 pt-3">
                                                        { `${loggedUser?.first_name} ${loggedUser?.last_name}`}
                                                    </h2>
                                                    <p className="text-sm text-gray-500">
                                                        { loggedUser?.email}
                                                    </p>
                                                    {/* <a className="underline text-sm text-gray-500" href="#">
                                                        Change Avatar
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Dashboard Navigation */}
                                        <div>
                                            <ul className="hidden md:flex flex-col py-2">
                                                { navigationItems.map((item, key) => (
                                                    <li key={key} className="py-1 w-full">
                                                        <Link
                                                            className={
                                                                `${pathname === item.link ? 'bg-gray-100 font-semibold' : ''} 
                                                                inline-flex items-center text-gray-500 hover:bg-gray-100 w-full space-x-4 p-2.5`
                                                            }
                                                            href={item.link}
                                                        >
                                                            {item.icon}
                                                            <span>{item.label}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 md:pr-6">
                                <div className="space-y-4">
                                    <div className="border border-gray-300 rounded-xl w-full md:min-h-[580px]">
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
