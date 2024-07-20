import React, { useState, useEffect, useRef } from "react";
import interact from "interactjs";
import Featch_Data from "MyComponent/Featch_Data";
import { useParams, useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

let currentDashboard = 0;

function Dashboard1(props) {
  const [chartWidth, setChartWidth] = useState(500);
  const [chartHeight, setChartHeight] = useState(500);
  const [chart1Position, setChart1Position] = useState({ x: 0, y: 0 });
  const [charts, setCharts] = useState([]);

  const history = useHistory();
  const { id: dashboardID } = useParams();
  if (dashboardID === ":id") {
    currentDashboard = ++currentDashboard;

    history.push({ pathname: currentDashboard, state: dashboardID });
  }
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        const parsedData = JSON.parse(content);

        // Update the state with the parsed data
        setCharts(parsedData);
      };

      reader.readAsText(file);
    }
  };
  const handleWidthChange = (event) => {
    setChartWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setChartHeight(event.target.value);
  };

  const getDimension = () => {
    setChartWidth(chartContainerRef.current.offsetWidth);
    setChartHeight(chartContainerRef.current.offsetHeight);
  };

  const saveProperties = () => {
    // Save the properties of all charts (static and dynamic) to a JSON file
    const allChartsProperties = charts.map((chart) => ({
      ...chart,
      chartWidth,
      chartHeight,
      chartPosition: chart1Position,
      chartXCoordinate: chart1Position.x,
      chartYCoordinate: chart1Position.y,
    }));

    const jsonFile = new File([JSON.stringify(allChartsProperties, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(jsonFile);

    const link = document.createElement("a");
    link.href = url;
    link.download = "chart_properties.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  // const handleAddChart = () => {
  //   // Get user input for the new chart ID and DIV ID
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   // Check if the user provided the chart ID and DIV ID
  //   if (newChartID && newDivID) {
  //     // Create a new chart with the user-provided divID and add it to the state
  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: 0, y: 0 },
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     // Notify the user if they didn't provide the required input
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };

  // const handleAddChart = () => {
  //   const newChartID = `Chart${charts.length + 1}`;
  //   const newDivID = `Mychart_${newChartID}_1`;

  //   const newChart = {
  //     chartID: newChartID,
  //     divID: newDivID,
  //     chartWidth: 500,
  //     chartHeight: 500,
  //     chartPosition: { x: 0, y: 0 },
  //   };

  //   setCharts((prevCharts) => [...prevCharts, newChart]);
  // };
  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: 0, y: 0 },
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };

  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const offset = 100; // Fixed vertical offset between each chart
  //     const prevChartCount = charts.length;
  //     const newY = prevChartCount * offset;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: 0, y: newY },
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };
  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const offset = 100; // Fixed vertical offset between each chart
  //     const prevChartCount = charts.length;
  //     const newY = prevChartCount * offset;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: 0, y: newY },
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };
  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const chartWidthWithMargin = 600; // Adjust this value as needed for the desired width of each chart with margin
  //     const prevChartCount = charts.length;
  //     const newX = prevChartCount * chartWidthWithMargin;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: newX, y: 0 }, // Set y to 0 to keep them aligned at the top
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };

  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const chartWidth = 500; // Adjust this value as needed for the desired width of each chart
  //     const prevChartCount = charts.length;
  //     const newX = prevChartCount * chartWidth;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: chartWidth,
  //       chartHeight: 500,
  //       chartPosition: { x: newX, y: 0 }, // Set y to 0 to keep them aligned at the top
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };
  // const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const chartWidth = 500; // Adjust this value as needed for the desired width of each chart
  //     const prevChartCount = charts.length;
  //     const newX = prevChartCount * chartWidth;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: chartWidth,
  //       chartHeight: 500,
  //       chartPosition: { x: newX, y: 0 }, // Set y to 0 to keep them aligned at the top
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };
  const handleAddChart = () => {
    const newChartID = prompt("Enter the new Chart ID:");
    const newDivID = prompt("Enter the new DIV ID:");

    if (newChartID && newDivID) {
      const chartWidth = 500; // Adjust this value as needed for the desired width of each chart
      const prevChartCount = charts.length;
      const newX = prevChartCount * chartWidth;

      const newChart = {
        chartID: newChartID,
        divID: newDivID,
        chartWidth: chartWidth,
        chartHeight: 500,
        chartPosition: { x: newX, y: 0 }, // Set y to 0 to keep them aligned at the top
      };

      setCharts((prevCharts) => [...prevCharts, newChart]);

      // Setup interactjs for the newly added chart
      const newChartContainer = document.getElementById(newDivID);
      interact(newChartContainer)
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          listeners: {
            move(event) {
              const { x, y } = event.target.dataset;

              newChartContainer.style.width = `${event.rect.width}px`;
              newChartContainer.style.height = `${event.rect.height}px`;

              // Update the chart state with the new width and height
              setCharts((prevCharts) => {
                const updatedCharts = prevCharts.map((chart) => {
                  if (chart.divID === newDivID) {
                    return {
                      ...chart,
                      chartWidth: event.rect.width,
                      chartHeight: event.rect.height,
                    };
                  }
                  return chart;
                });
                return updatedCharts;
              });
            },
          },
        })
        .draggable({
          listeners: {
            move(event) {
              const { dx, dy } = event;

              const newX = parseFloat(event.target.dataset.x || 0) + dx;
              const newY = parseFloat(event.target.dataset.y || 0) + dy;

              newChartContainer.style.transform = `translate(${newX}px, ${newY}px)`;

              event.target.dataset.x = newX;
              event.target.dataset.y = newY;

              // Update the chart state with the new position
              setCharts((prevCharts) => {
                const updatedCharts = prevCharts.map((chart) => {
                  if (chart.divID === newDivID) {
                    return {
                      ...chart,
                      chartPosition: { x: newX, y: newY },
                    };
                  }
                  return chart;
                });
                return updatedCharts;
              });
            },
          },
        });
    } else {
      alert("Please enter both the Chart ID and DIV ID.");
    }
  };

  //   const handleAddChart = () => {
  //   const newChartID = prompt("Enter the new Chart ID:");
  //   const newDivID = prompt("Enter the new DIV ID:");

  //   if (newChartID && newDivID) {
  //     const offset = 100; // Fixed vertical offset between each chart
  //     const prevChartCount = charts.length;
  //     const newY = prevChartCount * offset;

  //     const newChart = {
  //       chartID: newChartID,
  //       divID: newDivID,
  //       chartWidth: 500,
  //       chartHeight: 500,
  //       chartPosition: { x: 0, y: newY },
  //     };

  //     setCharts((prevCharts) => [...prevCharts, newChart]);
  //   } else {
  //     alert("Please enter both the Chart ID and DIV ID.");
  //   }
  // };

  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;

    interact(chartContainer)
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const { x, y } = event.target.dataset;

            chartContainer.style.width = `${event.rect.width}px`;
            chartContainer.style.height = `${event.rect.height}px`;

            getDimension();
          },
        },
      })
      .draggable({
        listeners: {
          move(event) {
            const { dx, dy } = event;

            const newX = parseFloat(event.target.dataset.x || 0) + dx;
            const newY = parseFloat(event.target.dataset.y || 0) + dy;

            event.target.style.transform = `translate(${newX}px, ${newY}px)`;

            event.target.dataset.x = newX;
            event.target.dataset.y = newY;

            setChart1Position({ x: newX, y: newY });
          },
        },
      });

    // Trigger the dimension function to update the chart container
    getDimension();
  }, []);

  return (
    <>
      <div className="content mainContentDiv" style={{marginTop:'-60px'}} >
        {/* Render static charts */}
        {charts.map((chart, index) => (
          <Featch_Data
            key={index}
            chartWidth={chartWidth}
            chartHeight={chartHeight}
            ChartID={chart.chartID}
            DivID={chart.divID}
          />
        ))}
        <Row style={{ marginBottom: "30px", width: "100%" }}>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6"></Col>
                  <Col sm="6">
                    <ButtonGroup>
                      <Button color="success" onClick={saveProperties}>
                        Save
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          document.getElementById("fileInput").click();
                        }}
                      >
                        Load
                      </Button>
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                      />
                      <Button
                        color="info"
                        onClick={handleAddChart}
                        style={{ position: "relative" }}
                      >
                        ADD CHART
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div
                  ref={chartContainerRef}
                  style={{
                    width: `${chartWidth}px`,
                    height: `${chartHeight}px`,
                    resize: "both",
                    overflow: "auto",
                  }}
                >
                  {/* Render dynamic charts */}
                  {charts.map((chart, index) => (
                    <div
                      key={index}
                      className="chart-area"
                      id={chart.divID}
                      style={{
                        position: "absolute",
                        top: `${chart.chartPosition.y}px`,
                        left: `${chart.chartPosition.x}px`,
                      }}
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard1;
