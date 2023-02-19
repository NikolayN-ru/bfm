import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const blogApi = createApi({
  reducerPath: "blogApi",
  tagTypes: ["Blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${back_api}/api/blog`,
  }),
  endpoints: (build) => ({
    getBlog: build.query({
      query: () => "",
    }),
    getBlogItem: build.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetBlogQuery, useGetBlogItemQuery } = blogApi;
