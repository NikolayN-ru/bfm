import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const loginApi = createApi({
  reducerPath: "loginApi", // определяем текущий сервис
  tagTypes: ["LoginApi"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/auth/token" }),
  endpoints: (build) => ({
    loginQuery: build.query({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      // invalidatesTags: (_id) => [{ type: "LoginApi", _id: "LIST" }],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers: {
          Authorization: "Token 2659c33c1dd430d809408da8b09da2c1d4f2bc59",
        },
      }),
    }),
    // getOrder: build.query({
    //   query: (id) => `${id}`,
    //   providesTags: (result: any, error, _id) => [
    //     { type: "Orders", _id: "LIST" },
    //   ],
    // }),
  }),
})

export const { useLoginQueryQuery, useLogoutMutation } = loginApi
