import React, { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  // Chart options and series state
  const [chartOptions] = useState({
    series: [44, 55, 41], // Values for the donut chart
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom", // You can adjust the position
      },
      labels: ["Category A", "Category B", "Category C"], // Labels for the data
    },
  });

  return (
    <div id="chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        width="200"
      />
    </div>
  );
};

export default DonutChart;
