import React,{useState,rawgraphs} from "react";
// import rawgraphs from "@rawgraphs/rawgraphs-charts"
import { chart } from '@rawgraphs/rawgraphs-core';


const  ChartDataViz = ({  })=> {
    console.log("riyaz");

    const [ChartConfig, setChartConfig] = useState(null)
    const [jsonData, setJsonData] = useState(null)
debugger
    const inputdata = 
        '"version":"1.2","userInput":"{\"count\":12,\"data\":[{\"month\":\"Jan\",\"Income\":20000,\"expense\":100000},{\"month\":\"Feb\",\"Income\":45000,\"expense\":20010},{\"month\":\"Mar\",\"Income\":100000,\"expense\":60000},{\"month\":\"Apr\",\"Income\":75000,\"expense\":30000},{\"month\":\"May\",\"Income\":90000,\"expense\":45000},{\"month\":\"Jun\",\"Income\":70000,\"expense\":60000},{\"month\":\"Jul\",\"Income\":80000,\"expense\":55000},{\"month\":\"Aug\",\"Income\":80000,\"expense\":88000},{\"month\":\"Sep\",\"Income\":65000,\"expense\":40000},{\"month\":\"Oct\",\"Income\":45000,\"expense\":30000},{\"month\":\"Nov\",\"Income\":50000,\"expense\":45000},{\"month\":\"Dec\",\"Income\":85000,\"expense\":70000}]}","userInputFormat":"json","dataSource":{"type":"url","url":"http:\/\/dev.etldata.traversetec.co/test.php","jsonPath":"data"},"rawData":[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"month":"string","Income":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"expense":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]}},"chart":"rawgraphs.barchartmultiset","mapping":{"groups":{"ids":["1"],"value":["month"],"isValid":true,"mappedType":"number"},"bars":{"ids":["4","5"],"value":["Income","expense"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum","sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":true,"legendWidth":200,"setsPadding":4,"barsPadding":1,"SortXAxisBy":"Name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"valueDescending","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":true,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"Income"},{"range":"#ff7f0e","domain":"expense"}],"defaultColor":"#cccccc"}},"customChart":null}'
    
    const data = JSON.parse(inputdata)
    
    console.log(data);
    const chartConfig = {
        data:data,
        createdBy: 'system admin',
        createdAt: '04/14/2023 22:22',
      }
      rawgraphs.selectChart(chartConfig.chart);
      rawgraphs.mappings.set(chartConfig.mapping);
      rawgraphs.customize(chartConfig.visualOptions);

      rawgraphs.render({
            data: chartConfig.rawData,
            container: '#chart-container'
          });
        




  return (
    <div>
      <h2>Chart {123}</h2>
      <div id="chart-container"></div>
    </div>
  )
        }

export default ChartDataViz;
