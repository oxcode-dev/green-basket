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
                                    {/* Profile Info and Avatar */}
                                    <div>
                                        <div className="flex flex-col items-center w-full py-6 md:border-b">
                                            <div>
                                                <img
                                                    className="w-20 h-20 rounded-full object-cover object-center"
                                                    src="https://firebasestorage.googleapis.com/v0/b/jobquest-ac99d.appspot.com/o/talents%2Favatar%2FIMG_0965.jpgb12beebd-03de-4167-a91e-1331fe607ff4?alt=media&token=069b1783-4f7c-4a6a-b58a-7e413e64590f"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <h2 className="text-xl font-semibold text-gray-500 pt-3">Vivian Brooks</h2>
                                                <a className="underline text-sm text-blue-500" href="#">
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
                                                className="inline-flex items-center text-blue-500 hover:bg-white w-full space-x-2 p-2.5"
                                                href="/dashboard/">
                                                <i
                                                    className="vue-feather vue-feather--home w-5"
                                                    data-name="home"
                                                    data-tags="house,living"
                                                    data-type="home">
                                                    <svg
                                                    className="feather feather-home vue-feather__content"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                    <polyline points="9 22 9 12 15 12 15 22" />
                                                    </svg>
                                                </i>
                                                <span>Home</span>
                                                </a>
                                            </li>
                                            <li className="py-1 w-full">
                                                <a
                                                aria-current="page"
                                                className="router-link-active router-link-exact-active bg-white font-medium inline-flex items-center text-blue-500 hover:bg-white w-full space-x-2 p-2.5"
                                                href="/dashboard/applied-jobs">
                                                <i
                                                    className="vue-feather vue-feather--mouse-pointer w-5"
                                                    data-name="mouse-pointer"
                                                    data-tags="arrow,cursor"
                                                    data-type="mouse-pointer">
                                                    <svg
                                                    className="feather feather-mouse-pointer vue-feather__content"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                                    <path d="M13 13l6 6" />
                                                    </svg>
                                                </i>
                                                <span>Applied Jobs</span>
                                                </a>
                                            </li>
                                            <li className="py-1 w-full">
                                                <a
                                                className="inline-flex items-center text-blue-500 hover:bg-white w-full space-x-2 p-2.5"
                                                href="/dashboard/saved-jobs">
                                                <i
                                                    className="vue-feather vue-feather--bookmark w-5"
                                                    data-name="bookmark"
                                                    data-tags="read,clip,marker,tag"
                                                    data-type="bookmark">
                                                    <svg
                                                    className="feather feather-bookmark vue-feather__content"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                                    </svg>
                                                </i>
                                                <span>Saved Jobs</span>
                                                </a>
                                            </li>
                                            <li className="py-1 w-full">
                                                <a
                                                className="inline-flex items-center text-blue-500 hover:bg-white w-full space-x-2 p-2.5"
                                                href="/dashboard/account">
                                                <i
                                                    className="vue-feather vue-feather--settings w-5"
                                                    data-name="settings"
                                                    data-tags="cog,edit,gear,preferences"
                                                    data-type="settings">
                                                    <svg
                                                    className="feather feather-settings vue-feather__content"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="3" />
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                    </svg>
                                                </i>
                                                <span>Account Management</span>
                                                </a>
                                            </li>
                                            <li className="py-1 w-full">
                                                <a
                                                className="inline-flex items-center text-blue-500 hover:bg-white w-full space-x-2 p-2.5"
                                                href="#">
                                                <i
                                                    className="vue-feather vue-feather--log-out w-5"
                                                    data-name="log-out"
                                                    data-tags="sign out,arrow,exit"
                                                    data-type="log-out">
                                                    <svg
                                                    className="feather feather-log-out vue-feather__content"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                    <polyline points="16 17 21 12 16 7" />
                                                    <line x1="21" x2="9" y1="12" y2="12" />
                                                    </svg>
                                                </i>
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
                                <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
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
