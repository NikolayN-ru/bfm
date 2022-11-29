import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const category2Api:any = createApi({
    reducerPath: 'category2',
    tagTypes: ['category2'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/category/'}),
    endpoints: (build) => ({
        getCategory2: build.query({
            query: () => 'all',
            providesTags: (result: any) =>
            result
                ? [
                    ...result.map(({ _id }: any) => ({ type: 'category2' as const, _id })),
                    { type: 'category2', _id: 'LIST' },
                ]
                : [{ type: 'category2', _id: 'LIST' }],
        }),
        addCategory: build.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'category2'}]
        }),
    })
})

export const { useGetCategory2Query, useAddCategoryMutation } = category2Api