import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu"],
        }}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
