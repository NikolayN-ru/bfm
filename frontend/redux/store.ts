import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blogApi";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import { categoryApi } from "./categoryApi";
import mainProduct from "./mainProduct";
import { productApi } from "./productApi";
import { spoolApi } from "./spoolApi";
import { tagYarnApi } from "./tagYarnApi";
import { waresCategoryAPi } from "./wariesCategoryApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [waresCategoryAPi.reducerPath]: waresCategoryAPi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [spoolApi.reducerPath]: spoolApi.reducer,
    [tagYarnApi.reducerPath]: tagYarnApi.reducer,
    cart: cartReducer,
    mainProduct: mainProduct,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
      waresCategoryAPi.middleware,
      blogApi.middleware,
      spoolApi.middleware,
      tagYarnApi.middleware
    ),
});
