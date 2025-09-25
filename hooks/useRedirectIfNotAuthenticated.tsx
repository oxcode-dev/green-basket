'use client'

import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/auth';
import { isEmpty } from '@/types/helper';

export default function useRedirectIfNotAuthenticated(redirectIfAuthenticated: string = '/'){
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    if (isEmpty(loggedUser)){
        redirect(redirectIfAuthenticated)
    }
}