import React, { useState, useEffect, useRef } from "react";
import { LineChart } from "./DataSet_Linechart";
import { pieChart } from "./Data_Bubble";
import {BubbleChart, PieChart} from "./Chart_Function"
import Call_Chart_ID from "./Call_Chart_ID"
import Chart_Number from "./Function_Call_NO"
import MultiFunction from "./MultiFunction";
import { Line_Chart } from "./Chart_Function";
import {Barchart}  from "./Chart_Function";  
import{Data_Bar_1} from "MyComponent/Data_Barchart"
import {Data_PieChart} from "./Data_piechart"
import {API_Json_Data} from "./API_JSON_Data"
import {Chart_ID_Featch} from "./Chart_ID_Pass"

function Featch_Data(props) {
    const [viz_Bubble, setviz_Bubble] = useState(null);
    const [viz_Line_Chart, setviz_Line_Chart] = useState(null);
    const [viz_Barchart, setviz_Barchart] = useState(null);
    const [userInput, setuserInput] = useState("");
    const [line_Mapping, setline_Mapping] = useState({});
    const [line_Visulation, setline_Visulation] = useState({});
    const [viz_PieChart, setviz_PieChart] = useState(null);
    const [viz_commmon, setiz_commmon] = useState(null);
  const [lc_dimentionObj, setLc_dimentionObj] = useState(null);


    const chartWidth = props.chartWidth;
  const chartHeight = props.chartHeight;
   const Chart_ID_Featch =props.ChartID;
   const DivID = props.DivID;
  const Chart_Name = API_Json_Data.chart;
  console.log(Chart_Name);
  console.log(typeof(Chart_Name));


  
    useEffect(() => {

      if (Chart_ID_Featch == "Chart1"){
      
        let User_Input_bar = Data_Bar_1.userInput;
        setuserInput(User_Input_bar || "");
    
        let Bar_Mapping = Data_Bar_1.mapping;
        const Bar_Visulation = {
          ...Data_Bar_1.visualOptions,
          width: chartWidth,
          height: chartHeight,
        };
  
      
        let dataTypes_Type_Bar = Data_Bar_1.dataTypes;
  
      const result_BarChart = Barchart(
          User_Input_bar,
          Bar_Mapping,
          { ...Bar_Visulation, width: +chartWidth, height: +chartHeight },
          dataTypes_Type_Bar
        );
        
        setviz_Barchart(result_BarChart);
        setiz_commmon(result_BarChart);
      }
  
      if (Chart_ID_Featch == "Chart2") {
        let User_Input = LineChart.userInput;
        setuserInput(User_Input || "");
    
        let line_Mapping = LineChart.mapping;
      
        let dataTypes_Type = LineChart.dataTypes;
        let line_Visulation =  {
          ...LineChart.visualOptions,
          width: chartWidth,
          height: chartHeight,
        };
    
        const result_LineChart = Line_Chart(
          User_Input,
          line_Mapping,
           { ...line_Visulation, width: +chartWidth, height: +chartHeight },
          dataTypes_Type
        );
        setviz_Line_Chart(result_LineChart);
        setiz_commmon(result_LineChart);

  
  
      }
      
      if (Chart_ID_Featch == "Chart3"){

        
      let User_Input_pie = Data_PieChart.userInput;
      setuserInput(User_Input_pie || "");
  
      let Piechart_Mapping = Data_PieChart.mapping;
      let Pie_Visulation = {
        ...Data_PieChart.visualOptions,
        width: chartWidth,
        height: chartHeight,
      };

    
      let dataTypes_Type_Pie = Data_PieChart.dataTypes;

    const result_PieChart = PieChart(
      User_Input_pie,
      Piechart_Mapping,
        { ...Pie_Visulation, width: +chartWidth, height: +chartHeight },
        dataTypes_Type_Pie
      );
      
      setviz_PieChart(result_PieChart);
      console.log(result_PieChart, "PieChart_Result")
      setiz_commmon(result_PieChart);

      }
      
    }, [chartWidth, chartHeight]);
  
    return (
      <div>
        
        <Call_Chart_ID
          viz_commmon={viz_commmon}
          DivID={DivID}
        />
      </div>
    );
  }



 export default Featch_Data;