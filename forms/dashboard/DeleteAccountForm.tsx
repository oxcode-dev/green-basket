import ErrorAlert from '@/components/ErrorAlert';
import { isEmpty } from '@/types/helper'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormProp = {
    password: string
};

const DeleteAccountForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorBag, setErrorBag] = useState({})

    const router = useRouter()

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

        if(isEmpty(getToken)) {
            return alert('Unauthenticated User')
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/delete-account`, {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                password: data.password,
            }),
        })

        const feedback = await response.json()

        if (feedback?.success) {
            reset()
            router.push('/logout')
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
                    <div>
                        <p className="text-sm font-normal text-gray-500">
                            You are about to request that we permanently delete your data and close 
                            your GreenBasket account and all of your personal data permanently. All goods and 
                            services that you have access to through your account will stop being offered as soon as it is deleted.
                        </p>
                    </div>
                    <div className="space-y-1.5 flex flex-col pt-4">
                        <label className="text-sm font-normal text-gray-500" htmlFor="last_name">
                            Kindly provided your password to confirm delete.
                        </label>
                        <input type="password" {...register("password",  { required: true })} placeholder="********" className="input w-full bg-white border border-gray-300" />
                        {errors.password && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                    </div>

                    <div className="py-2 pt-6">
                        <button disabled={isLoading} type="submit" className="btn !bg-green-600 active:bg-green-600 border-green-600 text-white btn-md">
                            { isLoading && <span className="loading loading-spinner loading-sm text-white"></span> }
                            <span>{ isLoading ? 'Loading...' : 'Save Changes'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteAccountForm;