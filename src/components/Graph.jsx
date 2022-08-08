import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import not_found from "../assets/not_found.svg";
import Chart from "chart.js/auto";
import { getDocs, collection } from "firebase/firestore";
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
  fetchTransactionsAsync,
  getTransaction,
} from "../features/transactionsSlice";
const Graph = () => {
  const { transactions } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getDocs(collection(db, "transactions"));
        const allTransactions = data?.docs.map((doc) =>
          dispatch(getTransaction({ id: doc.id, ...doc.data() }))
        );
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getDocs(collection(db, "transactions"));
  //     const allTransactions = data?.docs.map((doc) =>

  //       dispatch(getTransaction({ id: doc.id, ...doc.data() }))
  //     );

  //     console.log("allTransactions", allTransactions);
  //     console.log("allTransactions type", typeof allTransactions);
  //   };
  //   fetchData();
  // }, [dispatch]);

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
            {true ? (
              transactions.allTransactions?.map(
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
