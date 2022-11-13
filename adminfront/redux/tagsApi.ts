import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tagsApi = createApi({
    reducerPath: 'tagsApi',
    tagTypes: ['Tags'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/yarn/tag/' }),
    endpoints: (build) => ({
        getTags: build.query({
            query: (limit = '') => `all?${limit && `_limit=${limit}`}`,
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ _id }: any) => ({ type: 'Tags' as const, _id })),
                        { type: 'Tags', _id: 'LIST' },
                    ]
                    : [{ type: 'Tags', _id: 'LIST' }],
        }),
        addTag: build.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Tags', _id: 'LIST' }]
        }),
        addDescTag: build.mutation({
            query: (body) => ({
                url: '',
                method: 'PUT',
                body
            }),
            invalidatesTags: [{ type: 'Tags', _id: 'LIST' }]
        }),
        deleteTag: build.mutation({
            query: (id) => ({
                url: `${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Tags', _id: 'LIST' }]
        })
    })
});

export const {
    useGetTagsQuery,
    useAddTagMutation,
    useAddDescTagMutation,
    useDeleteTagMutation
} = tagsApi;