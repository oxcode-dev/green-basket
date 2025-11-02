import { ProductSortListType } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react'
import { get } from '@/services'

export const useFetchProducts = () => {
    const searchParams = useSearchParams()
    const page = Number(searchParams.get('page')) || 1
    const sortBy = searchParams.get('sort') || 'latest'
    const search = searchParams.get('search') || ''
    const perPage = Number(searchParams.get('perPage')) || 20;
    const perPageLists :number[] = [10, 20, 40, 50, 100];
    const productSortLists :ProductSortListType[] = [
        { label: "Latest", sort_field: 'created_at', sort_order: false, value: 'latest' },
        { label: "Lowest Price First", sort_field: 'price', sort_order: true, value: 'lowest_price' },
        { label: "Highest Price First", sort_field: 'price', sort_order: false, value: 'highest_price'},
    ]
    const sortValue = useMemo(() => {
        return productSortLists.find(n => n.value === sortBy)
    }, [sortBy]);
    async function fetchProducts(page :number) {
        const url = `/products?search=${search}&page=${page}&perPage=${perPage}&sortField=${sortValue?.sort_field}&sortAsc=${sortValue?.sort_order}`

        let response = await get(url)

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
            // return console.log("Failed to fetch posts");
        }

        return response.json();
    }

    const { data: productsList, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_products", page, perPage, sortBy, search],
        queryFn: () => fetchProducts(page),
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const products = useMemo(() => {
        return productsList?.data?.data || [];
    }, [productsList]);

    const productsMeta = useMemo(() => {
        const { last_page, current_page, per_page, total: total_products } = productsList?.data || [];
        return {
            last_page,
            current_page,
            per_page,
            total_products,
        }
    }, [productsList]);

    return {
        products,
        error,
        isFetching,
        isLoading,
        productsMeta,
        perPageLists,
        productSortLists,
    } 
}
