import React from 'react'

type Prop = {children: React.ReactNode;}
const ErrorAlert = ({ children } : Prop) => {
    return (
        <div>
            <div role="alert" className="alert alert-error bg-red-500 text-white mb-2 text-sm">
                {children}
            </div>
        </div>
    )
}

export default ErrorAlert