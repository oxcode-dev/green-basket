import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react'

export const useFetchProducts = () => {
    async function fetchOrders() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/products`, {
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

    const { data: productsList, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_products"],
        queryFn: () => fetchOrders(),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const products = useMemo(() => {
        return productsList?.data;
    }, [productsList]);

    return {
        products,
        error,
        isFetching,
        isLoading,
    } 
}
