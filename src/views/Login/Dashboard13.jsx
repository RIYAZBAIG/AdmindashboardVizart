import React, { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import Featch_Data from "MyComponent/Featch_Data";

import { Link } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import { NavItem } from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";
import { DropdownMenu, DropdownItem, Dropdown } from "reactstrap";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  // CardTitle,
  DropdownToggle,

  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const Dashboard13 = () => {
  const [chartWidth, setChartWidth] = useState(500);
  const [chartHeight, setChartHeight] = useState(500);
  const chartContainerRef = useRef(null);
  const chartContainer2Ref = useRef(null);
  const chartContainer3Ref = useRef(null);
  const [chart2Width, setChart2Width] = useState(500);
  const [chart2Height, setChart2Height] = useState(500);
  const [chart3Width, setChart3Width] = useState(500);
  const [chart3Height, setChart3Height] = useState(500);
  const [chart1Position, setChart1Position] = useState({ x: 0, y: 0 });
  const [chart2Position, setChart2Position] = useState({ x: 0, y: 0 });
  const [chart3Position, setChart3Position] = useState({ x: 0, y: 0 });
  const [chartsData, setChartsData] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

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

  const getChart2Dimension = () => {
    setChart2Width(chartContainer2Ref.current.offsetWidth);
    setChart2Height(chartContainer2Ref.current.offsetHeight);
  };

  const getChart3Dimension = () => {
    setChart3Width(chartContainer3Ref.current.offsetWidth);
    setChart3Height(chartContainer3Ref.current.offsetHeight);
  };

  const saveProperties = () => {
    const chart1Properties = {
      chartID: "Chart1",
      divID: "Mychart_11_1",
      chartWidth,
      chartHeight,
      chartPosition: chart1Position,
      chartXCoordinate: chart1Position.x,
      chartYCoordinate: chart1Position.y,
    };

    const chart2Properties = {
      chartID: "Chart2",
      divID: "Mychart_11_2",
      chartWidth: chart2Width,
      chartHeight: chart2Height,
      chartPosition: chart2Position,
      chartXCoordinate: chart2Position.x,
      chartYCoordinate: chart2Position.y,
    };

    const chart3Properties = {
      chartID: "Chart3",
      divID: "Mychart_11_3",
      chartWidth: chart3Width,
      chartHeight: chart3Height,
      chartPosition: chart3Position,
      chartXCoordinate: chart3Position.x,
      chartYCoordinate: chart3Position.y,
    };

    const jsonFile = new File(
      [
        JSON.stringify(
          [chart1Properties, chart2Properties, chart3Properties],
          null,
          2
        ),
      ],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(jsonFile);

    const link = document.createElement("a");
    link.href = url;
    link.download = "chart_properties.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

 

  const handleAddChart = () => {
    // Get user input for the new chart ID and DIV ID
    const newChartID = prompt("Enter the new Chart ID:");
    const newDivID = prompt("Enter the new DIV ID:");

    // Check if the user provided the chart ID and DIV ID
    if (newChartID && newDivID) {
      // Create a new set of three charts with the user-provided divID
      const newCharts = Array.from({ length: 1 }, (_, index) => ({
        chartID: newChartID,
        divID: `${newDivID}_${index + 1}`,
        chartWidth: 500,
        chartHeight: 500,
        chartPosition: { x: 0, y: 0 },
      }));

      // Add the new set of charts to the UI
      setChartsData((prevData) => [...prevData, ...newCharts]);
    } else {
      // Notify the user if they didn't provide the required input
      alert("Please enter both the Chart ID and DIV ID.");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      const contents = e.target.result;

      // Parse the JSON contents
      const data = JSON.parse(contents);

      // Call a function to regenerate the UI using the parsed data
      regenerateUI(data);

      // Reset the file input value to allow selecting the same file again
      event.target.value = null;
    };

    reader.readAsText(file);
  };


  const regenerateUI = (data) => {
    const chart1Properties = data[0];
    const chart2Properties = data[1];
    const chart3Properties = data[2];

    setChartWidth(chart1Properties.chartWidth);
    setChartHeight(chart1Properties.chartHeight);
    setChart2Width(chart2Properties.chartWidth);
    setChart2Height(chart2Properties.chartHeight);
    setChart3Width(chart3Properties.chartWidth);
    setChart3Height(chart3Properties.chartHeight);
    setChart1Position(chart1Properties.chartPosition);
    setChart2Position(chart2Properties.chartPosition);
    setChart3Position(chart3Properties.chartPosition);

    // Update the dimensions and positions of the chart containers
    chartContainerRef.current.style.width = `${chart1Properties.chartWidth}px`;
    chartContainerRef.current.style.height = `${chart1Properties.chartHeight}px`;
    chartContainerRef.current.style.transform = `translate(${chart1Properties.chartPosition.x}px, ${chart1Properties.chartPosition.y}px)`;

    chartContainer2Ref.current.style.width = `${chart2Properties.chartWidth}px`;
    chartContainer2Ref.current.style.height = `${chart2Properties.chartHeight}px`;
    chartContainer2Ref.current.style.transform = `translate(${chart2Properties.chartPosition.x}px, ${chart2Properties.chartPosition.y}px)`;

    chartContainer3Ref.current.style.width = `${chart3Properties.chartWidth}px`;
    chartContainer3Ref.current.style.height = `${chart3Properties.chartHeight}px`;
    chartContainer3Ref.current.style.transform = `translate(${chart3Properties.chartPosition.x}px, ${chart3Properties.chartPosition.y}px)`;

    // Trigger the dimension functions to update the chart containers
    getDimension();
    getChart2Dimension();
    getChart3Dimension();
  };

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

    const chartContainer2 = chartContainer2Ref.current;

    interact(chartContainer2)
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const { x, y } = event.target.dataset;

            chartContainer2.style.width = `${event.rect.width}px`;
            chartContainer2.style.height = `${event.rect.height}px`;

            getChart2Dimension();
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

            setChart2Position({ x: newX, y: newY });
          },
        },
      });

    const chartContainer3 = chartContainer3Ref.current;

    interact(chartContainer3)
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const { x, y } = event.target.dataset;

            chartContainer3.style.width = `${event.rect.width}px`;
            chartContainer3.style.height = `${event.rect.height}px`;

            getChart3Dimension();
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

            setChart3Position({ x: newX, y: newY });
          },
        },
      });

    // Trigger the dimension functions to update the chart containers
    getDimension();
    getChart2Dimension();
    getChart3Dimension();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    // return "Brand";
  };

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else if (prop.layout === "/admin" && prop.path === "/dashboard1") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <BackgroundColorContext.Consumer  >
    {({ color, changeColor }) => (
      
      <React.Fragment>
        <div className="wrapper"  >

          <Sidebar
            routes={routes}
            logo={{
              outterLink: "https://www.creative-tim.com/",
              text: "Creative Tim",
              imgSrc: logo,
            }}
            toggleSidebar={toggleSidebar}
          />
          <div className="main-panel" data={color}>
            <AdminNavbar
              brandText={getBrandText(location.pathname)}
              toggleSidebar={toggleSidebar}
              sidebarOpened={sidebarOpened}
            />
            <div className="content mainContentDiv"  >
              <h2>Hello  Welcome to  Dashboard1</h2>
              <>
      {/* <div className="content" style={{marginLeft:"-185px"}} > */}
      <div className="content mainContentDiv" style={{marginTop:'-60px'}} >

      <Featch_Data
          chartWidth={chart3Width}
          chartHeight={chart3Height}
          ChartID="Chart3"
          DivID="Mychart_11_1"
        />


        {/* <Featch_Data
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          ChartID="Chart1"
          DivID="Mychart_11_1"
        />
          <Featch_Data
          chartWidth={chart2Width}
          chartHeight={chart2Height}
          ChartID="Chart2"
          DivID="Mychart_11_2"
        /> */}
       
       {/* <Featch_Data
          chartWidth={chart3Width}
          chartHeight={chart3Height}
          ChartID="Chart3"
          DivID="Mychart_11_3"
        /> */}

        <Row style={{ marginBottom: "30px", width: "100%" }}>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "-1200px",
                    marginBottom: "50px",
                  }}
                >
                  <Col className="text-left" sm="6"></Col>
                  <Col sm="6">
                    <ButtonGroup>
                    
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                      />
                     
                    </ButtonGroup>
                  </Col>
                </Row>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "1160px",
                    marginTop: "-50px",
                  }}
                >
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle
                      tag="div"
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        // position: "absolute",
                        // top: "15px",
                        // left: "-5px",
                        // backgroundColor: "#f9f9f9",
                        // boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                        // zIndex: 1,
                      }}
                    >

