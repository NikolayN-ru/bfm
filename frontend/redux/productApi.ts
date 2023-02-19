import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/yarn/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: (name = "") => `variables/${name}`,
      // providesTags: (result: any) =>
      //     result
      //         ? [
      //             ...result.map(({ _id }: any) => ({ type: 'Products' as const, _id })),
      //             { type: 'Products', _id: 'LIST' },
      //         ]
      //         : [{ type: 'Products', _id: 'LIST' }],
    }),
    getProducts: build.query({
      query: () => "product",
    }),
    getProductMain: build.query({
      query: (name = "") => `product/${name}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery, useGetProductMainQuery } = productApi;
