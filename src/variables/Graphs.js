import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchartmultiset } from "@rawgraphs/rawgraphs-charts";
import { piechart } from "@rawgraphs/rawgraphs-charts";

const Graphs = () => {
  const [jsonData, setJsonData] = useState(null);

  const inputdata = `{"version":"1.2","userInputFormat":"json","dataSource":{"type":"url","url":"http://dev.etldata.traversetec.co/test.php","jsonPath":"data"},"rawData":[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"month":"string","Income":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"expense":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]}},"chart":"rawgraphs.barchartmultiset","mapping":{"groups":{"ids":["1"],"value":["month"],"isValid":true,"mappedType":"number"},"bars":{"ids":["4","5"],"value":["Income","expense"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum","sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":true,"legendWidth":200,"setsPadding":4,"barsPadding":1,"SortXAxisBy":"Name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"valueDescending","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":true,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"Income"},{"range":"#ff7f0e","domain":"expense"}],"defaultColor":"#cccccc"}},"customChart":null}`;

  useEffect(() => {
    const data = JSON.parse(inputdata);

    console.log("data", data);

    const transformedData = data.rawData.map((elem) => {
      return { month: elem[0], Income: elem[1], expense: elem[2] };
    });

    let chartVariables;
if (data.chart === "rawgraphs.barchartmultiset") {
  chartVariables = {
    chart: barchartmultiset,
    mapping: {
      groups: { value: "month" },
      bars: {
        value: ["Income", "expense"],
        config: { aggregation: ["sum", "sum"] },
      },
    },
  };
} else if (data.chart === "rawgraphs.piechart") {
  chartVariables = {
    chart: piechart,
    mapping: {
      angle: { value: "percentage" },
      color: { value: "category" },
    },
  };
} else {
  console.log("Selectedchart");


}
const mapping = {
    groups: { value: "month" },
    bars: {
      value: ["Income", "expense"],
      config: { aggregation: ["sum", "sum"] },
    },
  };

  const viz = chart(barchartmultiset, { data: transformedData, mapping });

  viz.renderToDOM(document.getElementById("myChart"));
}, [data]);

useEffect(() => {}, []);

return <div id="myChart" > </div>;
};

export default Graphs;


