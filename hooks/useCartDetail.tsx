'use client'
import { getCarts, addCart } from "@/store/slices/cart"
import { isEmpty } from "@/types/helper"
import { FormEvent, useEffect, useState } from "react"
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

    const handleAddCart = (product_id: string, e: FormEvent) => {
        e.preventDefault();
        let checkCart = getAllCarts.find(n => n.product_id === product_id) 
        // let checkCart = carts.find(n => n.product_id === product_id) 

        if(checkCart && !isEmpty(checkCart)) {
            let items = getAllCarts.map(obj =>
                obj.product_id === product_id ? { ...obj, quantity: obj.quantity + 1 } : obj
            );
            // setCarts(items)
            dispatch(addCart(items))
        }
        else{
            let items = [...getAllCarts, {
                product_id: product_id, 
                quantity: 1
            }]
            dispatch(addCart(items))
            // setCarts(items)
        }
    }


    // const totalCartsPrice = () => {
    //     // setIsLoading(true)
    //     let amount = carts.reduce((acc = {}, item = {}) => {
    //         const itemTotal = parseFloat((item.quantity * getProductDetails(item.product_id)?.price || 0).toFixed(2));
    //         acc.total = parseFloat((acc.total + itemTotal))
    //         return acc;
    //     },  { total: 0 })

    //     setTotalAmount(amount.total)
    //     setIsLoading(false)
    // }

    // const handleRemoveCartItem = (product_id: string, e: FormEvent) => {
    //     e.preventDefault();

    //     let items = carts.filter(n => n.product_id !== product_id)
    //     dispatch(addCart(items))
    //     setCarts(items)
    //     // totalCartsPrice()
    // }
    

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

    // const handleReduceCartQuantity = (product_id: string, e: FormEvent) => {
    //     e.preventDefault();
    //     let checkCart = carts.find(n => n.product_id === product_id)
    //     let items = []

    //     if(checkCart) {
    //         if(checkCart.quantity > 1) {
    //             items = carts.map(obj =>
    //                 obj.product_id === product_id ? { ...obj, quantity: obj.quantity - 1 } : obj
    //             );
    //             dispatch(addCart(items))
    //             setCarts(items)
    //         }
    //     }
    // }

    // const resetCarts = () => {
    //     dispatch(addCart([]))
    //     setCarts([])
    // }

    return {
        getAllCarts, handleAddCart,
        // isClient, setIsClient, totalAmount, shippingCost, getAllCarts, 
        // carts, setCarts, handleCartQuantity, isLoading,
        // handleReduceCartQuantity, handleRemoveCartItem, resetCarts, handleAddCart,
    }
}