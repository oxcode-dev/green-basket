import React from 'react'
import { Logo } from './Logo'
import { ArrowRightEndOnRectangleIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/20/solid'

export const Header = () => {
    return (
        <div className=''>
            <div className="py-2 w-full">
                <div className="w-full container mx-auto flex justify-between items-center text-sm">
                    <div>
                        <p className="text-sm">
                            <span>Need help? Call us: </span>
                            <a href="tel: +234807890930" className="underline">+123 903434</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            1000% Secure delivery without contacting the courier.
                        </p>
                    </div>
                    <div> 
                        info@greenbasket.com
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full container mx-auto flex justify-between items-center">
                    <div className="py-2">
                        <Logo />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <div>
                            <div className="inline-flex space-x-2 items-center">
                                <label className="input">
                                    <MagnifyingGlassIcon className="h-5 opacity-50" />
                                    <input type="search" className="grow focus:outline-none" placeholder="Search Product..." />
                                    <kbd className="kbd kbd-sm">⌘</kbd>
                                    <kbd className="kbd kbd-sm">K</kbd>
                                </label>
                                <button className="btn btn-circle btn-sm">
                                    <MagnifyingGlassIcon className="h-5 opacity-50" />
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul className="flex">
                                <li>
                                    <a className="border-0 px-4 py-6 text-md hover:text-green-600">Home</a>
                                </li>
                                <li>
                                    <a className="border-0 px-4 py-6 text-md hover:text-green-600">Shop</a>
                                </li>
                                <li>
                                    <a className="border-0 px-4 py-6 text-md hover:text-green-600">About</a>
                                </li>
                                <li>
                                    <a className="border-0 px-4 py-6 text-md hover:text-green-600">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <div className="inline-flex items-center space-x-3">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-6 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
