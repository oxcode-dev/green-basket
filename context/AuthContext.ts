import React, { createContext, useState } from "react";
import { JSX } from "react/jsx-runtime";

type TokenContextType = {
    token: string;
    updateToken: (token: string) => void;
};

// export const AuthContext = createContext<TokenContextType | null>(null);

export const AuthContext = React.createContext({} as TokenContextType);

type PropsType = {
    children:  React.ReactNode;
}

export const AuthProvider = ({ children }: PropsType) : JSX.Element => {
    const [token, setToken] = useState('');
    const updateToken = (string: string) => setToken(string);

    return (
        <AuthContext.Provider value={{ token, updateToken }}>
            {children}
        </AuthContext.Provider>
    )
}
