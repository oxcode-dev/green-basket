import ErrorAlert from '@/components/ErrorAlert';
import SuccessAlert from '@/components/SuccessAlert';
import { isEmpty } from '@/types/helper';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type FormProp = {
    current_password: string
    password: string
    confirm_password: string
};

const ChangePasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorBag, setErrorBag] = useState({})
    const [successResponse, setSuccessResponse] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormProp>();

    const onSubmit: SubmitHandler<FormProp> = async(data) => {
        setIsLoading(true);
        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(getToken && !getToken?.token){
            return alert('Unauthenticated User')
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/change-password`, {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                current_password: data.current_password,
                password: data.password,
                confirm_password: data.confirm_password
            }),
        })

        const feedback = await response.json()

        if (feedback?.success) {
            setSuccessResponse(feedback?.message || '')
            reset()
        } else {
            setErrorBag(feedback?.data)
            setIsLoading(false);
        }

        setIsLoading(false);
    }
    return (
        <div>

            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
                    { !isEmpty(errorBag) ? (
                        <ErrorAlert>
                            <ol className="inline-flex flex-col space-y-1.5 list-disc list-inside">
                                { Object.values(errorBag).map((value, key) => (
                                    //@ts-ignore
                                    <li key={key}>{value}</li>
                                ))}
                            </ol>
                        </ErrorAlert>
                    ) : null}

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="current_password">Current Password</label>
                        <input type="password" {...register("current_password",  { required: true })} placeholder="********" className="input w-full bg-white border border-gray-300" />
                        {errors.current_password && <span className="text-red-600 text-xs font-medium">Current Password is required</span>}
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="password">New Password</label>
                        <input type="password" {...register("password",  { required: true })} placeholder="********" className="input w-full bg-white border border-gray-300" />
                        {errors.password && <span className="text-red-600 text-xs font-medium">New Password is required</span>}
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                        <label className="text-sm font-medium text-gray-800" htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" {...register("confirm_password",  { required: true })} placeholder="*********" className="input w-full bg-white border border-gray-300" />
                        {errors.confirm_password && <span className="text-red-600 text-xs font-medium">Confirm Password is required</span>}
                    </div>
            
                    <div className="py-2 pt-6">
                        <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                            { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                            <span>{ isLoading ? 'Loading...' : 'Save Changes'}</span>
                        </button>
                    </div>

                    {successResponse ? (
                        <SuccessAlert 
                            message={successResponse}
                            onDismiss={() => setSuccessResponse('')}
                        />
                    ): null}
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordForm