export function Line_Chart() {
    const delimiters = ['\t', ',', ';', '|'];
    let delimiter = '';
  
    // Detecting the delimiter
    for (let i = 0; i < delimiters.length; i++) {
      if (LineChart.userInput.includes(delimiters[i])) {
        delimiter = delimiters[i];
        break;
      }
    }
  
    if (!delimiter) {
      throw new Error('No delimiter found in the input data.');
    }
  
    const rows = LineChart.userInput.split('\n');
    const columns = rows[0].split(delimiter);
  
    const result = rows.slice(1, -1).map(row => {
      const rowData = row.split(delimiter);
      const obj = {};
      columns.forEach((key, index) => {
        const value = rowData[index];
        obj[key] = value;
      });
      return obj;
    });
  
    console.log(result, "Result of Line chart");
  
    // Updated code to return the desired array of objects
    return result;
  }


  export function Line_Chart() {
    const delimiters = ['\t', ',', ';', '|'];
    let delimiter = '';
  
    // Detecting the delimiter
    for (let i = 0; i < delimiters.length; i++) {
      if (LineChart.userInput.includes(delimiters[i])) {
        delimiter = delimiters[i];
        break;
      }
    }
  
    if (!delimiter) {
      throw new Error('No delimiter found in the input data.');
    }
  
    const rows = LineChart.userInput.split('\n');
    const columns = rows[0].split(delimiter);
  
    const result = rows.slice(1, -1).map(row => {
      const rowData = row.split(delimiter);
      const obj = {};
      columns.forEach((key, index) => {
        obj[key] = rowData[index];
      });
      return obj;
    });
  
    console.log(result, "Result of Line chart");
  
    // Transform the properties dynamically based on the column names
    const transformedResult = result.map(item => {
      const transformedItem = {};
      for (const key in item) {
        transformedItem[key] = item[key];
      }
      return transformedItem;
    });
  
    console.log(transformedResult, "Transformed Result");
  
    // Updated code to return the final desired output
    return transformedResult;
  }


  export function Line_Chart() {


    //   const delimiters = ['\t', ',', ';', '|'];
    //   let delimiter = '';
    
    // // Detecting the delimiter
    // for (let i = 0; i < delimiters.length; i++) {
    //   if (LineChart.userInput.includes(delimiters[i])) {
    //     delimiter = delimiters[i];
    //     break;
    //   }
    // }
    
    // console.log(delimiter, "Delimiter")
    
    // if (!delimiter) {
    //   throw new Error('No delimiter found in the input data.');
    // }
    
    
    const rows = LineChart.userInput.split('\n');
    const columns = rows[0].split(',');
    
    console.log(columns)
    
    const result = rows.slice(1, -1).map(row => {
      const rowData = row.split(',');
      const obj = {};
      columns.forEach((value, index) => {
        const parsedValue = parseFloat(value);
        obj[index] = isNaN(parsedValue) ? value : parsedValue;
      });
      return obj;
    });
    
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
    
    
    
    
    
    
    
        // const result = rows.slice(1).map(row => {
        //   const rowData = row.split(delimiter);
        //   const obj = {};
        //   columns.forEach((key, index) => {
        //     const value = index > 2 ? (rowData[index] ? parseFloat(rowData[index].replace(',', '')) : null) : rowData[index];
        //     obj[key] = value;
        //   });
        //   return obj;
        // });
    
      //     const result = rows.slice(1, -1).map(row => {
      //   const rowData = row.split(',');
      //   const obj = {};
      //   columns.forEach((key, index) => {
      //     obj[key] = rowData[index];
      //   });
      //   return obj;
      // });
    
        const mapping = LineChart.mapping;
        const Visulazation_Data = LineChart.visualOptions
        const viz = chart(linechart, { data: result, mapping: mapping , visualOptions: Visulazation_Data });
    console.log(result, "Result of Line chart")
      
       return viz;
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
  const viz = chart(barchart, { data: result, mapping: mapping, visualOptions: Visualization_Data });

  console.log(result, "Result of bar");

  return viz;
}





import React, { useState, useEffect, useRef } from "react";




 




function Featch_Chart({ lc_dimentionObj: propLc_dimentionObj, chartId }) {

  const [lc_dimentionObj, setLc_dimentionObj] = useState(null);

  const [viz_Bubble, setviz_Bubble] = useState(null);

  const [viz_Line_Chart, setviz_Line_Chart] = useState(null);

  const [viz_Barchart, setviz_Barchart] = useState(null);

  const [userInput, setuserInput] = useState("");

  const [line_Mapping, setline_Mapping] = useState({});

  const [line_Visulation, setline_Visulation] = useState({});

  const [common_viz, setcommon_viz] = useState({});




  const BarChart_ID= "chart1"

  const LineChart_ID = "chart1"




  const elementRef = useRef(null);

  const useResizeObserver = () => {

    const observer = new ResizeObserver((entries) => {

      const entry = entries[0];

      if (entry) {

        const { offsetWidth, offsetHeight } = entry.target;

        setLc_dimentionObj({

          xValue: offsetWidth,

          yValue: offsetHeight,

        });

      }

    });

    if (elementRef.current) {

      observer.observe(elementRef.current);

    }

    return () => {

      observer.disconnect();

    };

  };

  useEffect(useResizeObserver, []);

  useEffect(() => {

    LineChart.visualOptions.width = lc_dimentionObj?.xValue;

    LineChart.visualOptions.height = lc_dimentionObj?.yValue;

  }, [lc_dimentionObj]);




 




  useEffect(() => {

    if (chartId === BarChart_ID) {

      const result_Barchart = Barchart();

      setviz_Barchart(result_Barchart);

      console.log(result_Barchart, "Barchart");

      setcommon_viz(result_Barchart);

    }




 




    // ... other code ...

  }, [lc_dimentionObj, chartId]);




 




  useEffect(() => {

    if (chartId === BarChart_ID) {

      const result_Barchart = Barchart();

      setviz_Barchart(result_Barchart);

      console.log(result_Barchart, "Barchart");

      setcommon_viz(result_Barchart);




    }




 




    if (chartId === LineChart_ID) {

      let User_Input = LineChart.userInput;

      setuserInput(User_Input || "");




 




      let line_Mapping = LineChart.mapping;

      let line_Visulation = LineChart.visualOptions || {};

      let dataTypes_Type = LineChart.dataTypes;




 




      const result_Line_Chart = Line_Chart(

        User_Input,

        line_Mapping,

        line_Visulation,

        dataTypes_Type

      );

      setviz_Line_Chart(result_Line_Chart);

      setcommon_viz(result_Line_Chart);




    }




 




    // ... other code ...

  }, [lc_dimentionObj, chartId]);




 




  return (

<div ref={elementRef}>

<Render_Chart

        // viz_Bubble={viz_Bubble}

        // viz_Line_Chart={viz_Line_Chart}

        // viz_Barchart={viz_Barchart}

        common_viz = {common_viz}

      />

      {/* <Line_Chart userInput = {userInput} /> */}

</div>

  );

}




 




export default Featch_Chart;