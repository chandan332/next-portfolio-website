"use client";
import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    dark: true,
  },
  reducers: {
    changeDark(state, action) {
      state.dark = action.payload.dark;
    },
  },
});

export const { changeDark } = modeSlice.actions;
export default modeSlice.reducer;
