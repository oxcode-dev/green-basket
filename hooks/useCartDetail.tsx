'use client'
import { getCarts, addCart } from "@/store/slices/cart"
import { ProductItem } from "@/types"
import { isEmpty } from "@/types/helper"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { FormEvent, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type CartProp = {
    product_id: string;
    quantity: number;
}
type ProductsProp = {
    data: ProductItem[];
    success: boolean;
    message: string;
}

export const useCartDetail = () => {
    const dispatch = useDispatch()
    const getAllCarts :CartProp[] = useSelector(getCarts) || []

    const pathname = usePathname();
    const [shippingCost] = useState(8)

    const cartProductsIds = useMemo(() => {
        let ids: string[] = [];
        getAllCarts.forEach((item) => ids.push(item.product_id))
        return ids;
    }, [getAllCarts])

    const totalCartsQuantity = useMemo(() => {
        return getAllCarts.reduce((acc = {total: 0}, item :CartProp) => {
            acc.total = acc.total + item.quantity
            return acc;
        },  { total: 0 })
    }, [getAllCarts])

    const handleAddCart = (product_id: string, e: FormEvent) => {
        e.preventDefault();
        let checkCart = getAllCarts.find(n => n.product_id === product_id) 

        if(checkCart && !isEmpty(checkCart)) {
            let items = getAllCarts.map(obj =>
                obj.product_id === product_id ? { ...obj, quantity: obj.quantity + 1 } : obj
            );
            dispatch(addCart(items))
        }
        else{
            let items = [...getAllCarts, {
                product_id: product_id, 
                quantity: 1
            }]
            dispatch(addCart(items))
        }
    }

    const handleReduceCartQuantity = (product_id: string, e: FormEvent) => {
        e.preventDefault();
        let checkCart = getAllCarts.find(n => n.product_id === product_id)
        let items = []

        if(checkCart) {
            if(checkCart.quantity > 1) {
                items = getAllCarts.map(obj =>
                    obj.product_id === product_id ? { ...obj, quantity: obj.quantity - 1 } : obj
                );
                dispatch(addCart(items))
            } else{
                handleRemoveCartItem(product_id, e)
            }
        }
    }

    const handleRemoveCartItem = (product_id: string, e: FormEvent) => {
        e.preventDefault();

        let items = getAllCarts.filter(n => n.product_id !== product_id)
        dispatch(addCart(items))
    }

    const resetCart = () => {
        dispatch(addCart([]))
    }

    async function fetchCartProducts() : Promise<ProductsProp | null> {
        const params = new URLSearchParams();
        cartProductsIds.forEach(id => params.append('id[]', id))

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/products/cart?${params.toString()}`, {
            headers: { 
                // Authorization: `Bearer ${getToken.token}`,
                'Content-Type': 'application/json' 
            },
        });
    
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        return response.json();
    }

    const { data: products, error, isLoading, isFetching } = useQuery<ProductsProp | {}>({
        queryKey: ["list_cart_products", cartProductsIds],
        queryFn: () => fetchCartProducts(),
        // queryFn: () => pathname === '/cart' ? fetchCartProducts() : () => {},
        placeholderData: keepPreviousData,
        staleTime: 10 * 60 * 1000,
    });

    const getProductDetails = (product_id: string) : ProductItem | {} => {
        if(product_id && products) {
            //@ts-ignore
            return products?.data.find(n => n.id === product_id) || {}
        }
        return {}
    }

    const totalCartsPrice = useMemo((): number => {
        return getAllCarts.reduce((acc = {total: 0}, item: CartProp) => {
            //@ts-expect-error
            const itemTotal = parseFloat((item.quantity * getProductDetails(item.product_id)?.price || 0).toFixed(2));
            acc.total = (acc.total + itemTotal)
            return acc;
        },  { total: 0 })?.total || 0
    }, [getAllCarts, products])

    const getAllTaxValue = useMemo(() => {
        return (5/100) * totalCartsPrice||0;
    }, [getAllCarts])

    const totalAmount = useMemo(() => {
        return totalCartsPrice + getAllTaxValue;
    }, [getAllCarts])

    return {
        getAllCarts, handleAddCart, handleReduceCartQuantity, totalCartsQuantity,
        resetCart, handleRemoveCartItem, cartProductsIds, products, totalCartsPrice,
        getProductDetails, getAllTaxValue, totalAmount,
    }
}