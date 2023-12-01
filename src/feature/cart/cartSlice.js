import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            //check if item in cart
           const itemIndex = state.findIndex(
            (item) => item.id === action.payload.id
           );
            //check the index if item exists , increment amount
           if (itemIndex >= 0) {
            state[itemIndex].amount += 1;
           } else {
            // if not exists, add it with amount: 1
            const newProduct = {...action.payload, amount: 1};
            console.log(newProduct);
            state.push(newProduct);
           }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;