<Link to="/ShowAll" style={{position:"relative",display:"flex", margin:"-0px", marginTop:"-35px"}} >Back</Link>



                      {/* <svg
                        width="4"
                        height="13"
                        viewBox="0 0 4 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        // onClick={toggleMenu}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.16681 1.83337C3.16681 2.56975 2.56985 3.1667 1.83348 3.1667C1.0971 3.1667 0.500153 2.56975 0.500153 1.83337C0.500153 1.097 1.0971 0.500046 1.83348 0.500046C2.56985 0.500046 3.16681 1.097 3.16681 1.83337ZM3.16681 6.16653C3.16681 6.9029 2.56985 7.49986 1.83348 7.49986C1.0971 7.49986 0.500153 6.9029 0.500153 6.16653C0.500153 5.43015 1.0971 4.8332 1.83348 4.8332C2.56985 4.8332 3.16681 5.43015 3.16681 6.16653ZM1.83348 12.1666C2.56985 12.1666 3.16681 11.5697 3.16681 10.8333C3.16681 10.0969 2.56985 9.49995 1.83348 9.49995C1.0971 9.49995 0.500153 10.0969 0.500153 10.8333C0.500153 11.5697 1.0971 12.1666 1.83348 12.1666Z"
                          fill="currentColor"
                        />
                      </svg> */}


                    </DropdownToggle>
                    {/* {isMenuOpen && ( */}
                    <DropdownMenu
                    
                      className="dropdown-menu-right"
                    >
                      <DropdownItem
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          // color:"limegreen"
                        }}
                        onClick={saveProperties}
                      >
                        Save
                      </DropdownItem>

                      <DropdownItem
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          // color:"red",
                        }}
                        onClick={() => {
                          document.getElementById("fileInput").click();
                        }}
                      >
                        Load
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          backgroundColor: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          // color:'violet'
                        }}
                        onClick={handleAddChart}
                      >
                        AddChart
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  {/* )} */}
                </div>
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
                  <div className="chart-area" id="Mychart_11_1"></div>
                </div>

                <div
                  ref={chartContainer2Ref}
                  style={{
                    width: `${chart2Width}px`,
                    height: `${chart2Height}px`,
                    resize: "both",
                    overflow: "auto",
                  }}
                >
                  <div className="chart-area" id="Mychart_11_2"></div>
                </div>
                <div
                  ref={chartContainer3Ref}
                  style={{
                    width: `${chart3Width}px`,
                    height: `${chart3Height}px`,
                    resize: "both",
                    overflow: "auto",
                  }}
                >
                  <div className="chart-area" id="Mychart_11_3"></div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="content mainContentDiv">
        {/* Render each chart based on the chartsData array */}
        {chartsData.map((chart, index) => (
          <Featch_Data
            key={chart.chartID}
            chartWidth={chart.chartWidth}
            chartHeight={chart.chartHeight}
            ChartID={chart.chartID}
            DivID={chart.divID}
          />
        ))}

   
      </div>
    </>
              
            </div>
          </div>
          

<Footer/>
        
          </div>

      </React.Fragment>
    )}
  </BackgroundColorContext.Consumer>
  );
};

export default Dashboard13;
