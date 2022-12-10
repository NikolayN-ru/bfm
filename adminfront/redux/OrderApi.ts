import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orderApi = createApi({
  reducerPath: "orderApi", // определяем текущий сервис
  tagTypes: ["Orders", "Order"],
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
              { type: "Orders", _id: "LIST" },
            ]
          : [{ type: "Orders", _id: "LIST" }],
    }),
    getOrder: build.query({
      query: (id) => `${id}`,
      providesTags: (result: any, error, _id) => [
        { type: "Orders", _id: "LIST" },
      ],
    }),
    shangeOrder: build.mutation({
      query: (body) => ({
        url: '',
        method: "PUT",
        body,
      }),
      invalidatesTags: (_id) => [{ type: "Orders", _id: "LIST"}],
    }),
  }),
})

export const { useGetOrderAllQuery, useGetOrderQuery, useShangeOrderMutation } =
  orderApi
