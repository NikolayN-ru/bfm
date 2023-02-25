// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const spoolApi = createApi({
//     reducerPath: 'categoryApi',
//     tagTypes: ['Categorys'],
//     baseQuery: fetchBaseQuery({ baseUrl: `${back_api}` }),
//     endpoints: (build) => ({
//         getSpoolApiAll: build.query({
//             // query: (limit = '') => `all?${limit && `_limit=${limit}`}`,
//             query: () => '',
//             // providesTags: (result: any) =>
//             //     result
//             //         ? [
//             //             ...result.map(({ _id }: any) => ({ type: 'Categorys' as const, _id })),
//             //             { type: 'Categorys', _id: 'LIST' },
//             //         ]
//             //         : [{ type: 'Categorys', _id: 'LIST' }],
//         }),
//     })
// })

// export const { useGetCategoryAllQuery } = categoryApi