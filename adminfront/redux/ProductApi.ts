import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/' }),
  endpoints: build => ({
    getProduct: build.query({
      query: id => `${id}`,
      // providesTags: (result: any) =>
      // result
      //     ? [
      //         ...result.map(({ _id }: any) => ({ type: 'Product' as const, _id })),
      //         { type: 'Product', _id: 'LIST' },
      //     ]
      //     : [{ type: 'Product', _id: 'LIST' }],
    }),
  }),
})

export const { useGetProductQuery } = productApi;