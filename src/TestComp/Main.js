import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";
import { Charts } from "@rawgraphs/rawgraphs-charts";

const chartData = [
  {
    name: "Lazio",
    "2018-2020": 59,
    "2019-2020": 78,
    Difference: 19,
    Status: "Better",
    Championship: "Seria A",
  },
  {
    name: "Burnley",
    "2018-2020": 40,
    "2019-2020": 54,
    Difference: 14,
    Status: "Better",
    Championship: "Premier League",
  },
  {
    name: "Inter",
    "2018-2020": 69,
    "2019-2020": 82,
    Difference: 13,
    Status: "Better",
    Championship: "Seria A",
  },
  {
    name: "Southampton",
    "2018-2020": 39,
    "2019-2020": 52,
    Difference: 13,
    Status: "Better",
    Championship: "Premier League",
  },
  // Add more data objects here as per your JavaScript object
];

const Barchart = () => {
  return (
    <div>
      <div>
      <button type="button" class="btn btn-success">Login Here..</button>
      <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
        <h1>Chart Title Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="2018-2020" stroke="#ffc658" />
            <Line dataKey="2019-2020" stroke="#82ca9d" />
            <Line dataKey="Difference" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="BarChart">
        <h1>Chart Title Bar Chart</h1>

        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={chartData}
            margin={{ top: -110, right: 30, left: 0, bottom: -0 }}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="2018-2020" fill="#ffc658" />
            <Bar dataKey="2019-2020" fill="#82ca9d" />
            <Bar dataKey="Difference" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
