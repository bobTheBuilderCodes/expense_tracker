import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTransactions: [],
  isLoading: false,
  error: null,
  totalIncome: 3000,
  totalExpenses: 2800,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getTransaction(state, action) {
      state.allTransactions.push(action.payload);
    },
    addTransaction(state, action) {
      if (state.allTransactions.transactionType === "withdrawal") {
        console.log("It works");
      } else {
        console.log("Doesnt work");
      }
      state.allTransactions.push(action.payload);
    },
    deleteTransaction() {},
  },
});

export const { getTransaction, addTransaction, deleteTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
