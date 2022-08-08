import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

export const fetchTransactionsAsync = createAsyncThunk(
  "fetchTransactions",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      querySnapshot.forEach((snapshot) => {
        snapshot.doc((doc) => doc.data());
      });
    } catch (error) {
      return error.message;
    }
  }
);

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
      state.allTransactions.push(action.payload);
    },
    deleteTransaction() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allTransactions = action.payload;
      })
      .addCase(fetchTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { getTransaction, addTransaction, deleteTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
