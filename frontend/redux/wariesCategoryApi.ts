import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waresCategoryAPi = createApi({
  reducerPath: "waresCategoryApi",
  tagTypes: ["WaresCategory"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/product/" }),
  endpoints: (build) => ({
    getWaresAll: build.query({
      query: () => "category/all",
    //   providesTags: (result: any, error, id) => [{ type: "WaresCategory", id: "LIST" }],
    }),
  }),
});

export const { useGetWaresAllQuery } = waresCategoryAPi;
