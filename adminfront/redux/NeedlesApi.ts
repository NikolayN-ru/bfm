import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const needlesApi = createApi({
  reducerPath: "needlesApi",
  tagTypes: ["needlesApi"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/needles/" }),
  endpoints: (build) => ({
    getNeedles: build.query({
      query: (body) => ({
        url: "",
        method: "GET",
        headers: {
          Authorization: `Token ${body}`,
        },
      }),
    }),
    getNeedle: build.query({
      query: (id) => `${id}`,
    }),
    changeVariablesNeedle: build.mutation({
      query: (body) => ({
        url: `/change/${+body.id}`,
        method: "POST",
        body: body.state,
      }),
      invalidatesTags: [{ type: "needlesApi" }],
    }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [{ type: "Products", _id: "LIST" }],
    // }),
  }),
})

export const {
  useGetNeedlesQuery,
  //   useGetNeedlesMutation,
  useGetNeedleQuery,
  useChangeVariablesNeedleMutation,
  //   useGetProductsQuery,
  //   useAddProductMutation,
  //   useDeleteProductMutation,
} = needlesApi
