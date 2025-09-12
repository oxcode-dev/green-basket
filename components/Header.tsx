import React from 'react'
import { Logo } from './Logo'
import { ArrowRightEndOnRectangleIcon, EnvelopeIcon, MagnifyingGlassIcon, ShoppingCartIcon, TagIcon, UserIcon } from '@heroicons/react/20/solid'

export const Header = () => {
    return (
        <div>
            {/* <DesktopHeader /> */}

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
                    <Logo />
                </div>

                <div className="flex space-x-4 items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <div className="inline-flex items-center space-x-1">
                                <span>
                                    <TagIcon className="size-5" />
                                </span>
                                <span>All Categories</span>
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
                                <a className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Home</a>
                            </li>
                            <li>
                                <a className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Shop</a>
                            </li>
                            <li>
                                <a className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">About</a>
                            </li>
                            <li>
                                <a className="hover:border-b-4 px-4 py-5 text-xs font-semibold hover:text-green-600">Contact</a>
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
