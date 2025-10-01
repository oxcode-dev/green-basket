import { ProductItem } from '@/types'
import { isEmpty } from '@/types/helper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export const useUpdateWishlists = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (product: ProductItem) => handleRemoveWishlist(product)
    })

    const onClick = (product: ProductItem) => {
        mutation.mutate(product)
    }

    const handleRemoveWishlist = async (product: ProductItem) => {
        const getTokenResponse = await fetch('/api/fetch-token')

        const getToken = await getTokenResponse.json()

        if(isEmpty(getToken)) {
            location.href = '/logout'
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/wishlists`, {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                product_id: product?.id,
            }),
        });

        const feedback = await response.json()

        if (feedback?.success) {
            queryClient.invalidateQueries()
            // queryClient.invalidateQueries({ queryKey: ["list_wishlists", page] })
            // setOpen(false)
        } else {
            console.log(feedback)
        }
    }
    return {
        onClick
    }
}
