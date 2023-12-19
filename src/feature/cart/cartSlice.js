import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://winsmash-api.jeremytty.repl.co";

export const fetchCartItem = createAsyncThunk("cart/fetchItem", async () => {
  const response = await axios.get(`${BASE_URL}/cart_item/all`);
  console.log(response.data);
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
    const response = await axios.delete(`${BASE_URL}/cart_item/${itemId}`);
    return response.data;
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
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex >= 0) {
          state.items[itemIndex].amount += 1;
        } else {
          const newProduct = { ...action.payload, amount: 1 };
          state.items.push(newProduct);
        }
      })
      .addCase(fetchCartItem.fulfilled, (state, action) => {
        state.items = action.payload;
        console.log("ran");
        console.log(state.items);
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateNickname.fulfilled, (state, action) => {
        const updatedItem = action.payload.updatedItem; // Assuming your API returns updated item details
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

// Get the currently authenticated user from Firebase
// const currentUser = firebase.auth().currentUser;

// const firebaseAuthUID = currentUser.uid;

// Construct the data to be sent in the POST request

//   firebase_auth_uid: firebaseAuthUID,  Pass the Firebase Auth UID to link with the post

// Perform the POST request to your backend API
