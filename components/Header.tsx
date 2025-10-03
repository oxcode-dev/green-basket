'use client';

import React, { FormEvent, useState } from 'react'
import { Logo } from './Logo'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon, EnvelopeIcon, MagnifyingGlassIcon, ShoppingCartIcon, TagIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { User } from '@/types';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/auth';
import { useInitials } from '@/types/helper';
import { useNavigationItems } from '@/hooks/useNavigationItems';
import { CategoryDropdown } from '@/sections/CategoriesSection';
import { useRouter, useSearchParams } from 'next/navigation';

type UserProp = {
    user: User | null
}
export const Header = () => {
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    return (
        <div>
            <DesktopHeader user={loggedUser} />

            <MobileHeader user={loggedUser} />

        </div>
    )
}

export const DesktopHeader = ({ user }: UserProp) => {
    const { navigationItems, appNavigationItems } = useNavigationItems()

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
                        <div>
                            <CategoryDropdown />
                        </div>

                        <div>
                            <HeaderSearchBar />
                        </div>
                        <nav>
                            <ul className="flex">
                                { appNavigationItems.map((item, key) => (
                                    <Link href={item.link} key={key} className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">
                                        {item.label}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                        <div>
                            <div className="inline-flex items-center space-x-3">
                                { user && user.email ?
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:border-0 p-0">
                                            {/* <div className="w-8 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div> */}
                                            <div className="avatar avatar-placeholder">
                                                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                                    <span className="text-md">
                                                        {useInitials(`${user?.first_name} ${user?.last_name}`)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="bg-white menu menu-sm text-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                        >
                                            { navigationItems.map((item, key) => (
                                                <li key={key}>
                                                    <Link href={item.link} className="justify-between py-1 hover:bg-gray-100">
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                : null }
                                
                                { !user ?
                                    <Link href="/auth" title="Sign In">
                                        <ArrowRightEndOnRectangleIcon className="size-5" />
                                    </Link>
                                : null }
                                <Link href="/cart" className="w-6 relative">
                                    <ShoppingCartIcon className="size-5" />
                                    <span className="w-4 h-4 text-xs text-white absolute right-0 -top-2 bg-red-600 p-1 rounded-full items-center justify-center inline-flex">1</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MobileHeader = ({ user }: UserProp) => {
    const [active, setActive] = useState(false)
    const { navigationItems, appNavigationItems } = useNavigationItems()

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
                                    <div>
                                        <CategoryDropdown />
                                    </div>

                                    <div>
                                        <HeaderSearchBar />
                                    </div>

                                    <div className="flex flex-col mx-auto">
                                        { appNavigationItems.map((item, key) => (
                                            <Link href={item.link} key={key} className="text-slate-700 border-0 px-4 py-3 text-md hover:text-green-600">
                                                {item.label}
                                            </Link>
                                        ))}
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
                        { user && user.email ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:border-0 p-0">
                                    {/* <div className="w-8 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div> */}
                                    <div className="avatar avatar-placeholder">
                                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                            <span className="text-md">
                                                {useInitials(`${user?.first_name} ${user?.last_name}`)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                >
                                    { navigationItems.map((item, key) => (
                                        <li key={key}>
                                            <Link href={item.link} className="justify-between py-1 hover:bg-gray-100">
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        : null }

                        { !user ?
                            <Link href="/auth" title="Sign In">
                                <ArrowRightEndOnRectangleIcon className="size-5" />
                            </Link>
                        : null }

                        <Link className="w-6 relative" href="/cart" title="Shopping Cart">
                            <span className="w-4 h-4 text-xs text-white absolute right-0 -top-2 bg-red-600 p-1 rounded-full items-center justify-center inline-flex">
                                3
                            </span>
                            <span>
                                <ShoppingCartIcon className="size-5" />
                            </span>
                        </Link>
                        <a onClick={() => setActive(true)} className="w-6 flex">
                            <Bars3Icon className="size-6" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const HeaderSearchBar = () => {
    const searchParams = useSearchParams()
    // const search = searchParams.get('search') || ''
    const router = useRouter();
    const [search, setSearch] = useState(searchParams.get('search') || '')
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/query?search=${search}`)
    }
    return (
        <form onSubmit={e => onSubmit(e)} className="px-4 py-4 w-full">
            <div className="inline-flex space-x-2 w-full items-center">
                <label className="input bg-white input-neutral shadow-xl">
                    <MagnifyingGlassIcon className="h-5 opacity-50" />
                    <input 
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        type="search" className="grow focus:outline-none" 
                        placeholder="Search Product..." 
                    />
                    <button className="btn btn-circle btn-xs">
                        <MagnifyingGlassIcon className="size-4 opacity-50" />
                    </button>
                </label>
            </div>
        </form>
    )
}