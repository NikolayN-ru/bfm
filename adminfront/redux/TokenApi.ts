import { createSlice } from "@reduxjs/toolkit"

const state: any = ""

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    addToken: (state, { payload }) => {
      console.log(payload, "payload")
      state.token = payload
    },
    clearToken: (state) => {
      state.token = ""
    },
  },
})

export const { addToken, clearToken } = tokenSlice.actions
export default tokenSlice.reducer
