import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchart, barchartmultiset, linechart , bubblechart, piechart} from "@rawgraphs/rawgraphs-charts";
import { LineChart } from "./DataSet_Linechart";
import { pieChart } from "./Data_Bubble";
import { Data_Bar_1 } from "./Data_Barchart";




export function BubbleChart() {




  const delimiters = ['\t', ',', ';', '|'];
  let delimiter = '';

// Detecting the delimiter
for (let i = 0; i < delimiters.length; i++) {
  if (pieChart.userInput.includes(delimiters[i])) {
    delimiter = delimiters[i];
    break;
  }
}

if (!delimiter) {
  throw new Error('No delimiter found in the input data.');
}

    const rows = pieChart.userInput.split('\n');
    const columns = rows[0].split(delimiter);

    // const result = rows.slice(1).map(row => {
    //   const rowData = row.split('\t');
    //   const obj = {};
    //   columns.forEach((key, index) => {
    //     const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index];
    //     obj[key] = value;
    //   });
    //   return obj;
    // });

    const result = rows.slice(1, -1).map(row => {
      const rowData = row.split(delimiter);
      const obj = {};
      columns.forEach((key, index) => {
        if (index >= 3) {
          const parsedValue = parseFloat(rowData[index]);
          obj[key] = isNaN(parsedValue) ? rowData[index] : parsedValue;
        } else {
          obj[key] = rowData[index];
        }
      });
      return obj;
    });

    const mapping = pieChart.mapping;
    const Visulazation_Data = pieChart.visualOptions
    const viz = chart(bubblechart, { data: result, mapping: mapping , visualOptions: Visulazation_Data });

   return viz;

}

export function Line_Chart() {
  const rows = LineChart.userInput.split('\n');
  const columns = rows[0].split(',');

  const result = rows.slice(1, -1).map(row => {
    const rowData = row.split(',');
    const obj = {};
    columns.forEach((value, index) => {
      const currentValue = rowData[index].trim();
      const parsedValue = isDate(currentValue) || isNaN(parseFloat(currentValue)) ? currentValue : parseFloat(currentValue);
      const key = columns[index];
      obj[key] = parsedValue;
    });
    return obj;
  });

  const mapping = LineChart.mapping;
  const Visualization_Data = LineChart.visualOptions;
  const viz = chart(linechart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

  // console.log(result, "Result of Line chart");

  return viz;
}

function isDate(value) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Assuming the date format is YYYY-MM-DD
  return dateRegex.test(value);
}

    
export function Barchart() {
  const rows = Data_Bar_1.userInput.split('\n');
  const columns = rows[0].split(',');

  const result = rows.slice(1).map(row => {
    const rowData = row.split(',');
    const obj = {};
    columns.forEach((value, index) => {
      const currentValue = rowData[index] ? rowData[index].trim() : '';
      const parsedValue = isNaN(parseFloat(currentValue)) ? currentValue : parseFloat(currentValue);
      const key = columns[index];
      obj[key] = parsedValue || 0;
    });
    return obj;
  });

  const mapping = Data_Bar_1.mapping;
   const Visualization_Data = Data_Bar_1.visualOptions;
  // const Visualization_Data = {"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":false,"legendWidth":200,"padding":1,"barsOrientation":"vertical","sortBarsBy":"name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"Total value (descending)","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":false,
  // "colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"default"}],"defaultColor":"#cccccc"}}
 const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

  console.log(result, "Result of bar");

  return viz;
}


function parseValue(value) {
  // Handle numeric values
  if (!isNaN(parseFloat(value))) {
    return parseFloat(value);
  }

  // Handle date values
  if (isDate(value)) {
    return new Date(value);
  }

  // Handle other string values
  return value;
}


