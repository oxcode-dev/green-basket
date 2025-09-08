import React from 'react'
import { Logo } from './Logo'

export const Header = () => {
    return (
        <div>
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
                    <div>
                        <Logo />
                    </div>

                    <div>
                        <nav>
                            <ul className="flex space-x-2">
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>shop</a>
                                </li>
                                <li>
                                    <a>About</a>
                                </li>
                                <li>
                                    <a>contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <div>
                                <a>
                                    cart
                                </a>
                                <a>
                                    user
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
