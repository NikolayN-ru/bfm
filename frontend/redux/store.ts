import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { productApi } from "./productApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware,
    ),
});
