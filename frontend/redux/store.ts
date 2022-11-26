import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { categoryApi } from "./categoryApi";
import { productApi } from "./productApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware,
    ),
});
