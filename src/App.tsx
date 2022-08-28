import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MyChart from "./components/Chart";
import UserData from "./Data.json";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
Chart.register(
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);
function App() {
  const [chartType, setchartType] = useState<"line" | "bar" | "pie" | "spline">(
    "line"
  );
  const tension = chartType === "spline" ? 0.4 : null;
  const [userData, setUserData] = useState({
    labels: UserData.data.map((data) => data?.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.data.map((data) => data?.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        tension: tension,
      },
    ],
  });

  useEffect(() => {
    if (chartType === "spline") {
      setUserData({
        labels: UserData.data.map((data) => data?.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.data.map((data) => data?.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      });
    } else {
      setUserData({
        labels: UserData.data.map((data) => data?.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.data.map((data) => data?.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
            tension: null,
          },
        ],
      });
    }
  }, [chartType]);
  return (
    <>
      <Navbar setchartType={setchartType} />

      <div >
        <MyChart chartData={userData} chartType={chartType} />
        <h1 className="text-center font-bold text-2xl">{ chartType + " chart"}</h1>
      </div>
    </>
  );
}

export default App;
