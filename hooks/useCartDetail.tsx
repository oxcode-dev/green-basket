'use client'
import { getCarts, addCart } from "@/store/slices/cart"
import { isEmpty } from "@/types/helper"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { FormEvent, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type CartProp = {
    product_id: string;
    quantity: number;
}

export const useCartDetail = () => {
    const dispatch = useDispatch()
    const getAllCarts :CartProp[] = useSelector(getCarts) || []

    // const [carts, setCarts] = useState([])
    // const [isClient, setIsClient] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)
    // const [totalAmount, setTotalAmount] = useState(0)
    // const [shippingCost] = useState(8)

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


    const totalCartsPrice = () => {
        return getAllCarts.reduce((acc = {total: 0}, item: CartProp) => {
            //@ts-expect-error
            const itemTotal = parseFloat((item.quantity * getProductDetails(item.product_id)?.price || 0).toFixed(2));
            acc.total = (acc.total + itemTotal)
            return acc;
        },  { total: 0 })

    }

    const resetCart = () => {
        dispatch(addCart([]))
    }


    // const handleCartQuantity = (product_id: string, e: FormEvent) => {
    //     e.preventDefault();
    //     let checkCart = carts.find(n => n.product_id === product_id)
    //     let product = products.find(n => n.id === product_id)
    //     let items = []

    //     if(checkCart) {
    //         if(product.quantity > checkCart.quantity) {
    //             items = carts.map(obj =>
    //                 obj.product_id === product_id ? { ...obj, quantity: obj.quantity + 1 } : obj
    //             );
    //             dispatch(addCart(items))
    //             setCarts(items)
    //         }
    //     }
        
    // }

    async function fetchOrders() {
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

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ["list_categories3443"],
        queryFn: () => fetchOrders(),
        // placeholderData: keepPreviousData,
        // staleTime: 10 * 60 * 1000,
    });

    console.log(data)
    

    return {
        getAllCarts, handleAddCart, handleReduceCartQuantity, totalCartsQuantity,
        resetCart, handleRemoveCartItem, cartProductsIds, data
    }
}