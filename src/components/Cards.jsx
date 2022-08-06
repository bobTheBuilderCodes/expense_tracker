import { Divider } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <div className="h-42 bg-gray-100 shadow-sm mx-8 my-2 border-2 border-gray-200 rounded-md md:max-w-lg ">
      <div className="p-2">
        <p className="text-grey-400 mb-2">Total income</p>
        <h1 className="font-bold text-2xl mb-2 text-slate-700">GHC 234322</h1>
        <Divider />
        <p className="text-grey-400 mt-2 mb-2">
          <span className="text-green-500 font-bold">35%</span> increment
          compared to last week
        </p>
      </div>
      {/* <div>Card footer</div> */}
    </div>
  );
};

export default Card;
