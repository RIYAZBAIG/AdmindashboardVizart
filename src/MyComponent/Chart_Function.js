import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchart, barchartmultiset, linechart , bubblechart, piechart} from "@rawgraphs/rawgraphs-charts";
import { LineChart } from "./DataSet_Linechart";
import { pieChart } from "./Data_Bubble";
import { Data_Bar_1 } from "./Data_Barchart";
// import moment from 'moment';
import { parseDataset } from "@rawgraphs/rawgraphs-core"


export function Barchart(User_Input_bar, Bar_Mapping, Bar_Visulation, dataTypes_Type_Bar) {
  const rows = User_Input_bar.split('\n');
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



 
 const viz = chart(barchart, { data: result, mapping: Bar_Mapping, visualOptions: Bar_Visulation });

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



export function Line_Chart(userInput, mapping, visualOptions, dataTypes_1 ) {
  const rows = userInput.split('\n');
  const columns = rows[0].split(',');

  const result = rows.slice(1, -1).map(row => {
    const rowData = row.split(',');
    const obj = {};
    columns.forEach((value, index) => {
      const currentValue = rowData[index].trim();
      let parsedValue;

      if (currentValue === '' || currentValue === undefined) {
        parsedValue = 0;
      } else if (isDate(currentValue)) {
   const [year, month, day] = currentValue.split('-');
const parsedValue_date = `${year}-${month}-${day}`;
  parsedValue =   parsedValue_date;  //new Date(parsedValue_date);
  console.log(typeof parseValue)


  
  

      } else if (!isNaN(parseFloat(currentValue))) {
        parsedValue = parseFloat(currentValue);
      } else {
        parsedValue = currentValue;
      }

      const key = columns[index];
      obj[key] = parsedValue;
    });
    return obj;
  });

 
  const { dataset, dataTypes, errors } = parseDataset(result)
  console.log(dataTypes, "dataTypes_1" );
  console.log(errors , "error" );
  console.log(dataset , "dataset" );

  const viz = chart(linechart, { data: dataset, dataTypes, mapping, visualOptions });

  

  return viz;
}

function isDate(value) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Assuming the date format is YYYY-MM-DD
  return dateRegex.test(value);
}

export function PieChart(User_Input_pie, Piechart_Mapping, Pie_Visulation, dataTypes_Type_Pie) {
  const rows = User_Input_pie.split('\n');
  const columns = rows[0].split(',');


  const result = rows.slice(1, -1).map(row => {
    const rowData = row.split(',');
    const obj = {};
    columns.forEach((value, index) => {
      const currentValue = rowData[index].trim();
      let parsedValue;

      if (currentValue === '' || currentValue === undefined) {
        parsedValue = 0;
      } else if (isDate(currentValue)) {
   const [year, month, day] = currentValue.split('-');
const parsedValue_date = `${year}-${month}-${day}`;
  parsedValue =   parsedValue_date;  //new Date(parsedValue_date);
  console.log(typeof parseValue)


  
  

      } else if (!isNaN(parseFloat(currentValue))) {
        parsedValue = parseFloat(currentValue);
      } else {
        parsedValue = currentValue;
      }

      const key = columns[index];
      obj[key] = parsedValue;
    });
    return obj;
  });

  const { dataset, dataTypes, errors } = parseDataset(result)

 const viz = chart(piechart, { data: dataset, dataTypes, mapping: Piechart_Mapping, visualOptions: Pie_Visulation });

  console.log(result, "Result of bar");

  return viz;
}


