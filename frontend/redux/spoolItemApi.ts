import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const spoolApiItem = createApi({
  reducerPath: "spoolApiItem",
  tagTypes: ["spoolApiItem"],
  baseQuery: fetchBaseQuery({ baseUrl: `${back_api}/api/spool` }),
  endpoints: (build) => ({
    getSpoolApiAllItem: build.query({
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
    getSpoolApiItem: build.query({
      query: (id = "") => `/${id}`,
    }),
  }),
});

export const { useGetSpoolApiAllItemQuery, useGetSpoolApiItemQuery } =
  spoolApiItem;
