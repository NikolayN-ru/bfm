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
import { spoolApiItem } from "./spoolItemApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [spoolApi.reducerPath]: spoolApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [tagYarnApi.reducerPath]: tagYarnApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [spoolApiItem.reducerPath]: spoolApiItem.reducer,
    [waresCategoryAPi.reducerPath]: waresCategoryAPi.reducer,
    cart: cartReducer,
    filter: filterReducer,
    mainProduct: mainProduct,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      spoolApi.middleware,
      tagYarnApi.middleware,
      productApi.middleware,
      categoryApi.middleware,
      spoolApiItem.middleware,
      waresCategoryAPi.middleware
    ),
});
