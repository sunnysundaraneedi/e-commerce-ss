import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
