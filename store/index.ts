import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import AuthUserReducer from './slices/auth';
import CartReducer from './slices/cart';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
  user: AuthUserReducer,
  cart: CartReducer,
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  //@ts-ignore
  middleware: () => [thunk],
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;