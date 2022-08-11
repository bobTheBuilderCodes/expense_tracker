import React, { useState } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

const fetchInitialMonies = createAsyncThunk(
  "/transactions/fetchInitialMonies",
  async () => {
    const data = await getDocs(collection(db, "allMonies"));
    console.log("Data fetched");
    console.log(data?.docs?.map((doc) => doc.data()));
    return data?.docs?.map((doc) => doc.data());
  }
);

console.log(fetchInitialMonies, "initialMonies");
console.log("This shit really working???");

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialMonies.pending, (state, action) => {
        console.log("Pending");
      })
      .addCase(fetchInitialMonies.fulfilled, (state, action) => {
        console.log("Fulfilled");
      })
      .addCase(fetchInitialMonies.rejected, (state, action) => {
        console.log("Rejected");
      });
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
