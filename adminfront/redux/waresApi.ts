import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const waresApi = createApi({
  reducerPath: "waresApi",
  tagTypes: ["Wares", "CategoryProduct"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/product/" }),
  endpoints: (build) => ({
    //product
    getWaresAll: build.query({
      query: () => "all",
      providesTags: (result: any, error, id) => [{ type: "Wares", id: "LIST" }],
    }),
    getWares: build.query({
      query: (id) => `${id}`,
      providesTags: (result: any, error, id) => [
        { type: "Wares", _id: "LIST" },
      ],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Wares", _id: "LIST" }],
    }),
    changeProduct: build.mutation({
      query: (body) => ({
        url: "",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: [{ type: "Wares", _id: "LIST" }],
    }),
    // category-product
    getCategoryProductAll: build.query({
      query: () => "category/all",
      providesTags: (result: any, error, id) => [
        { type: "CategoryProduct", id: "LIST" },
      ],
    }),
  }),
})

export const {
  useGetWaresQuery,
  useGetWaresAllQuery,
  useGetCategoryProductAllQuery,
  useAddProductMutation,
  useChangeProductMutation,
} = waresApi
