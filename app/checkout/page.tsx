'use client';

import { useCartDetail } from '@/hooks/useCartDetail';
import { useFetchAddresses } from '@/hooks/useFetchAddresses';
import { isEmpty, moneyFormat } from '@/types/helper';
import { useMutation } from '@tanstack/react-query';
import React, { useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type CartProp = {
    product_id: string;
    quantity: number;
}

type CheckoutOrderProp = {
    address_id: string;
    name_on_card: string;
    card_number: string | number;
    expiry_month?: number | string;
    expiry_year?: number | string;
    cvv: string | number;
    cart: CartProp[],
    totalAmount: number,
    shippingCost: number,
    tax: number,
    totalPrice: number,
}
const page = () => {
    const {getAllCarts, getProductDetails, totalCartsPrice, getAllTaxValue, totalAmount } = useCartDetail();
    const shippingCost = 200;
    const totalCostWithShipping = useMemo(() :number => {
        return totalAmount + shippingCost
    }, [totalAmount])
    const { addresses } = useFetchAddresses()

    const mutation = useMutation({
        mutationFn: (data) => handleForm(data)
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CheckoutOrderProp>({
        defaultValues: {
            address_id: '',
            name_on_card: '',
            card_number: '',
            expiry_month: '',
            expiry_year: '',
            cvv: '',
            cart: getAllCarts,
            totalAmount: totalAmount,
            shippingCost: shippingCost,
            tax: getAllTaxValue,
            totalPrice: totalCostWithShipping,
        }
    });

    const onSubmit: SubmitHandler<CheckoutOrderProp> = async(data) => {
        mutation.mutate(data)
    }

    const handleForm = async(data: CheckoutOrderProp) => {

        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            return alert('Unauthenticated User')
        }

        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/orders`

        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                address_id: data.address_id,
                name_on_card: data.name_on_card,
                card_number: data.card_number,
                expiry_month: data.expiry_month,
                expiry_year: data.expiry_year,
                cvv: Number(data.cvv),
                cart: getAllCarts,
                totalAmount: totalAmount,
                shippingCost: shippingCost,
                tax: getAllTaxValue,
                totalPrice: totalCostWithShipping,
            }),
        })

        const feedback = await response.json()
        console.log(feedback)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container w-full mx-auto py-8 px-4 md:px-0">
                <div className="w-full flex flex-wrap md:flex-nowrap items-start space-y-6 md:space-y-0">
                    <div className="w-full md:w-2/3 md:pr-6">
                        <div className="space-y-4">
                            <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Shipping Address
                                </p>

                                <div className="space-y-3 pb-2">
                                    { addresses?.map((address, key) => (
                                        <div key={key} className="relative">
                                            <input
                                                className="hidden peer"
                                                defaultValue={address.id}
                                                id={`option${key}-checkbox`}
                                                type="radio"
                                                {...register("address_id",  { required: true })}
                                            />
                                            <label
                                                className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600 peer-checked:border-green-200 peer-checked:text-green-900 peer-checked:bg-green-200/50 hover:text-neutral-900 hover:border-neutral-300"
                                                htmlFor={`option${key}-checkbox`}
                                            >
                                                <div className="flex items-center space-x-5">
                                                    {/* icon */}
                                                    <div className="flex flex-col justify-start space-y-1">
                                                        <div className="w-full font-semibold">Oxcode</div>
                                                        <div className="w-full text-xs opacity-60 space-x-1.5">
                                                            <span className="space-x-1.5 pl-0.5">
                                                                <span>{address?.street}</span>
                                                                <span>{address?.city}</span>
                                                                <span>{address?.state}</span>
                                                                <span>{address?.postal_code}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-xl p-2 px-4 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Payment
                                </p>
                                <div>
                                    <div className="space-y-4 py-2">
                                        <div className="space-y-4 md:space-y-0">
                                            <label>Name on Card</label>
                                            <input type="text" {...register("name_on_card",  { required: true })} placeholder="Name on card" className="input w-full bg-white border border-gray-300" />
                                        </div>
                                        <div className="space-y-4 md:space-y-0">
                                            <label>Card Number</label>
                                            <input type="text" {...register("card_number",  { required: true })} placeholder="Subject" className="input w-full bg-white border border-gray-300" />
                                        </div>
                                        <div>
                                            <p>Expiry</p>
                                            <div className="w-full grid grid-cols-3 space-x-3">
                                                <div className="space-y-4 md:space-y-0">
                                                    {/* <label>Month</label> */}
                                                    <input type="text"  {...register("expiry_month",  { required: true })} placeholder="month" className="input w-full bg-white border border-gray-300" />
                                                </div>
                                                <div className="space-y-4 md:space-y-0">
                                                    {/* <label>Year</label> */}
                                                    <input type="text"  {...register("expiry_year",  { required: true })} placeholder="year" className="input w-full bg-white border border-gray-300" />
                                                </div>
                                                <div className="space-y-4 md:space-y-0">
                                                    {/* <label>CVV</label> */}
                                                    <input type="text"  {...register("cvv",  { required: true })} placeholder="CVV" className="input w-full bg-white border border-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 md:pl-2">
                        <div className="space-y-4">
                            <div className="border border-gray-300 rounded-xl p-2 w-full">
                                <p className="text-md text-gray-600 font-semibold py-2">
                                    Order Summary
                                </p>
                                { getAllCarts.map((item, key) => (
                                    <div key={key} className="py-1.5 border-t border-gray-300">
                                        <div className="inline-flex space-x-3 items-start w-full">
                                            <img 
                                                src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                                                width={80}
                                                alt='Product Image'
                                                height={80}
                                                className="size-12 object-cover rounded-md"
                                            />
                                            <div className="w-full">
                                                <p className="font-semibold text-sm text-gray-800">
                                                    {getProductDetails(item.product_id)?.title || ''}
                                                </p>
                                                
                                                <div className="flex justify-between items-center w-full">
                                                    <div className="inline-flex flex-col space-y-1">
                                                        <p className="font-medium text-xs text-gray-500">
                                                            <span>Qty:</span>
                                                            <span>{item?.quantity}</span>
                                                        </p>
                                                        <p className="font-semibold text-gray-500 text-xs">
                                                            <span dangerouslySetInnerHTML={{ __html: moneyFormat(getProductDetails(item.product_id)?.price || 0)}}></span>
                                                        </p>
                                                    </div>
                                                    <p className="px-1 py-2 font-bold text-lg text-center">
                                                        <span dangerouslySetInnerHTML={{ __html: moneyFormat(getProductDetails(item.product_id)?.price * item.quantity)}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border border-gray-300 rounded-lg p-4 w-full">
                                <div className="w-full">
                                    <dl className="space-y-1">
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Sub Total</dt>
                                            <dd className="text-sm text-gray-800 font-medium">
                                                <span dangerouslySetInnerHTML={{ __html: moneyFormat(totalCartsPrice)}}></span>
                                            </dd>
                                        </div>
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Tax</dt>
                                            <dd className="text-sm text-gray-800 font-medium">
                                                <span dangerouslySetInnerHTML={{ __html: moneyFormat(getAllTaxValue)}}></span>
                                            </dd>
                                        </div>
                                        <div className="w-full inline-flex justify-between items-center">
                                            <dt className="text-sm text-gray-500 font-normal">Delivery Fee</dt>
                                            <dd className="text-sm text-gray-800 font-medium">
                                                <span dangerouslySetInnerHTML={{ __html: moneyFormat(shippingCost)}}></span>
                                            </dd>
                                        </div>
                                    </dl>

                                    <div className="w-full inline-flex justify-between items-center pt-2 border-t border-gray-300">
                                        <dt className="text-md text-gray-600 font-normal">Total</dt>
                                        <dd className="text-xl text-gray-800 font-medium">
                                            <span dangerouslySetInnerHTML={{ __html: moneyFormat(totalCostWithShipping)}}></span>
                                        </dd>
                                    </div>

                                    <div className="pt-6">
                                        <button type="submit" className="btn btn-md bg-black text-white border-black w-full rounded-full">
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page;
