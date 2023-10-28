"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animationReducer from "./features/animation-slice";
import modeReducer from "./features/mode-slice";

const rootReducer = combineReducers({
  animation: animationReducer,
  mode: modeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
