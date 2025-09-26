import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Prop = {message:string, onDismiss: () => void}
const SuccessAlert = ({ message, onDismiss } : Prop) => {
    return (
        <div>
            <div className="toast toast-top toast-end">
                <div className="alert alert-success text-white">
                    <span>{message}</span>
                    <button onClick={onDismiss} type="button" className="cursor-pointer">
                        <XMarkIcon className="size-5" />
                    </button>
                </div>
               
            </div>
        </div>
    )
}

export default SuccessAlert