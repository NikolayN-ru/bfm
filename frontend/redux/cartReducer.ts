import { createSlice } from "@reduxjs/toolkit";

const state: any = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: state,
  },
  reducers: {
    addItem: (state, { payload }) => {
      let added = false;
      state.cart.forEach((element: any) => {
        if (
          element.title === payload.title &&
          element.color === payload.color
        ) {
          element.count += payload.count;
          added = true;
        }
      });
      if (!added) {
        state.cart.push({
          title: payload.title,
          image: payload.image,
          color: payload.color,
          count: payload.count,
          price: payload.price,
        });
      }
    },
    removeItem: (state, { payload }) => {
      // console.log(payload, "payload");
      //   state.cart = state.cart.filter((item: any) => (item.title !== payload.title && item.color !== payload.color));
      state.cart = state.cart.filter((item: any) => {
        // console.log(item.title, payload.title, "!!!!!!");
        if (item.title === payload.title) {
        //   console.log("TYT title");
          if (item.color === payload.color) {
            // console.log("TYT color");
            return false;
          }
        }
        return true;
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
