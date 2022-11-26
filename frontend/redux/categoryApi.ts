import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/api/yarn/category" }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "all",
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
