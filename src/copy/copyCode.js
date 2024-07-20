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



// export function Line_Chart() {
//   const delimiters = ['\t', ',', ';', '|'];
//   let delimiter = '';

//   // Detecting the delimiter
//   for (let i = 0; i < delimiters.length; i++) {
//     if (LineChart.userInput.includes(delimiters[i])) {
//       delimiter = delimiters[i];
//       break;
//     }
//   }

//   if (!delimiter) {
//     throw new Error('No delimiter found in the input data.');
//   }

//   const rows = LineChart.userInput.split('\n');
//   const columns = rows[0].split(delimiter);

//   const result = rows.slice(1, -1).map(row => {
//     const rowData = row.split(delimiter);
//     const obj = {};
//     columns.forEach((key, index) => {
//       obj[key] = rowData[index];
//     });
//     return obj;
//   });

//   console.log(result, "Result of Line chart");

//   // Updated code to return the final desired output
//   return result;
// }


// export function Line_Chart() {
//   const rows = LineChart.userInput.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1, -1).map(row => {
//     const rowData = row.split(',');
//     const obj = {};
//     columns.forEach((value, index) => {
//       const parsedValue = parseFloat(rowData[index]);
//       const processedValue = isNaN(parsedValue) ? null : parsedValue; // Assign null if parsedValue is NaN
//       const key = columns[index]; // Assigning the actual key from the columns array
//       obj[key] = processedValue;
//     });
//     return obj;
//   });

//   const mapping = LineChart.mapping;
//   const Visualization_Data = LineChart.visualOptions;
//   const viz = chart(linechart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

//   console.log(result, "Result of Line chart");

//   return viz;
// }

// export function Line_Chart() {
//   const rows = LineChart.userInput.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1, -1).map(row => {
//     const rowData = row.split(',');
//     const obj = {};
//     columns.forEach((value, index) => {
//       let parsedValue;
//       if (value === 'date') {
//         parsedValue = new Date(rowData[index].trim()); // Parse the value as a Date object
//       } else {
//         parsedValue = parseFloat(rowData[index]); // Parse numeric values using parseFloat
//         parsedValue = isNaN(parsedValue) ? null : parsedValue; // Assign null if parsedValue is NaN
//       }
//       const key = columns[index]; // Assigning the actual key from the columns array
//       obj[key] = parsedValue;
//     });
//     return obj;
//   });

//   const mapping = LineChart.mapping;
//   const Visualization_Data = LineChart.visualOptions;
//   const viz = chart(linechart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

//   console.log(result, "Result of Line chart");

//   return viz;
// }











// export function Barchart() {
//   const rows = Data_Bar_1.userInput.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1).map(row => {
//     const rowData = row.split(',');
//     const obj = {};
//     columns.forEach((value, index) => {
//       const currentValue = rowData[index];
//       const parsedValue = isNaN(parseFloat(currentValue)) ? currentValue : parseFloat(currentValue);
//       const key = columns[index];
//       obj[key] = typeof currentValue !== 'undefined' ? currentValue.trim() : currentValue;
//     });
//     return obj;
//   });

//   const mapping = Data_Bar_1.mapping;
//   const Visualization_Data = Data_Bar_1.visualOptions;
//   const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

//   console.log(result, "Result of bar");

//   return viz;
// }



// export function Barchart() {

//   const rows = Data_Bar_1.userInput.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1).map(row => {
//     const rowData = row.split(',');
//     const obj = {};
//     columns.forEach((value, index) => {
//       const currentValue = rowData[index].trim();
//       const parsedValue =  isNaN(parseFloat(currentValue)) ? currentValue : parseFloat(currentValue); //isDate(currentValue) ||
//       const key = columns[index];
//       obj[key] = parsedValue ;
//     });
//     return obj;
//   });

//   const mapping = Data_Bar_1.mapping;
//   // const mapping = {
//   //   "bars": {
//   //     "ids": [
//   //       "3"
//   //     ],
//   //     "value": [
//   //       "status"
//   //     ],
//   //     "isValid": true,
//   //     "mappedType": "string"
//   //   },
//   //   "size": {
//   //     "ids": [
//   //       "2"
//   //     ],
//   //     "value": [
//   //       "work_package_id"
//   //     ],
//   //     "isValid": true,
//   //     "mappedType": "number",
//   //     "config": {
//   //       "aggregation": [
//   //         "sum"
//   //       ]
//   //     }
//   //   }
//   // }
//   const Visualization_Data = Data_Bar_1.visualOptions;
//   const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

//   console.log(result, "Result of bar");

//   return viz;

// }


// export function Barchart() {

