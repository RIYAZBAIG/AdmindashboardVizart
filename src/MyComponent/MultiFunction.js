import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchart, barchartmultiset, linechart , bubblechart, piechart} from "@rawgraphs/rawgraphs-charts";
import { LineChart } from "./DataSet_Linechart";
import { pieChart } from "./Data_Bubble";
import Render_Chart from "./Call_Chart_ID"

// function MultiFunction(CID_1, CID_2) {

//     const [Bubble_Obj, setBubble_Obj] = useState(null);
//     const [Line_Obj, setLine_Obj] = useState(null);

    
//          function BubbleChart() {

//             const rows = pieChart.userInput.split('\n');
//             const columns = rows[0].split('\t');
        
//             const result = rows.slice(1).map(row => {
//               const rowData = row.split('\t');
//               const obj = {};
//               columns.forEach((key, index) => {
//                 const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index];
//                 obj[key] = value;
//               });
//               return obj;
//             });
        
//             const mapping = pieChart.mapping;
//             const viz = chart(bubblechart, { data: result, mapping });
        
//            return viz;

          
        
//         }

//    if(CID_1 === 1) {
//     const Bubble_Obj = BubbleChart();
//     console.log(Bubble_Obj)
//     setBubble_Obj(Bubble_Obj)
//     }

  

//     function Line_Chart() {

//             const rows = LineChart.userInput.split('\n');
//             const columns = rows[0].split('\t');
        
//             const result = rows.slice(1).map(row => {
//               const rowData = row.split('\t');
//               const obj = {};
//               columns.forEach((key, index) => {
//                 const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index];
//                 obj[key] = value;
//               });
//               return obj;
//             });
        
//             const mapping = LineChart.mapping;
//             const viz = chart(linechart, { data: result, mapping });
        
//            return viz;
//         }
//  if(CID_2 === 2) {

//     const Line_Obj = BubbleChart();
//     console.log(Line_Obj)
//     setLine_Obj(Line_Obj);
        
//     }

//     // return (
//     //     <div>
//     //         <Render_Chart Bubble_Obj ={Bubble_Obj} Line_Obj={Line_Obj} />
//     //     </div>
//     //  )


// }


// export default MultiFunction;



