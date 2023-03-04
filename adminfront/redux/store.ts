import { MovieModel } from "./../../back/src/movie/movie.model"
import { configureStore } from "@reduxjs/toolkit"
import { categoryApi } from "./CategoryApi"
import { tagsApi } from "./tagsApi"
import { productsApi } from "./ProductsApi"
import { productApi } from "./ProductApi"
import { orderApi } from "./OrderApi"
import { waresApi } from "./waresApi"
import { category2Api } from "./Category2Api"
import { waresCategory } from "./WaresCategory"
import { loginApi } from "./LoginApi"
import { needlesApi } from "./NeedlesApi"
import TokenApi from "./TokenApi"

export const store: any = configureStore({
  reducer: {
    [tagsApi.reducerPath]: tagsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [category2Api.reducerPath]: category2Api.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [waresApi.reducerPath]: waresApi.reducer,
    [waresCategory.reducerPath]: waresCategory.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [needlesApi.reducerPath]: needlesApi.reducer,
    token: TokenApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagsApi.middleware,
      categoryApi.middleware,
      category2Api.middleware,
      productsApi.middleware,
      productApi.middleware,
      orderApi.middleware,
      waresApi.middleware,
      waresCategory.middleware,
      loginApi.middleware,
      needlesApi.middleware
    ),
})
