import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../features/transactionsSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
  },
});

export default store;
