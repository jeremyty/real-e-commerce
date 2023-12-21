import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://winsmash-api.jeremytty.repl.co";

export const fetchCartItem = createAsyncThunk("cart/fetchItem", async () => {
  const response = await axios.get(`${BASE_URL}/cart_item/all`);
  return response.data;
});

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async ({ name, img, price, productid, amount, nickname }) => {
    const data = {
      name,
      img,
      price,
      productid,
      amount,
      nickname,
    };

    const response = await axios.post(`${BASE_URL}/cart_item`, data);
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (itemId) => {
    await axios.delete(`${BASE_URL}/cart_item/${itemId}`);
    return itemId;
  }
);

export const updateNickname = createAsyncThunk(
  "cart/updateNickname",
  async ({ itemId, newNickname }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/cart_item/${itemId}/nickname`,
        { nickname: newNickname }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

//slice
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items];
      })
      .addCase(fetchCartItem.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const deletedItemId = action.payload;
        state.items = state.items.filter((item) => item.id !== deletedItemId);
      })

      .addCase(updateNickname.fulfilled, (state, action) => {
        const updatedItem = action.payload.updatedItem; //return updated item details
        const index = state.items.findIndex(
          (item) => item.id === updatedItem.id
        );
        if (index !== -1) {
          state.items[index] = updatedItem; // Replace the item with updated details
        }
      });
  },
});

export default cartSlice.reducer;
