import { Bar, Line, Pie } from "react-chartjs-2";
import Heatmap from "./HeatMap";

function BarChart({ chartData, chartType }: any) {
  return (
    <div className="w-[600px] h-[600px] ml-auto mr-auto">
      {chartType === "bar" && <Bar data={chartData} />}
      {chartType === "line" && <Line data={chartData} />}
      {chartType === "pie" && <Pie data={chartData} />}
      {chartType === "spline" && <Line data={chartData} />}
      {chartType === "heatmap" && <Heatmap/>}
    </div>
  );
}

export default BarChart;
