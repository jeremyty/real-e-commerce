import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
           const itemIndex = state.findIndex(
            (item) => item.id === action.payload.id
           );

           if (itemIndex >= 0) {
            state[itemIndex].amount += 1;
           } else {
            const newProduct = {...action.payload, amount: 1};
            console.log(newProduct);
            state.push(newProduct);
           }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;