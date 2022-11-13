import { configureStore } from "@reduxjs/toolkit";
import { tagsApi } from "./tagsApi";

export const store = configureStore({
    reducer: {
        [tagsApi.reducerPath]: tagsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tagsApi.middleware)
})