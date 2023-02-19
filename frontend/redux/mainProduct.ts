import { createSlice } from "@reduxjs/toolkit";

const state: any = {};

const mainProduct = createSlice({
  name: "cart",
  initialState: {
    productMain: state,
  },
  reducers: {
    shangeMainProduct: (state, { payload }) => {
      state.productMain = {
        ...payload
      };
    },
  },
});

export const { shangeMainProduct } = mainProduct.actions;
export default mainProduct.reducer;
