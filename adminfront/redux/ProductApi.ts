import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/yarn/" }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: (id) => `${id}`,
      providesTags: (result: any, error, id) => [
        { type: "Product", _id: "LIST" },
      ],
    }),
    changeProduct: build.mutation({
      query: (body) => ({
        url: "new",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: (id) => [{ type: "Product", _id: "LIST" }],
    }),
  }),
})

export const { useGetProductQuery, useChangeProductMutation } = productApi
