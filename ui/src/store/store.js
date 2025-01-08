// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

// Create and export the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
