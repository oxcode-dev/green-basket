import { get } from '@/services';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react'

export const useFetchCategories = () => {
    async function fetchCategories() {
        const url = '/categories';
    
        let response = await get(url)

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return response.json();
    }

    const { data: categoriesList, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_categories"],
        queryFn: () => fetchCategories(),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const categories = useMemo(() => {
        return categoriesList?.data || [];
    }, [categoriesList]);

    return {
        categories,
        error,
        isFetching,
        isLoading,
    } 
}
