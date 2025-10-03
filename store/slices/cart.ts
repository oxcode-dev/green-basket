import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },

    reducers: {
        addCart: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { addCart, addUser } = CartSlice.actions
export const getCarts = (state) => state.cart.value

export default CartSlice.reducer