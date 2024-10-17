import { configureStore } from "@reduxjs/toolkit";
import search from "./users/slice";


export const store = configureStore({
  reducer: {
    search,
  },
});
