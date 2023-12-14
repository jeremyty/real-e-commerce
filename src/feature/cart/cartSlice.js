import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,},
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(addProduct, (state, action) => {
        const itemIndex = state.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state[itemIndex].amount += 1;
        } else {
          const newProduct = { ...action.payload, amount: 1 };
          state.push(newProduct);
        }
      });
    },
  });

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;