import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import not_found from "../assets/not_found.svg";
import Chart from "chart.js/auto";
import { getDocs, collection, onSnapshot, doc } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import db from "../firebase/firebase";
import { useEffect } from "react";
import {
  addTransaction,
  fetchTransactions,
  fetchTransactionsAsync,
  getTransaction,
} from "../features/transactionsSlice";

const Graph = () => {
  const { transactions } = useSelector((state) => state);

  console.log("transactions", transactions);
  console.log("transactions.allTransactions", transactions.allTransactions);

  const dispatch = useDispatch();
  const collectionRef = collection(db, "transactions");

  useEffect(() => {
    try {
      onSnapshot(collectionRef, ({ docs }) => {
        docs.map((doc) => {
          dispatch(getTransaction({ id: doc.id, ...doc.data() }));
        });
        console.log("Doc", docs.docs);
      });
    } catch (error) {
      console.log("Error", error);
    }
  }, []);

  return (
    <div className="h-80 flex flex-col justify-between gap-4 w-100 mx-8 my-4 md:grid grid-cols-1 lg:grid-cols-2 xl:h-[-120] ">
      <div className="bg-slate-50 flex-1 md:w-100">
        {/* <BarChart /> */}
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                label: "Total Income",
                data: [65, 59, 80, 81, 56, 55, 40, 44],
                backgroundColor: "#FE8500",
                borderWidth: 2.5,
                barThickness: 15,
              },
              // Second label
              {
                label: "Total Expenses ",
                data: [45, 19, 34, 51, 76, 65, 38, 45],
                backgroundColor: "#016EC1",
                borderWidth: 2.5,
                barThickness: 15,
              },
            ],
          }}
          width={700}
          height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>

      {/* Table of expenses */}

      <TableContainer component={"div"} style={{ marginTop: 25 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>All Transactions</TableCell>
              <TableCell style={{ padding: "25px 0px" }} align="center">
                Amount (GHC)
              </TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.allTransactions ? (
              transactions?.allTransactions.map(
                // [...new Set(transactions?.allTransactions)]?.map(
                ({ transactionType, amount, time }) => (
                  <TableRow
                    key={Math.random()}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {transactionType.charAt(0).toUpperCase() +
                        transactionType.slice(1)}
                    </TableCell>
                    <TableCell style={{ padding: "25px 0px" }} align="center">
                      {amount}
                    </TableCell>
                    <TableCell style={{ padding: "25px 0px" }} align="center">
                      {time}
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <div className="flex justify-end mt-12">
                <img src={not_found} width="250" alt="No data" />
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Graph;
