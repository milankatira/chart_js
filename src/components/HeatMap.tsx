import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 5 + 5))
  );

const Heatmap = () => {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "sans-serif",
      }}
    >
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Reder cell with tooltip
        cellRender={(x: any, y: any, value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
        )}
        xLabelsStyle={(index: number) => ({
          color: index % 2 ? "transparent" : "#777",
          fontSize: ".65rem",
        })}
        yLabelsStyle={() => ({
          fontSize: ".65rem",
          textTransform: "uppercase",
          color: "#777",
        })}
        cellStyle={(_x: any, _y: any, ratio: number) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: ".7rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight="1.5rem"
        xLabelsPos="bottom"
        onClick={(x: any, y: any) => alert(`Clicked (${x}, ${y})`)}
      />
    </div>
  );
};

export default Heatmap;
