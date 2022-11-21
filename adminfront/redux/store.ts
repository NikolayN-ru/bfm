import { MovieModel } from './../../back/src/movie/movie.model';
import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./CategoryApi";
import { tagsApi } from "./tagsApi";
import { productsApi } from './ProductsApi';
import { productApi } from './ProductApi';

export const store = configureStore({
    reducer: {
        [tagsApi.reducerPath]: tagsApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [productApi.reducerPath]: productApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        tagsApi.middleware,
        categoryApi.middleware,
        productsApi.middleware,
        productApi.middleware
    ),
})
