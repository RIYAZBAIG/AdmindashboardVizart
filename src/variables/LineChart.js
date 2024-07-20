import React, { useState, useEffect } from "react";
import { chart } from "@rawgraphs/rawgraphs-core";
import { linechart } from "@rawgraphs/rawgraphs-charts";

const LineChart = () => {
  const [jsonData, setJsonData] = useState(null);

  const inputdata = `{"version":"1.2","userInputFormat":"json","dataSource":{"type":"url","url":"http://dev.etldata.traversetec.co/test.php","jsonPath":"data"},"rawData":[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"month":"string","Income":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"expense":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]}},"chart":"rawgraphs.linechart","mapping":{"groups":{"ids":["1"],"value":["month"],"isValid":true,"mappedType":"number"},"lines":{"ids":["2","3"],"value":["Income","expense"],"isValid":true,"mappedType":"number"},"color":{"value":"Income","isValid":true,"mappedType":"number"}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":true,"legendWidth":200,"interpolation":"linear","curve":"curveLinear","showPoints":false,"pointSize":4,"showLines":true,"lineWidth":2,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"Income"},{"range":"#ff7f0e","domain":"expense"}],"defaultColor":"#cccccc"}},"customChart":null}`;

  useEffect(() => {
    const data = JSON.parse(inputdata);
  
    console.log("data", data);
  
    const transformedData = data.rawData.map((elem) => {
      const month = elem[0];
      const income = elem[1];
      const expense = elem[2];
    
      // convert "month" to a date type
      const date = new Date(month + " 1, 2000"); // add a day and year for formatting purposes
    
      return { date, Income: income, expense: expense };
    });
    
  
    const mapping = {
      x: { value: "date" },
      y: { value: ["Income", "expense"], config: { aggregation: "sum" } },
      lines: { value: "Income" },
    };
    
  
    const viz = chart(linechart, { data: transformedData, mapping });
  
    // viz.renderToDOM(document.getElementById("myChart"));
  }, [inputdata]);
  

 useEffect(() => {}, []);


  

  return <div id="myChart"></div>;
};

export default LineChart;

