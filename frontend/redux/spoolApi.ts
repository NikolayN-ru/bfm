import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const spoolApi = createApi({
  reducerPath: "spoolApi",
  tagTypes: ["spoolApiCategoryes"],
  baseQuery: fetchBaseQuery({ baseUrl: `${back_api}/api/spoolCategory` }),
  endpoints: (build) => ({
    getSpoolApiAll: build.query({
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

export const { useGetSpoolApiAllQuery } = spoolApi;
