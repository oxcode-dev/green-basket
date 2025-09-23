import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    // authenticated: boolean;
    user?: User | null;
  }
  
// Initial state
const initialState: AuthState = {
    // authenticated: false,
    user: null,
};
export const AuthUserSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        fetchUser: (state, action) => {
            state.user = action.payload
        },
    }
})

export const { fetchUser } = AuthUserSlice.actions
export const getUser = (state: User) => state.user

export default AuthUserSlice.reducer