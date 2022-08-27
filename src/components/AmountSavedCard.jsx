import { Divider } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase/firebase";

const AmountSavedCard = () => {
  const { totalIncome, totalExpenses } = useSelector(
    (state) => state.transactions
  );

  const dispatch = useDispatch();
  const amountSaved = +totalIncome?.totalIncome - +totalExpenses?.totalExpense;

  useEffect(() => {
    try {
      const getAmountSaved = async () => {
        const data = await getDocs(collection(db, "initialMonies"));
        data?.docs?.map((doc) => dispatch());
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-42 bg-gray-100 shadow-sm mx-8 my-2 border-2 border-gray-200 rounded-md md:max-w-lg ">
      <div className="p-2">
        <p className="text-grey-400 mb-2">
          {" "}
          {+amountSaved < 0 ? "Owing 😢" : "Amount saved😊"}
        </p>
        <h1
          className={`font-bold text-2xl mb-2 ${
            +amountSaved > 0 ? "text-slate-700" : "text-red-500"
          }`}
        >
          {/* GHC {totalIncome} */}
          GHC 0
        </h1>
        <Divider />
        <p className="text-grey-400 mt-2 mb-2">
          <span className="text-green-500 font-bold">15%</span> increment
          compared to last week
        </p>
      </div>
    </div>
  );
};

export default AmountSavedCard;
