import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orderApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/order" }),
  endpoints: (build) => ({
    getOrderAll: build.query({
      // query: (limit = '') => `all?${limit && `_limit=${limit}`}`,
      query: () => `all`,
      providesTags: (result: any) =>
        result
          ? [
              ...result.map(({ _id }: any) => ({
                type: "Orders" as const,
                _id,
              })),
              { type: "Orders", id: "LIST" },
            ]
          : [{ type: "Orders", id: "LIST" }],
    }),
    getOrder: build.query({
      query: (id) => `${id}`,
      providesTags: (result: any, error, id) => [
        { type: "Orders", id: "LIST" },
      ],
    }),
    shangeOrder: build.mutation({
      query: (body) => ({
        url: '',
        method: "PUT",
        body,
      }),
      invalidatesTags: (id) => [{ type: "Orders", id: "LIST"}],
    }),
  }),
})

export const { useGetOrderAllQuery, useGetOrderQuery, useShangeOrderMutation } =
  orderApi
