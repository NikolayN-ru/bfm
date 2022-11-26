import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/' }),
    endpoints: (build) => ({
        getProduct: build.query({
            query: (id='') => `${id}`,
            // providesTags: (result: any) =>
            //     result
            //         ? [
            //             ...result.map(({ _id }: any) => ({ type: 'Products' as const, _id })),
            //             { type: 'Products', _id: 'LIST' },
            //         ]
            //         : [{ type: 'Products', _id: 'LIST' }],
        }),
        getProducts: build.query({
            query: () => 'all',
        })

    })
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;