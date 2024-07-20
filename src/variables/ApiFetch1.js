import React, {  useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import domRef from "axios"
import mappedData from "axios"
import { chart } from "@rawgraphs/rawgraphs-core";
import { barchartmultiset } from "@rawgraphs/rawgraphs-charts";
import { piechart } from "@rawgraphs/rawgraphs-charts";
import { barchart } from "@rawgraphs/rawgraphs-charts";
import { data } from "jquery";

const ApiFetch1 = () => {
  // const [jsonData, setJsonData] = useState(null);
  const chartRef = useRef(null);
 
// const userInput= '{"version":"1.1","userInput":"Teams,2018-2020,2019-2020,Difference,Status,Championship\r\nLazio,59,78,19,Better,Seria A\r\nBurnley,40,54,14,Better,Premier League\r\nInter,69,82,13,Better,Seria A\r\nSouthampton,39,52,13,Better,Premier League\r\nLeicester City,52,62,10,Better,Premier League\r\nAtalanta,69,78,9,Better,Seria A\r\nFiorentina,41,49,8,Better,Seria A\r\nParma,41,49,8,Better,Seria A\r\nSassuolo,43,51,8,Better,Seria A\r\nBrighton,36,41,5,Better,Premier League\r\nCagliari,41,45,4,Better,Seria A\r\nRoma,66,70,4,Better,Seria A\r\nBologna,44,47,3,Better,Seria A\r\nUdinese,43,45,2,Better,Seria A\r\nLiverpool,97,99,2,Better,Premier League\r\nWolverhampton,57,59,2,Better,Premier League\r\nGenoa,38,39,1,Better,Seria A\r\nManchester Utd,66,66,0,Same,Premier League\r\nNewcastle Utd,45,44,-1,Worse,Premier League\r\nMilan,68,66,-2,Worse,Seria A\r\nEverton,54,49,-5,Worse,Premier League\r\nChelsea,72,66,-6,Worse,Premier League\r\nCrystal Palace,49,43,-6,Worse,Premier League\r\nJuventus,90,83,-7,Worse,Seria A\r\nSampdoria,53,42,-11,Worse,Seria A\r\nBournemouth,45,34,-11,Worse,Premier League\r\nTottenham,71,59,-12,Worse,Premier League\r\nWest Ham,52,39,-13,Worse,Premier League\r\nArsenal,70,56,-14,Worse,Premier League\r\nWatford,50,34,-16,Worse,Premier League\r\nNapoli,79,62,-17,Worse,Seria A\r\nManchester City,98,81,-17,Worse,Premier League\r\nSPAL,42,20,-22,Worse,Seria A\r\nTorino,63,40,-23,Worse,Seria A","userInputFormat":"csv","dataSource":{"type":"upload"},"rawData":[["Lazio","59","78","19","Better","Seria A"],["Burnley","40","54","14","Better","Premier League"],["Inter","69","82","13","Better","Seria A"],["Southampton","39","52","13","Better","Premier League"],["Leicester City","52","62","10","Better","Premier League"],["Atalanta","69","78","9","Better","Seria A"],["Fiorentina","41","49","8","Better","Seria A"],["Parma","41","49","8","Better","Seria A"],["Sassuolo","43","51","8","Better","Seria A"],["Brighton","36","41","5","Better","Premier League"],["Cagliari","41","45","4","Better","Seria A"],["Roma","66","70","4","Better","Seria A"],["Bologna","44","47","3","Better","Seria A"],["Udinese","43","45","2","Better","Seria A"],["Liverpool","97","99","2","Better","Premier League"],["Wolverhampton","57","59","2","Better","Premier League"],["Genoa","38","39","1","Better","Seria A"],["Manchester Utd","66","66","0","Same","Premier League"],["Newcastle Utd","45","44","-1","Worse","Premier League"],["Milan","68","66","-2","Worse","Seria A"],["Everton","54","49","-5","Worse","Premier League"],["Chelsea","72","66","-6","Worse","Premier League"],["Crystal Palace","49","43","-6","Worse","Premier League"],["Juventus","90","83","-7","Worse","Seria A"],["Sampdoria","53","42","-11","Worse","Seria A"],["Bournemouth","45","34","-11","Worse","Premier League"],["Tottenham","71","59","-12","Worse","Premier League"],["West Ham","52","39","-13","Worse","Premier League"],["Arsenal","70","56","-14","Worse","Premier League"],["Watford","50","34","-16","Worse","Premier League"],["Napoli","79","62","-17","Worse","Seria A"],["Manchester City","98","81","-17","Worse","Premier League"],["SPAL","42","20","-22","Worse","Seria A"],["Torino","63","40","-23","Worse","Seria A"]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"Teams":"string","2018-2020":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"2019-2020":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"Difference":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"Status":"string","Championship":"string"},"chart":"rawgraphs.piechart","mapping":{"arcs":{"ids":["1","2","3"],"value":["2018-2020","2019-2020","Difference"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum","sum","sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":10,"marginRight":2,"marginBottom":2,"marginLeft":2,"showLegend":true,"legendWidth":200,"drawDonut":false,"arcTichkness":10,"sortArcsBy":"name","colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"2018-2020"},{"range":"#ff7f0e","domain":"2019-2020"},{"range":"#2ca02c","domain":"Difference"}],"defaultColor":"#cccccc"},"showSeriesLabels":true,"showArcValues":false,"sortPiesBy":"name","columnsNumber":0,"showGrid":false}}'
  const inputdata = `{"version":"1.2","userInputFormat":"json","dataSource":{"type":"url","url":"
  ","jsonPath":"data"},"rawData":[["Jan",20000,100000],["Feb",45000,20010],["Mar",100000,60000],["Apr",75000,30000],["May",90000,45000],["Jun",70000,60000],["Jul",80000,55000],["Aug",80000,88000],["Sep",65000,40000],["Oct",45000,30000],["Nov",50000,45000],["Dec",85000,70000]],"parseError":null,"parseOptions":{"separator":",","thousandsSeparator":",","decimalsSeparator":".","locale":"en-US","unstackedData":null,"unstackedColumns":null},"dataTypes":{"month":"string","Income":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]},"expense":{"type":"number","locale":"en-US","decimal":".","group":",","numerals":["0","1","2","3","4","5","6","7","8","9"]}},"chart":"rawgraphs.barchartmultiset","mapping":{"groups":{"ids":["1"],"value":["month"],"isValid":true,"mappedType":"number"},"bars":{"ids":["4","5"],"value":["Income","expense"],"isValid":true,"mappedType":"number","config":{"aggregation":["sum","sum"]}}},"visualOptions":{"width":805,"height":600,"background":"#FFFFFF","marginTop":20,"marginRight":10,"marginBottom":20,"marginLeft":50,"showLegend":true,"legendWidth":200,"setsPadding":4,"barsPadding":1,"SortXAxisBy":"Name","useSameScale":true,"columnsNumber":0,"sortSeriesBy":"valueDescending","showSeriesLabels":true,"repeatAxesLabels":false,"showGrid":true,"colorScale":{"scaleType":"ordinal","interpolator":"schemeCategory10","userScaleValues":[{"range":"#1f77b4","domain":"Income"},{"range":"#ff7f0e","domain":"expense"}],"defaultColor":"#cccccc"}},"customChart":null}`;
  
  useEffect(() => {
    const data = JSON.parse(inputdata);
    console.log("data", data);
  
    const transformedData = data.rawData.map((elem) => {
      return {
        ...Object.fromEntries(
          Object.entries(data.dataTypes).map(([key, value]) => [
            key,
            value.type === "number" ? parseFloat(elem[key]) : elem[key],
          ])
        ),
      };
    });
  
    let chartvariables;
    if (data.chart === "rawgraphs.barchartmultiset") {
      chartvariables = {
        chart: barchartmultiset,
        mapping: {
          groups: {
            value: data.mapping.groups.value,
          },
          bars: {
            value: data.mapping.bars.value.map((bar) => ({
              ...bar,
              config: bar.config || { aggregation: ["sum"] },  
            })),
          },
        },
      };
    } else if (data.chart === "rawgraphs.piechart") {
      chartvariables = {
        chart: piechart,
        mapping: {
          angle: {
            value: data.mapping.angle.value,
          },
          color: {
            value: data.mapping.color.value,
          },
        },
      };
    } else if (data.chart === "rawgraphs.barchart") {
      chartvariables = {
        chart: barchart,
        mapping: {
          x: {
            value: data.mapping.x.value,
          },
          y: {
            value: data.mapping.y.value,
          },
        },
      };
    } else {
      console.log("Selected chart ");
    };
    // const str = undefined;

// if (str !== undefined) {
//   const result = str.toLowerCase();
//   console.log(result);
// } else {
//   console.log("Value is undefined");
// }

  
    const viz = chart(chartvariables.chart, {
      
      data: transformedData,
      mapping: chartvariables?.mapping,
    });
    const Viz = viz.renderToDOM(domRef.current, mappedData);
        Viz(Viz);
    console.log(viz)
    
    // viz.renderToDOM(document.getElementById("myChart"));
    // const viz = new chart(barchartmultiset { data,  mapping})

// 5. rendering to the DOM
// const targetNode = document.getElementById('some-div')
// viz.renderToDOM(targetNode)
    // viz.renderToDOM(chartRef.current)
  }, [inputdata]);
  

  useEffect(() => {}, []);

  return <div id="myChart" ref={chartRef} > </div>;
};

export default ApiFetch1;