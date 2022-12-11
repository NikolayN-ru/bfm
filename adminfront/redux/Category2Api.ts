import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const category2Api: any = createApi({
  reducerPath: "category2",
  tagTypes: ["category2"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/yarn/category/",
  }),
  endpoints: (build) => ({
    getCategory2: build.query({
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
    addCategory: build.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "category2" }],
    }),
    addDescCategory: build.mutation({
      query: (body) => ({
        url: "",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "category2", _id: "LIST" }],
      // invalidatesTags: (_id)=>[{ type: 'Tags', _id: 'LIST' }]
    }),
    deleteCategory: build.mutation({
      query: (body) => ({
        url: `${body}`,
        method: "DELETE",
        // body
      }),
      invalidatesTags: [{ type: "category2", _id: "LIST" }],
    }),
  }),
})

export const {
  useGetCategory2Query,
  useAddCategoryMutation,
  useAddDescCategoryMutation,
  useDeleteCategoryMutation,
} = category2Api
