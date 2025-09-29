import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React from 'react'

export const useFetchCategories = () => {
    async function fetchOrders() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/categories`, {
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

    const { data: categories, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_categories"],
        queryFn: () => fetchOrders(),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });
    return {
        categories,
        error,
        isFetching,
        isLoading,
    } 
}
