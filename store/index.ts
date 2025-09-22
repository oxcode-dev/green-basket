import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice'; // Example slice

export const makeStore = () => {
    return configureStore({
        devTools: process.env.NODE_ENV !== 'production',
        reducer: {
        //   counter: counterReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];