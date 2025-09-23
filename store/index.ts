import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

// import counterReducer from './features/counter/counterSlice'; // Example slice


const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    //@ts-ignore
    middleware: () => [thunk],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore non-serializable actions from redux-persist
    //         },
    //     }).concat(thunk),
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;