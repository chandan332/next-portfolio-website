"use client";
import { createSlice } from "@reduxjs/toolkit";

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    isConfetti: false,
  },
  reducers: {
    changeState(state, action) {
      state.isConfetti = action.payload.isConfetti;
    },
  },
});

export const { changeState } = animationSlice.actions;
export default animationSlice.reducer;
