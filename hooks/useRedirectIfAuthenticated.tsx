'use client'

import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/auth';

export default function useRedirectIfAuthenticated(redirectIfAuthenticated: string = '/'){
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    if (loggedUser && loggedUser.email){
        redirect(redirectIfAuthenticated)
    }
}