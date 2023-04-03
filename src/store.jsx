import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./redux/features/cocktailSlice";

export const store = configureStore({
  reducer: {
    app: cocktailSlice,
  },
});
