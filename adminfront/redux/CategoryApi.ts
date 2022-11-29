import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Categorys'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/category' }),
    endpoints: (build) => ({
        getCategoryAll: build.query({
            // query: (limit = '') => `all?${limit && `_limit=${limit}`}`,
            query: () => 'all',
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ _id }: any) => ({ type: 'Categorys' as const, _id })),
                        { type: 'Categorys', _id: 'LIST' },
                    ]
                    : [{ type: 'Categorys', _id: 'LIST' }],
        }),
    })
})

export const { useGetCategoryAllQuery } = categoryApi;