//   const rows = Data_Bar_1.userInput.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1).map(row => {
//     const rowData = row.split(',');
//     const obj = {};
//     columns.forEach((value, index) => {
//       const currentValue = rowData[index].trim();
//       const parsedValue =  isNaN(parseFloat(currentValue)) ? currentValue : parseFloat(currentValue); //isDate(currentValue) ||
//       const key = columns[index];
//       obj[key] = parsedValue;
//     });
//     return obj;
//   });

//   const mapping = Data_Bar_1.mapping;
//   // const mapping = {
//   //   "bars": {
//   //     "ids": [
//   //       "3"
//   //     ],
//   //     "value": [
//   //       "status"
//   //     ],
//   //     "isValid": true,
//   //     "mappedType": "string"
//   //   },
//   //   "size": {
//   //     "ids": [
//   //       "2"
//   //     ],
//   //     "value": [
//   //       "work_package_id"
//   //     ],
//   //     "isValid": true,
//   //     "mappedType": "number",
//   //     "config": {
//   //       "aggregation": [
//   //         "sum"
//   //       ]
//   //     }
//   //   }
//   // }
//   const Visualization_Data = Data_Bar_1.visualOptions;
//   const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

//   console.log(result, "Result of bar");

//   return viz;

// }


// import { Data_Bar } from "./Data_Barchart";

// export function Barchart() {
//   const rows = Data_Bar.userInput.split('\n');
//   const columns = rows[0].split(',');

//   // const result = rows.slice(1).map(row => {
//   //   const rowData = row.split(',');

//   //   const obj = {};
//   //   columns.forEach((column, index) => {
//   //     let value = rowData[index].trim();

//   //     // Handle empty values or values with commas

    
     
//   //     if (value === '') {
//   //       value = null;
//   //     } else if (value.startsWith('"') && value.endsWith('"')) {
//   //       value = value.slice(1, -1);
//   //     }
//   //    else if (!isNaN(parseFloat(value))) {
//   //     value = parseFloat(value);
//   //   } else if (isDate(value)) {
//   //     value = new Date(value);
//   //   }

//   //     const key = columns[index];
//   //     obj[key] = value;
//   //   });

//   //   return obj;
//   // });

//   const result = rows.slice(1).map(row => {
//     const rowData = row.split(',');

//     const obj = {};
//     columns.forEach((column, index) => {
//       let value = rowData[index].trim();

//       // Handle empty values or values with quotes
//       if (value === '') {
//         value = null;
//       } else if (value.startsWith('"') && value.endsWith('"')) {
//         value = value.slice(1, -1);
//       }

//       // Parse numeric values
//       if (!isNaN(parseFloat(value))) {
//         value = parseFloat(value);
//       }

//       // Parse date values
//       if (isDate(value)) {
//         value = new Date(value.replace(/\//g, '-')); // Replace slashes with dashes for YYYY/MM/DD format
//       }

//       const key = columns[index];
//       obj[key] = value;
//     });

//     return obj;
//   });
//   const mapping = Data_Bar.mapping;
//   const visualizationOptions = Data_Bar.visualOptions;
//   const viz = chart(barchart, { data: result, mapping, visualOptions: visualizationOptions });

//   console.log(result, "Result of Bar");

//   return viz;
// }





// export function Barchart() {
  

//   const delimiters = ['\t', ',', ';', '|'];
//   let delimiter = '';

// // Detecting the delimiter
// for (let i = 0; i < delimiters.length; i++) {
//   if (Data_Bar.userInput.includes(delimiters[i])) {
//     delimiter = delimiters[i];
//     break;
//   }
// }

// if (!delimiter) {
//   throw new Error('No delimiter found in the input data.');
// }

// const rows = Data_Bar.userInput.split('\n');
// const columns = rows[0].split(delimiter);

// // const result = rows.slice(1).map(row => {
// //   const rowData = row.split(delimiter);
// //   const obj = {};
// //   columns.forEach((key, index) => {
// //     obj[key] = index > 2 ? parseInt(rowData[index]) : rowData[index]; // Convert columns starting from index 3 to numbers
// //   });
// //   return obj;
// // });

// // const result = rows.slice(1).map(row => {
// //   const rowData = row.split(delimiter);
// //   const obj = {};
// //   columns.forEach((key, index) => {
// //     obj[key] = rowData[index]; // Convert columns starting from index 3 to numbers
// //   });
// //   return obj;
// // });

// // const result = rows.slice(1, -1).map(row => {
// //   const rowData = row.split(delimiter);
// //   const obj = {};
// //   columns.forEach((key, index) => {
// //     obj[key] = rowData[index]; // Convert columns starting from index 3 to numbers
// //   });
// //   return obj;
// // });

