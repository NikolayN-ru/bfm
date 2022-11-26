import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/yarn/category",
  }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "all",
    }),
    getCategoryItem: build.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetCategoryQuery, useGetCategoryItemQuery } = categoryApi;
