'use client';

import { ProductSortListType } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react'
import { useParams } from 'next/navigation'

export const useFetchProduct = () => {
    const params = useParams<{ id: string }>()
    const { id } = params;
    
    async function fetchProduct(id : string) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/products/${id}`, {
            headers: { 
                // Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
        });
    
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    }

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_products", id],
        queryFn: () => fetchProduct(id),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const product = useMemo(() => {
        return data?.data || [];
    }, [data]);

    return {
        product,
        error,
        isFetching,
        isLoading,
    } 
}
