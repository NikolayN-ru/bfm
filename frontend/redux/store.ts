import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blogApi";
import cartReducer from "./cartReducer";
import { categoryApi } from "./categoryApi";
import mainProduct from "./mainProduct";
import { productApi } from "./productApi";
import { waresCategoryAPi } from "./wariesCategoryApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [waresCategoryAPi.reducerPath]: waresCategoryAPi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    cart: cartReducer,
    mainProduct: mainProduct,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
      waresCategoryAPi.middleware,
      blogApi.middleware,
    ),
});
