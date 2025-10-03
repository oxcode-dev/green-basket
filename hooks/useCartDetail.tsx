'use client'
import { isEmpty } from "../helpers"
import { getCarts, addCart } from "../store/slices/CartSlice"
import { getProducts } from "../store/slices/ProductsSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const useCartDetail = () => {
    const dispatch = useDispatch()
    const getAllCarts = useSelector(getCarts) || []
    const products = useSelector(getProducts) || []

    const [carts, setCarts] = useState([])
    const [isClient, setIsClient] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [totalAmount, setTotalAmount] = useState(0)
    const [shippingCost] = useState(8)

    const getProductDetails = product_id => {
        return product_id ? products.find(n => n.id === product_id) : {}
    }

    const totalCartsPrice = () => {
        // setIsLoading(true)
        let amount = carts.reduce((acc = {}, item = {}) => {
            const itemTotal = parseFloat((item.quantity * getProductDetails(item.product_id)?.price || 0).toFixed(2));
            acc.total = parseFloat((acc.total + itemTotal))
            return acc;
        },  { total: 0 })

        setTotalAmount(amount.total)
        setIsLoading(false)
    }

    const handleRemoveCartItem = (id, e) => {
        e.preventDefault();

        let items = carts.filter(n => n.product_id !== id)
        dispatch(addCart(items))
        setCarts(items)
        totalCartsPrice()
    }
    

    const handleCartQuantity = (id, e) => {
        e.preventDefault();
        let checkCart = carts.find(n => n.product_id === id)
        let product = products.find(n => n.id === id)
        let items = []

        if(checkCart) {
            if(product.quantity > checkCart.quantity) {
                items = carts.map(obj =>
                    obj.product_id === id ? { ...obj, quantity: obj.quantity + 1 } : obj
                );
                dispatch(addCart(items))
                setCarts(items)
            }
        }
        
    }

    const handleReduceCartQuantity = (id, e) => {
        e.preventDefault();
        let checkCart = carts.find(n => n.product_id === id)
        let items = []

        if(checkCart) {
            if(checkCart.quantity > 1) {
                items = carts.map(obj =>
                    obj.product_id === id ? { ...obj, quantity: obj.quantity - 1 } : obj
                );
                dispatch(addCart(items))
                setCarts(items)
            }
        }
    }

    const handleAddCart = (product_id, e, setAlert, setMessage) => {
        e.preventDefault();
        let checkCart = carts.find(n => n.product_id === product_id) 

        if(!isEmpty(checkCart)) {
            let items = carts.map(obj =>
                obj.product_id === product_id ? { ...obj, quantity: obj.quantity + 1 } : obj
            );
            setCarts(items)
            dispatch(addCart(items))
            setMessage('Cart Added')
            setAlert(true)
        }
        else{
            let items = [...carts, {
                product_id: product_id, 
                quantity: 1
            }]
            dispatch(addCart(items))
            setCarts(items)
            setMessage('Cart Added')
            setAlert(true)
        }
    }

    const resetCarts = () => {
        dispatch(addCart([]))
        setCarts([])
    }

    useEffect(() => {
        setIsClient(true)
        if(isClient){
            setCarts(getAllCarts)
            totalCartsPrice()
        }
    }, [isClient, carts])

    return {
        isClient, setIsClient, totalAmount, shippingCost, getAllCarts,
        products, carts, getProductDetails, setCarts, handleCartQuantity, isLoading,
        handleReduceCartQuantity, handleRemoveCartItem, resetCarts, handleAddCart,
    }
}