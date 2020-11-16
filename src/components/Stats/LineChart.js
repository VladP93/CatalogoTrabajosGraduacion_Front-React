import React from "react";
import { Chart } from "primereact/chart";

export default function LineChart(props) {
  const { title, chartData } = props;

  const lightOptions = {
    legend: {
      labels: {
        fontColor: "#495057",
      },
    },
  };

  return (
    <div>
      <h2>{title}</h2>
      <Chart
        type="line"
        data={chartData}
        options={lightOptions}
        width="80%"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  );
}
