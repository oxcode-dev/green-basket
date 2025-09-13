'use client';

import React, { useState } from 'react'
import { Logo } from './Logo'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon, EnvelopeIcon, MagnifyingGlassIcon, ShoppingCartIcon, TagIcon, UserIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

export const Header = () => {
    return (
        <div>
            <DesktopHeader />

            <MobileHeader />

        </div>
    )
}

export const DesktopHeader = () => {
  return (
    <div className="shadow hidden md:block">
        <div className="py-2 w-full border-b border-gray-300 font-medium">
            <div className="w-full container mx-auto flex justify-between items-center text-sm text-gray-500">
                <div>
                    <p className="text-sm">
                        <span>Need help? Call us: </span>
                        <a href="tel: +234807890930" className="underline">+123 903434</a>
                    </p>
                </div>
                <div>
                    <p>
                        100% Secure delivery without contacting the courier.
                    </p>
                </div>
                <div> 
                    <a href="mailto:info@greenbasket.com" className="inline-flex space-x-1.5 items-center">
                        <span>
                            <EnvelopeIcon className="size-5" />
                        </span>
                        <span>info@greenbasket.com</span>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <div className="w-full container mx-auto flex justify-between items-center">
                <div className="py-3">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className="flex space-x-4 items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <div className="inline-flex items-center space-x-1.5">
                                <span>
                                    <TagIcon className="size-5" />
                                </span>
                                <span>All Categories</span>
                                <span>
                                    <ChevronDownIcon className="size-5" />
                                </span>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Account
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="inline-flex space-x-2 items-center">
                            <label className="input bg-white input-neutral shadow-xl">
                                <MagnifyingGlassIcon className="h-5 opacity-50" />
                                <input type="text" className="grow focus:outline-none" placeholder="Search Product..." />
                                <button className="btn btn-circle btn-xs">
                                    <MagnifyingGlassIcon className="size-4 opacity-50" />
                                </button>
                            </label>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex">
                            <li>
                                <Link href="/" className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Home</Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Shop</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <div className="inline-flex items-center space-x-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:border-0 p-0">
                                    <div className="w-8 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <a className="justify-between">
                                            Account
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            
                            <a>
                                <ArrowRightEndOnRectangleIcon className="size-5" />
                            </a>
                            <a className="w-6 relative">
                                <ShoppingCartIcon className="size-5" />
                                <span className="w-4 h-4 text-xs text-white absolute right-0 -top-2 bg-red-600 p-1 rounded-full items-center justify-center inline-flex">1</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export const MobileHeader = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="md:hidden">
            <nav className="fixed bg-white w-full flex justify-between items-center mx-auto px-4 z-50 h-24 shadow shadow-green-50">
                <div className="inline-flex text-gray-600">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="sm:px-12 flex h-full items-center">
                    <div className="flex md:hidden">
                        <div 
                            className={
                                `bg-white h-screen fixed top-0 w-full left-0 transition-transform duration-[0.8s] ease-[ease-in-out] z-[100]
                                ${active ? "translate-x-[0%]" : "translate-x-[-100%]"}`
                            }
                        >
                            <div className="absolute right-4 top-8">
                                <a onClick={() => setActive(false)} className="w-6">
                                    <XMarkIcon className="size-5" />
                                </a>
                            </div>
                            <div className="pt-8">
                                <div className="w-full mx-auto h-full">
                                    <div className="dropdown p-4 pb-3">
                                        <div tabIndex={0} role="button" className="btn btn-neutral">
                                            <div className="inline-flex items-center space-x-2">
                                                <span>
                                                    <TagIcon className="size-5" />
                                                </span>
                                                <span>All Categories</span>
                                                <span>
                                                    <ChevronDownIcon className="size-5" />
                                                </span>
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                        >
                                            <li>
                                                <a className="justify-between">
                                                    Account
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><a>Logout</a></li>
                                        </ul>
                                    </div>

                                    <div className="px-4 py-4 w-full">
                                        <div className="inline-flex space-x-2 w-full items-center">
                                            <label className="input bg-white input-neutral shadow-xl">
                                                <MagnifyingGlassIcon className="h-5 opacity-50" />
                                                <input type="search" className="grow focus:outline-none" placeholder="Search Product..." />
                                                <button className="btn btn-circle btn-xs">
                                                    <MagnifyingGlassIcon className="size-4 opacity-50" />
                                                </button>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mx-auto">
                                        <Link
                                            className="text-slate-700 border-0 px-4 py-3 text-md hover:text-green-600"
                                            href="/">
                                            Home
                                        </Link>
                                        <Link
                                            className="text-green-700 border-green-600 border-b-4 px-4 py-3 text-md hover:text-green-600"
                                            href="/about">
                                            About Us
                                        </Link>
                                        <Link
                                            className="text-slate-700 border-0 px-4 py-3 text-md hover:text-green-600"
                                            href="/shop">
                                            Shop
                                        </Link>
                                        <Link
                                            className="text-slate-700 border-0 px-4 py-3 text-md hover:text-green-600"
                                            href="/contact">
                                            Contact
                                        </Link>
                                    </div>

                                    <div className="w-full flex flex-col space-y-2 px-4 py-5 text-sm text-gray-500">
                                        <div>
                                            <p className="text-sm">
                                                <span>Need help? Call us: </span>
                                                <a href="tel: +234807890930" className="underline">+123 903434</a>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                100% Secure delivery without contacting the courier.
                                            </p>
                                        </div>
                                        <div> 
                                            <a href="mailto:info@greenbasket.com" className="inline-flex space-x-1.5 items-center">
                                                <span>
                                                    <EnvelopeIcon className="size-5" />
                                                </span>
                                                <span>info@greenbasket.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:border-0 p-0">
                                <div className="w-8 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between">
                                        Account
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>

                        <a className="w-6 relative" href="/cart" title="Shopping Cart">
                            <span className="w-4 h-4 text-xs text-white absolute right-0 -top-2 bg-red-600 p-1 rounded-full items-center justify-center inline-flex">
                                3
                            </span>
                            <span>
                                <ShoppingCartIcon className="size-5" />
                            </span>
                        </a>
                        <a onClick={() => setActive(true)} className="w-6 flex">
                            <Bars3Icon className="size-6" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

