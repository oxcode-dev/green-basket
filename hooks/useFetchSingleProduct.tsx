'use client';

import { ProductItem, ReviewItem } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { get } from '@/services';

type FetchedProductType = {
    data: ProductItem;
    message: string;
    status: boolean;
}
export const useFetchProduct = () => {
    const params = useParams<{ id: string }>()
    const { id } = params;
    
    async function fetchProduct(id : string) {
        const url = `/products/${id}`

        let response = await get(url)

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
            // return console.log("Failed to fetch posts");
        }

        return response.json();
    }

    const { data, error, isLoading, isFetching } = useQuery<FetchedProductType>({
        queryKey: ["list_products", id],
        queryFn: () => fetchProduct(id),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const product = useMemo(() => {
        return data?.data;
    }, [data]);

    const reviews = useMemo(() => {
        return data?.data?.reviews
    }, [product]);

    const wishlists = useMemo(() => {
        return product?.wishlists;
    }, [product]);

    return {
        product,
        error,
        isFetching,
        isLoading,
        wishlists,
        reviews,
    } 
}
