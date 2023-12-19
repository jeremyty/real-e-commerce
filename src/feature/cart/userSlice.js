import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://winsmash-api.jeremytty.repl.co";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return response.json();
  }
);

export const insertUser = createAsyncThunk(
  "user/insertUser",
  async ({ firebase_uid, email, password }) => {
    const response = await axios.post(`${BASE_URL}/users`, {
      firebase_uid,
      email,
      password,
    });
    return response.data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(insertUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
