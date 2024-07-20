import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchart } from "@rawgraphs/rawgraphs-charts";

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow"
    )
      .then((response) => response.json())
      .then((json) => {
        const chartData = json.items.map((item) => ({
          name: item.name,
          count: item.count
        }));
        setData(chartData);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  };

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (data.length > 0 && containerRef.current) {
      const myChart = chart(containerRef.current, barchart, {
        data,
        encoding: {
          x: { field: "name", type: "ordinal" },
          y: { field: "count", type: "quantitative" }
        },
        config: {
          width: "100%",
          height: 400,
          margin: { top: 10, right: 30, bottom: 30, left: 30 }
        }
      });
    //   myChart.render();
    }
  }, [data]);

  return <div ref={containerRef} />;
};
console.log("baig258");
debugger
export default BarChart;
