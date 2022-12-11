import { BASE_URL } from "./../env"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const waresCategory = createApi({
  reducerPath: "waresCategory",
  tagTypes: ["wares-category"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/product/category`,
  }),
  endpoints: (build) => ({
    getWaresCategory: build.query({
      query: () => "all",
      providesTags: (result: any) =>
        result
          ? [
              ...result.map(({ _id }: any) => ({
                type: "category2" as const,
                _id,
              })),
              { type: "category2", _id: "LIST" },
            ]
          : [{ type: "category2", _id: "LIST" }],
    }),
  }),
})

export const { useGetWaresCategoryQuery } = waresCategory
