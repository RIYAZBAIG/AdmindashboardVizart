import react from "react"
import React, { useState, useEffect } from "react";



function Call_Chart_ID({ viz_commmon, DivID}) {

    useEffect(() => {

      // const Div_ID = 'Mychart_11_1'

      // const Div_ID =  "Mychart_2_1"

        const renderChart = (chartData, DivID) => {
            const chartElement = document.getElementById(DivID);
            if (!chartElement) {
              console.error(`Could not find chart container with ID '${DivID}'.`);
              return;
            }
            chartData.renderToDOM(chartElement);
          };

          
          if (viz_commmon) {
            renderChart(viz_commmon, DivID);
           
            console.log(viz_commmon, "Call_Barchart")
          }

         
         


    },[viz_commmon])

}
export default Call_Chart_ID;