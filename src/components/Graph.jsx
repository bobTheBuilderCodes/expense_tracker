import React from "react";
import { Line, Scatter } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// import BarChart  from "./BarChart";

const Graph = () => {
  function createData(transactions, amount, time) {
    return { transactions, amount, time };
  }

  const rows = [
    createData("Deposit", "GHC 159", "3m ago"),
    createData("Deposit", "GHC 15", "7m ago"),
    createData("Withdrawal", "GHC 59", "10m ago"),

    // createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="h-80 flex flex-col justify-between gap-4 w-100 mx-8 my-4 md:grid grid-cols-1 lg:grid-cols-2 ">
      {/* <Button>Select Graph</Button> */}
      <div className="bg-slate-50 flex-1 md:w-100">
        {/* <BarChart /> */}
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                label: "Total Income",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 119, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 119, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 0.5,
                barThickness: 15,
              },
              // Second label
              {
                label: "Total Expenses ",
                data: [45, 19, 34, 51, 76, 65, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(255, 119, 64, 0.7)",
                  "rgba(255, 205, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(153, 102, 255, 0.7)",
                  "rgba(201, 203, 207, 0.7)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 119, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 0.1,
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
      {/* <div className="flex-1"> */}
      <TableContainer component={"div"} style={{ marginTop: 25 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell style={{ padding: "25px 0px" }} align="right">
                Calories
              </TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ transactions, amount, time }) => (
              <TableRow
                key={Math.random()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transactions}
                </TableCell>
                <TableCell style={{ padding: "25px 0px" }} align="right">
                  {amount}
                </TableCell>
                <TableCell style={{ padding: "25px 0px" }} align="center">
                  {time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </div> */}
    </div>
  );
};

export default Graph;
