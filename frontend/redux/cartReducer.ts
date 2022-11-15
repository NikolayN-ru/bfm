import { createSlice } from "@reduxjs/toolkit";

const state: any = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: state,
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action)
            state.cart.push({
                "title": action.payload.title,
                "image": action.payload.image,
                "color": action.payload.color,
                "count": action.payload.count,
                "price": action.payload.price,
            })
        },
        removeItem: (state, { payload }) => {
            console.log(payload)
            state.cart = state.cart.filter((item: any) => item.title !== payload)
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
