import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { back_api } from "../variables";

export const waresCategoryAPi = createApi({
  reducerPath: "waresCategoryApi",
  tagTypes: ["WaresCategory"],
  baseQuery: fetchBaseQuery({ baseUrl: `${back_api}/api/wares/` }),
  endpoints: (build) => ({
    getWaresAll: build.query({
      query: () => "",
    //   providesTags: (result: any, error, id) => [{ type: "WaresCategory", id: "LIST" }],
    }),
  }),
});

export const { useGetWaresAllQuery } = waresCategoryAPi;
