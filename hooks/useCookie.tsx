import React from 'react'
import Cookies from 'js-cookie';

const useCookie = () => {
    const setCookie = (name: string, value: string) => {
        Cookies.set(name, value, { expires: 3 }); // expires in 7 days
    };

    // Getting a cookie
    const getCookie = (name: string) : string => {
        return Cookies.get(name) || '';
    };

    // Deleting a cookie
    const deleteCookie = (name: string) => {
        Cookies.remove(name);
    };
    
    return { setCookie, getCookie, deleteCookie } as const;
}

export default useCookie