import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TotalExpensesCard = () => {
  const { totalExpenses } = useSelector((state) => state.transactions);
  return (
    <div className="h-42 bg-gray-100 shadow-sm mx-8 my-2 border-2 border-gray-200 rounded-md md:max-w-lg ">
      <div className="p-2">
        <p className="text-grey-400 mb-2">Monthly expenses</p>
        <h1 className="font-bold text-2xl mb-2 text-slate-700">
          GHC {totalExpenses}
        </h1>
        <Divider />
        <p className="text-grey-400 mt-2 mb-2">
          <span className="text-red-500 font-bold">5%</span> decrement compared
          to last week
        </p>
      </div>
    </div>
  );
};

export default TotalExpensesCard;
