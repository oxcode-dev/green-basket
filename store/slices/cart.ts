import { createSlice } from "@reduxjs/toolkit";

type CartProp = {
    product_id: string;
    quantity: number;
}
export interface CartState {
    cart?: CartProp[] | [];
}
  
// Initial state
const initialState: CartState = {
    cart: [],
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addCart: (state, action) => {
            state.cart = action.payload
        },
    }
})

export const { addCart } = CartSlice.actions
export const getCarts = (state: CartProp[]) => state?.cart || [];

export default CartSlice.reducer