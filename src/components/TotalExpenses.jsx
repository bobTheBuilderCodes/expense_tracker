import { Divider } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialExpenses } from "../features/transactionsSlice";
import db from "../firebase/firebase";

const TotalExpensesCard = () => {
  const { totalExpenses } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  // Fetch initial data from backend
  useEffect(() => {
    try {
      const getIntialExpense = async () => {
        const data = await getDocs(collection(db, "initialMonies"));
        data?.docs?.map((doc) =>
          dispatch(getInitialExpenses({ id: doc.id, ...doc.data() }))
        );
      };
      getIntialExpense();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <div className="h-42 bg-gray-100 shadow-sm mx-8 my-2 border-2 border-gray-200 rounded-md md:max-w-lg ">
      <div className="p-2">
        <p className="text-grey-400 mb-2">Monthly expenses</p>
        <h1 className="font-bold text-2xl mb-2 text-slate-700">
          GHC {totalExpenses?.totalExpense || 0}
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
