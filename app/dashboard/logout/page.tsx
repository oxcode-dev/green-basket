'use client'

import { Logo } from '@/components/Logo';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { setUser } from '@/store/slices/auth';

const page = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = async() => {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
      
        dispatch(setUser(null))
        router.push('/') 
    }

    // useEffect(() => {
    //     handleLogout()
    // }, [dispatch])

    return (
        <div className="fixed z-[1000] h-screen w-full bg-white top-0 left-0 items-center self-center justify-center flex ">
            <div className="animate animate-bounce">
                <Logo />
            </div>
        </div>
    )
}

export default page;
