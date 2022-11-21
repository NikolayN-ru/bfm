import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/' }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'all',
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ _id }: any) => ({ type: 'Products' as const, _id })),
                        { type: 'Products', _id: 'LIST' },
                    ]
                    : [{ type: 'Products', _id: 'LIST' }],
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'new',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Products', _id: 'LIST' }]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Products', _id: 'LIST' }]
        })
    })
})

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;
