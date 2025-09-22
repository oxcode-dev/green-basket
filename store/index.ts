import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// import counterReducer from './features/counter/counterSlice'; // Example slice


const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    //@ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    reducer: persistedReducer,
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;