import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${back_api}/api/category`,
  }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "",
    }),
    getCategoryItem: build.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetCategoryQuery, useGetCategoryItemQuery } = categoryApi;
