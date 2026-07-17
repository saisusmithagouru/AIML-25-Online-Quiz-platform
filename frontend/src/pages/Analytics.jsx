import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {

  const data = {
    labels: ["Java", "Python", "DBMS", "AI/ML"],
    datasets: [
      {
        label: "Average Score",
        data: [85, 72, 90, 80],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#9C27B0",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average Quiz Scores",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <h1 style={{ textAlign: "center" }}>
        📊 Quiz Analytics Dashboard
      </h1>

      <Bar data={data} options={options} />
    </div>
  );
}

export default Analytics;