// const result = rows.slice(1, -1).map(row => {
//   const rowData = row.split(delimiter);
//   const obj = {};
//   columns.forEach((key, index) => {
//     if (index >= 3) {
//       const parsedValue = parseFloat(rowData[index]);
//       obj[key] = isNaN(parsedValue) ? rowData[index] : parsedValue;
//     } else {
//       obj[key] = rowData[index];
//     }
//   });
//   return obj;
// });


// // const result = rows.slice(1, -1).map(row => {
// //   const rowData = row.split(delimiter);
// //   const obj = {};
// //   columns.forEach((key, index) => {
// //     let value = rowData[index]; // Get the value from rowData at the current index

// //     if (value) {
// //       value = value.trim(); // Remove leading/trailing whitespace

// //       // Convert columns starting from index 3 to numbers
// //       if (index > 2) {
// //         const numValue = parseFloat(value.replace(',', ''));
// //         value = isNaN(numValue) ? value : numValue.toLocaleString("full"); // Format large numbers to display without exponential notation
// //       }
// //     }

// //     obj[key] = value;
// //   });
// //   return obj;
// // });



// console.log(result)

// // const result = rows.slice(1).map(row => {
// //   const rowData = row.split(delimiter); // Updated delimiter here
// //   const obj = {};
// //   columns.forEach((key, index) => {
// //     const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index];
// //     obj[key] = value;
// //   });
// //   return obj;
// // });


// const mapping = Data_Bar.mapping;

// console.log(result)

// console.log(mapping, "Mapping")
// const Visulazation_Data = Data_Bar.visualOptions

// const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visulazation_Data });

// return viz;





// }


// export function Barchart() {
//   const rows = Data_Bar.split('\n');
//   const columns = rows[0].split(',');

//   const result = rows.slice(1).map(row => {
//     const rowData = row.split(',');

//     const obj = {};
//     columns.forEach((column, index) => {
//       let value = rowData[index].trim();

//       // Handle empty values or values with quotes
//       if (value === '') {
//         value = null;
//       } else if (value.startsWith('"') && value.endsWith('"')) {
//         value = value.slice(1, -1);
//       }

//       const key = columns[index];
//       obj[key] = parseValue(value);
//     });

//     return obj;
//   });

//   const mapping = Data_Bar.mapping;
//   const visualizationOptions = Data_Bar.visualOptions;
//   const viz = chart(barchart, { data: result, mapping, visualOptions: visualizationOptions });

//   console.log(result, "Result of Bar");

//   return viz;
// }

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


// export function Barchart() {

