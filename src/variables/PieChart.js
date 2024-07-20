// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { chart } from "@rawgraphs/rawgraphs-core";
// import { piechart } from "@rawgraphs/rawgraphs-charts";

// const Piechart = () => {
//   const [jsonData, setJsonData] = useState(null);
  

//   const inputdata = `{"version":"1.2","userInput":"{\"count\":12,\"data\":[{\"month\":\"Jan\",\"Income\":20000,\"expense\":100000},{\"month\":\"Feb\",\"Income\":45000,\"expense\":20010},{\"month\":\"Mar\",\"Income\":100000,\"expense\":60000},{\"month\":\"Apr\",\"Income\":75000,\"expense\":30000},{\"month\":\"May\",\"Income\":90000,\"expense\":45000},{\"month\":\"Jun\",\"Income\":70000,\"expense\":60000},{\"month\":\"Jul\",\"Income\":80000,\"expense\":55000},{\"month\":\"Aug\",\"Income\":80000,\"expense\":88000},{\"month\":\"Sep\",\"Income\":65000,\"expense\":40000},{\"month\":\"Oct\",\"Income\":45000,\"expense\":30000},{\"month\":\"Nov\",\"Income\":50000,\"expense\":45000},{\"month\":\"Dec\",\"Income\":85000,\"expense\":70000}]}}`;

//   useEffect(() => {
//     console.log("zufa");
//     debugger
//     const data = inputdata.userInput;
//     // const data = JSON.parse(JSON.parse(inputdata).userInput);
    

//     console.log("data", data);
//     console.log("baig22");

//     const transformedData = chart(
//       piechart,
//       data,
//       {
//         labelColumn: "month",
//         valueColumn: "Income",
//       },
//       { width: 500, height: 500 }
//     );

//     setJsonData(transformedData);
//   }, []);

//   return (
//     <div>
//       {jsonData && (
//         <svg dangerouslySetInnerHTML={{ __html: jsonData }} viewBox="0 0 500 500" />
//       )}
//     </div>
//   );
// };

// ReactDOM.render(<Piechart />, document.getElementById("root"));
// console.log("sam");

// export default Piechart;
