import React, { useState } from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid, Cell } from "recharts";

const colors = ["#e3ba22", "#e6842a", "#137b80", "#8e6c8a"];

const xAxisLabel = {
  value: "Word",
  position: "insideBottom",
  offset: 0,
  padding: 10,
};

const BarGraphView = (props) => {
  const sortedData = props.data.sort((a, b) => (a.value > b.value ? -1 : 1));
  let data = sortedData;
  // TODO: add threshold
  if (data.length > 50) data = sortedData.filter((entry) => entry.value > 1);
  if (props.limit) data = data.slice(0, props.limit);

  const [viewData, setViewData] = useState(false);
  const handleClick = (e) => {
    setViewData(!viewData);
  };
  return (
    <>
      <div>
        <button class="button" onClick={handleClick}>
          {viewData ? "Hide Raw Data" : "View Raw Data"}
        </button>
      </div>
      <ResponsiveContainer width="95%" minWidth={100} height={400} maxHeight={500}>
        <BarChart id="graph-view" data={data}>
          <CartesianGrid opacity={0.6} vertical={false} />
          <XAxis dataKey="key" label={xAxisLabel} angle={45} textAnchor="start" height={60} />
          <YAxis interval={0} />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={"cell-${index}"} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {viewData && (
        <div id="data-view">
          <h4>Raw Data</h4>
          <dl>
            {sortedData.map((entry) => {
              return (
                <dd>
                  {entry.key}: {entry.value}
                </dd>
              );
            })}
          </dl>
        </div>
      )}
    </>
  );
};

export default BarGraphView;
