import { AddressItemProp } from '@/types';
import { isEmpty } from '@/types/helper';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react'

type AddressFetchType = {
    data: AddressItemProp[];
    message: string
    success: boolean
}

export const useFetchAddresses = () => {
    
    async function fetchAddress() {
        const getTokenResponse = await fetch('/api/fetch-token')
    
        const getToken = await getTokenResponse.json()

        console.log(getToken && !getToken?.token)
    
        if(isEmpty(getToken) && !getToken?.token) {
            location.href = '/logout'
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/addresses`, {
            headers: { 
                Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Accept-Type': 'application/json',
            },
        });
    
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    }

    const { data: addressesList, error, isLoading, isFetching } = useQuery<AddressFetchType>({
        queryKey: ["list_address"],
        queryFn: fetchAddress,
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const addresses = useMemo(() => {
        return addressesList?.data;
    }, [addressesList]);

    return {
        addresses,
        error,
        isFetching,
        isLoading,
    } 
}
