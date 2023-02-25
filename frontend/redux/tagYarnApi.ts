import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const tagYarnApi = createApi({
  reducerPath: "tagYarnApi",
  tagTypes: ["tagYarnApi"],
  baseQuery: fetchBaseQuery({ baseUrl: `${back_api}/api/tag` }),
  endpoints: (build) => ({
    getTagYarnApiAll: build.query({
      // query: (limit = '') => `all?${limit && `_limit=${limit}`}`,
      query: () => "",
      // providesTags: (result: any) =>
      //     result
      //         ? [
      //             ...result.map(({ _id }: any) => ({ type: 'Categorys' as const, _id })),
      //             { type: 'Categorys', _id: 'LIST' },
      //         ]
      //         : [{ type: 'Categorys', _id: 'LIST' }],
    }),
  }),
});

export const { useGetTagYarnApiAllQuery } = tagYarnApi;
