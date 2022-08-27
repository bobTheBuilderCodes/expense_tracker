import React, { useState } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const initialState = {
  allTransactions: [],
  isLoading: false,
  error: null,
  totalIncome: null,
  totalExpenses: null,
  amountSaved: 0,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getInitialIncome(state, action) {
      state.totalIncome = action.payload;
    },
    getInitialExpenses(state, action) {
      state.totalExpenses = action.payload;
    },
    getTransaction(state, action) {
      state.allTransactions.push(action.payload);
    },
    addTransaction(state, action) {
      if (action.payload.transactionType === "withdrawal") {
        state.totalExpenses = state.totalIncome + 10;
        // return state.totalExpenses;
        console.log(typeof state.totalIncome, "Income Type");
        console.log(state.totalIncome, "Income");
      } else {
        console.log("Doesnt work");
        console.log("Doesnt", action.payload.transactionType);
      }
      state.allTransactions.push(action.payload);
    },
    deleteTransaction() {},
  },
});

export const {
  getInitialIncome,
  getInitialExpenses,
  getTransaction,
  addTransaction,
  deleteTransaction,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
