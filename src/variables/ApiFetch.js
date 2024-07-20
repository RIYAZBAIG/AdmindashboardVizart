import { rawgraphschart } from "@rawgraphs/rawgraphs-charts";
import React, { useState, useRef } from "react";
import { chart } from "@rawgraphs/rawgraphs-core";
import { element } from "prop-types";
// import { chart } from '@rawgraphs/rawgraphs-core';
// import { ReactDOM } from "react";
import ReactDOM from "react-dom";
import myChart from "./ApiFetch1"

const ApiFetch = ({  }) => {
  const [ChartConfig, setChartConfig] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  console.log("riyaz");
  const inputdata =
    '{"version":"1.2","userInputFormat":"json","dataSource":{"type":"url","url":"http://dev.etldata.traversetec.co/test.php","jsonPath":"data"},"rawData":[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"month":"string","Income":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"expense":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]}},"chart":"rawgraphs.barchartmultiset","mapping":{"groups":{"ids":["1"],"value":["month"],"isValid":true,"mappedType":"number"},"bars":{"ids":["4","5"],"value":["Income","expense"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum","sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":true,"legendWidth":200,"setsPadding":4,"barsPadding":1,"SortXAxisBy":"Name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"valueDescending","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":true,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"Income"},{"range":"#ff7f0e","domain":"expense"}],"defaultColor":"#cccccc"}},"customChart":null}';
  const data = JSON.parse(inputdata);
  console.log("RIYAZ", data);

  // const data = JSON.parse(data1);
  console.log("baig44");

  console.log(data.rawData);
  //  [['Jan', 20000, 100000], ['Feb', 45000, 20010], ['Mar', 100000, 60000], ['Apr', 75000, 30000], ['May', 90000, 45000], ['Jun', 70000, 60000], ['Jul', 80000, 55000], ['Aug', 80000, 88000], ['Sep', 65000, 40000], ['Oct', 45000, 30000], ['Nov', 50000, 45000], ['Dec', 85000, 70000]]

  // '{"[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]]'
  //  const rawData3=JSON.parse(rawData2)
  console.log("baig2");
  const chartConfig = {
    data: data,
    createdBy: "system admin",
    createdAt: "04/14/2023 22:22",
  };
  console.log(1);
  console.log(chartConfig);
  const rawData = chartConfig.data.rawData;

  console.log(2);
  console.log(rawData);
  const mapping = chartConfig.data.mapping;
  console.log(3);
  const selectChart = chartConfig.data.chart;

  const viz = chart(selectChart, {
    data: rawData,
    mapping,
  });

  //   const targetNode = document.getElementById('some-div')
  // viz.renderToDOM(targetNode)

  // const root = document.getElementById("myChart");
  console.log(4);
  // console.log(viz);

  // viz.renderToDOM(root)

  // console.log("zufa",root);

  // rawgraphs.selectChart(curruntchart)

  // rawgraphschart.render({
  //    data: chartConfig.rawData,
  //   container: '#chart-container'
  //   });
  // viz.ReactDOM(
    // viz, document.getElementById("myChart")
  // )
  const domRef = useRef();
  // viz.renderToDOM();
  

  return (
    <div ref={domRef}>
      <myChart/>
      {/* {viz}
      <h2>Chart {123}</h2>
      <div id="chart-container"></div> */}
    </div>
  );
};
export default ApiFetch;
