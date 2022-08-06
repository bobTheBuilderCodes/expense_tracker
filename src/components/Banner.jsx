import React from "react";

const Banner = () => {
  return (
    <div className="mx-8 my-4 bg-slate-700 shadow-xl rounded-md bg-no-repeat bg-cover  text-slate-50 h-32">
      <h1 className="font-bold px-4 py-2 text-2xl">Quote of the Day</h1>
      <p className="px-4 ">
        Too many people spend money they earned..to buy things they don't
        want..to impress people that they don't like.
      </p>
      <p className="px-4 text-right">Will Rogers</p>
    </div>
  );
};

export default Banner;
