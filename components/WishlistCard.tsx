import { WishlistItemType } from '@/types'
import { isEmpty } from '@/types/helper'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { ProductCard } from './ProductCard'

type Prop = {
    wishlist: WishlistItemType
}

const WishlistCard = ({ wishlist }: Prop) => {
    const searchParams = useSearchParams()
    const page = Number(searchParams.get('page')) || 1

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (wishlist: WishlistItemType) => handleRemoveWishlist(wishlist)
    })

    const onClick = (wishlist: WishlistItemType) => {
        mutation.mutate(wishlist)
    }

    const handleRemoveWishlist = async (wishlist: WishlistItemType) => {
        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/wishlists/${wishlist.id}`, {
            method: 'DELETE',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
        });

        const feedback = await response.json()

        if (feedback?.success) {
            queryClient.invalidateQueries({ queryKey: ["list_wishlists", page] })
            // setOpen(false)
        } else {
            console.log(feedback)
        }
    }

    return (
        <div className="group relative">
            <button type="button" onClick={() => onClick(wishlist)} title="Remove from Wishlist" className="cursor-pointer absolute -top-2 -right-1 flex md:hidden group-hover:flex">
                <span className="bg-red-500 text-white rounded-full p-1">
                    <TrashIcon className="size-5" />
                </span>
            </button>
            <ProductCard product={wishlist?.product} />
        </div>
    )
}

export default WishlistCard