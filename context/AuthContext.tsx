'use client';

import React, { createContext, useState, useLayoutEffect, useContext, useMemo } from "react";

type TokenContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
};

const AuthContext = createContext<TokenContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    // const firstLogin = localStorage.getItem("firstLogin");

    const fetchToken = async () => {
        const url = `/auth/refresh_token`

        // const response = post(url);

        // return response.then((feedback) => {
        //     setToken(feedback?.data?.access_token as string);
        // }).catch((error) => {
        //     setToken(null)
        //     console.log(error)
        // })
    }

    useLayoutEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");

        if(firstLogin) {
            fetchToken()
        }
    }, [])
    // }, [firstLogin])

    const value = useMemo(() => ({ token, setToken }), [token]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook for easy access
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};