//    const Data_Bar = {"version":"1.1","userInput":"id,type_id,project_id,subject,description,due_date,category_id,status_id,assigned_to_id,priority_id,version_id,author_id,lock_version,done_ratio,estimated_hours,created_at,updated_at,start_date,responsible_id,budget_id,position,story_points,remaining_hours,derived_estimated_hours,schedule_manually,parent_id,duration,ignore_non_working_days,work_package_id,user_id,status\n8370,7,48,ICRR Scorecard and Values Mismatch Issue,,,,1,80,8,,80,7,0,,2023-02-14 07:52:17.971828,2023-03-23 11:52:08.561636,,80,,,,,,False,1576,,False,8370,80,New\n5076,13,65,GOS | Allow Multiple Guarantee Accounts,\"Other Requests like Pre closure, Cancellation should allow multiple Guarantee accounts in single request\",,,1,145,8,,40,1,0,,2023-01-02 06:22:33.697209,2023-01-02 06:22:33.734323,,85,,1,,,,False,,,False,5076,145,New\n9382,1,89,UTCL Related Task,,,,1,188,8,,188,1,0,,2023-02-27 13:44:04.486350,2023-02-27 13:44:04.541068,,,,1,,,,False,,,False,9382,188,New\n1241,1,3,weekly meeting with Capri,weekly meeting with Capri,,,1,20,8,,20,1,0,,2022-11-01 06:37:28.793325,2022-11-01 06:37:28.854848,,20,,1,,,,False,,,False,1241,20,New\n1973,6,56,LOS | Data Migration,Data migration activity for IBL and Hero,,,13,40,8,,40,4,0,,2022-11-12 05:17:51.248741,2023-03-02 14:07:11.820386,,40,,1,,,,False,,,False,1973,40,On hold\n102,1,9,Training,,,,1,,8,,1,0,0,,2022-08-25 11:46:09.214702,2022-08-25 11:46:09.214702,,,,1,,,,False,,,True,102,,New\n1337,13,15,Payment Instruction API,,,,18,119,8,,119,6,0,,2022-11-02 14:46:45.616312,2022-11-28 06:15:55.140794,,,,,,,,False,1170,,False,1337,119,Ready to Test\n3036,1,3,Digital Repayment success repor,,,,7,,8,,121,1,0,,2022-11-28 14:29:16.800826,2022-11-28 14:29:16.891984,,,,1,,,,False,434,,False,3036,,In progress","userInputFormat":"csv","dataSource":{"type":"paste"},"rawData":[["8370","7","48","ICRR Scorecard and Values Mismatch Issue","","","","1","80","8","","80","7","0","","2023-02-14 07:52:17.971828","2023-03-23 11:52:08.561636","","80","","","","","","False","1576","","False","8370","80","New"],["5076","13","65","GOS | Allow Multiple Guarantee Accounts","Other Requests like Pre closure, Cancellation should allow multiple Guarantee accounts in single request","","","1","145","8","","40","1","0","","2023-01-02 06:22:33.697209","2023-01-02 06:22:33.734323","","85","","1","","","","False","","","False","5076","145","New"],["9382","1","89","UTCL Related Task","","","","1","188","8","","188","1","0","","2023-02-27 13:44:04.486350","2023-02-27 13:44:04.541068","","","","1","","","","False","","","False","9382","188","New"],["1241","1","3","weekly meeting with Capri","weekly meeting with Capri","","","1","20","8","","20","1","0","","2022-11-01 06:37:28.793325","2022-11-01 06:37:28.854848","","20","","1","","","","False","","","False","1241","20","New"],["1973","6","56","LOS | Data Migration","Data migration activity for IBL and Hero","","","13","40","8","","40","4","0","","2022-11-12 05:17:51.248741","2023-03-02 14:07:11.820386","","40","","1","","","","False","","","False","1973","40","On hold"],["102","1","9","Training","","","","1","","8","","1","0","0","","2022-08-25 11:46:09.214702","2022-08-25 11:46:09.214702","","","","1","","","","False","","","True","102","","New"],["1337","13","15","Payment Instruction API","","","","18","119","8","","119","6","0","","2022-11-02 14:46:45.616312","2022-11-28 06:15:55.140794","","","","","","","","False","1170","","False","1337","119","Ready to Test"],["3036","1","3","Digital Repayment success repor","","","","7","","8","","121","1","0","","2022-11-28 14:29:16.800826","2022-11-28 14:29:16.891984","","","","1","","","","False","434","","False","3036","","In progress"]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"type_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"project_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"subject":"string","description":"string","due_date":"string","category_id":"string","status_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"assigned_to_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"priority_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"version_id":"string","author_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"lock_version":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"done_ratio":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"estimated_hours":"string","created_at":"string","updated_at":"string","start_date":"string","responsible_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"budget_id":"string","position":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"story_points":"string","remaining_hours":"string","derived_estimated_hours":"string","schedule_manually":"string","parent_id":"string","duration":"string","ignore_non_working_days":"string","work_package_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"user_id":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"status":"string"},"chart":"rawgraphs.barchart","mapping":{"bars":{"ids":["1"],"value":["status"],"isValid":true,"mappedType":"string"},"size":{"ids":["2"],"value":["work_package_id"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":false,"legendWidth":200,"padding":1,"barsOrientation":"vertical","sortBarsBy":"name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"Total value (descending)","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":false,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"default"}],"defaultColor":"#cccccc"}}}

  
//    const result = [];
//   //  const data = [];
//    const headers = Data_Bar.rawData[0];
   
//    for (let i = 1; i < Data_Bar.rawData.length; i++) {
//      const row = Data_Bar.rawData[i];
//      const obj = {};
   
//      for (let j = 0; j < row.length; j++) {
//        const key = headers[j];
//        let value = row[j];
   
//        if (value === undefined || value === '') {
//          value = 0;
//        } else if (!isNaN(parseFloat(value))) {
//          value = parseFloat(value);
//        } else if (!isNaN(Date.parse(value))) {
//          value = new Date(value);
//        }
   
//        obj[key] = value;
//      }
   
//      result.push(obj);
//    }
   
//   //  console.log(data);
   
   
//   //  console.log(data);
   
   
//    console.log(result);
   
  
//   const mapping = Data_Bar.mapping;
//   const visualizationOptions = Data_Bar.visualOptions;
//   const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: visualizationOptions });
  
//   console.log(result, "Result of Bar");
  
//   return viz;
  

// }

// function parseValue(value) {
//   // Handle numeric values
//   if (!isNaN(parseFloat(value))) {
//     return parseFloat(value);
//   }

//   // Handle date values
//   if (isDate(value)) {
//     return new Date(value);
//   }

//   // Handle other string values
//   return value;
// }

