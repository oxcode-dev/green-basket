import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/auth';

export default function useRedirectIfAuthenticated(redirectIfAuthenticated: string = '/'){
    const router = useRouter();
    // @ts-ignore
    const loggedUser : User | null = useSelector(getUser)?.user || null;

    useEffect(() => {
        if (loggedUser && loggedUser.email){
            router.push(redirectIfAuthenticated);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loggedUser, redirectIfAuthenticated]);
}