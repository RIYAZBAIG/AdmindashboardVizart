import { Link } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import { NavItem } from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";

import React, { useState, useEffect, useRef } from "react";
import interact from "interactjs";
import Featch_Data from "MyComponent/Featch_Data";
import { useParams } from "react-router-dom";
import { DropdownMenu, DropdownItem, Dropdown } from "reactstrap";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  // CardTitle,
  DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
  // Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const CreateDash = () => {
  const location = useLocation();
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  const [data, setData] = useState([]);
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
//


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












  fetch("http://dev.vizart.traversetec.co/api/v1/dashboard/create", {
  method: "POST",
  headers: {
    "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGJiODJkYjI1MWVkZjkxYzAwNWQyMGIyM2M4OGI1NmYwYzk4MmIxYjk5ZjBhYjljNjQ2MTliNThmOTdmNjdmY2ZlZmUwY2M3ZmU5ODdkYzgiLCJpYXQiOjE2OTUxODg4NzMuODQ5NzczLCJuYmYiOjE2OTUxODg4NzMuODQ5Nzc1LCJleHAiOjE3MjY4MTEyNzMuODM0NDkzLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.T-TluObk6YOEjmCev2E2qEnfJKdC_UFRXk9EEGJhvOJaliq9Ck6PW6fsyuUrLKBdScHAFbpAQQy5pF9CWg_1i6j1itaJNkU4dhjykws1wZ_WCnCcAmSyHxZTXeQdmsBjlH1JyxQM2Kbx3WsHwp3jTZqAGG4NLdQYolUNd5NO9VpkeRXo1vQeBsdnm6poRGYaJWvUgIdIG5vN731cHgjASnlWLcJbvLsPUXIC7LZwFwZ8t_IUS5Zi32zVoK0uphCvIN9t9bF2z0uY30F7BU2oNtKHBSvv9xqM-pFrEofDjjYHIRxrTG1owyIQFhxLZUEFbwwIRYZasINdMqeGcxR4eh01xlbBAeX2ZvBH19f8oVfNLY__6uAovW9fosIw7lwZK6MZKvV4Cw1vO0SeqMAgmPbIMM0SRgjNf6yKUz15ZCxP-Gw4UmAFRnUqkH4uKu-EH8A6zXDTqRXHCSbl43-hhO2opa51QAPON10FAIZe61Z-5SP_vVrLb2VsI-9Xi2okDbhFmsaj4APxn8fo2drgV6B1Cec6vbL3WSCtIr5zJuya9nZbJjUnAlEmirUyX0bmr-uhBoGmardP8gBEWV4sg-F63C6Jlb-6c7Ydd08aWCmX6dfjuUM0JPc5DfSgzgs0cjmdYUY5sP7xOuKQ5OMl1gkLQR87WmSHkrvuDr8hva8",
    "Content-Type": "application/json", // Adjust content type as needed
  },
  // Include the request body if necessary
  body: JSON.stringify(
    {
      "name": "dashboard 1",
      "dashboardData": [
          {
              "version": "1.1",
              "userInput": "Id,Income,Age,Experience,Married /Single,House_Ownership,Car_Ownership,Profession,CITY,STATE,CURRENT_JOB_YRS,CURRENT_HOUSE_YRS,,Risk_Flag\r\n1,1303834,23,3,single,rented,no,Mechanical_engineer,Rewa,Madhya_Pradesh,3,13,0,2\r\n2,7574516,40,10,single,rented,no,Software_Developer,Parbhani,Maharashtra,9,13,0,0\r\n3,3991815,66,4,married,rented,no,Technical_writer,Alappuzha,Kerala,4,10,0,0\r\n4,6256451,41,2,single,rented,yes,Software_Developer,Bhubaneswar,Odisha,2,12,1,0\r\n5,5768871,47,11,single,rented,no,Civil_servant,Tiruchirappalli[10],Tamil_Nadu,3,14,1,3\r\n6,6915937,64,0,single,rented,no,Civil_servant,Jalgaon,Maharashtra,0,12,0,0\r\n7,3954973,58,14,married,rented,no,Librarian,Tiruppur,Tamil_Nadu,8,12,0,1\r\n8,1706172,33,2,single,rented,no,Economist,Jamnagar,Gujarat,2,14,0,0\r\n9,7566849,24,17,single,rented,yes,Flight_attendant,Kota[6],Rajasthan,11,11,0,0\r\n10,8964846,23,12,single,rented,no,Architect,Karimnagar,Telangana,5,13,0,2\r\n11,4634680,78,7,single,rented,no,Flight_attendant,Hajipur[31],Bihar,7,12,0,0\r\n12,6623263,22,4,single,rented,no,Designer,Adoni,Andhra_Pradesh,4,14,0,0\r\n13,9120988,28,9,single,rented,no,Physician,Erode[17],Tamil_Nadu,9,12,0,0\r\n14,8043880,57,12,single,rented,no,Financial_Analyst,Kollam,Kerala,8,10,0,1\r\n15,9420838,48,6,single,rented,no,Technical_writer,Madurai,Tamil_Nadu,6,10,1,0\r\n16,5694236,39,2,married,rented,yes,Economist,Anantapuram[24],Andhra_Pradesh,2,10,0,0\r\n17,7315840,71,8,married,rented,no,Air_traffic_controller,Kamarhati,West_Bengal,8,14,0,3\r\n18,3666346,56,12,single,rented,no,Politician,Bhusawal,Maharashtra,12,11,1,0\r\n19,2241112,28,8,single,rented,no,Police_officer,Sirsa,Haryana,6,14,0,0\r\n20,5431918,40,1,single,rented,no,Artist,Amaravati,Andhra_Pradesh,1,14,0,0\r\n21,9225468,54,14,single,rented,no,Surveyor,Secunderabad,Telangana,8,10,0,1\r\n22,6506739,50,4,single,rented,no,Politician,Ahmedabad,Gujarat,4,11,0,0\r\n23,9157379,72,13,single,rented,yes,Design_Engineer,Ajmer,Rajasthan,9,10,0,2\r\n24,9236505,36,19,single,rented,no,Chemical_engineer,Ongole,Andhra_Pradesh,6,14,0,0\r\n25,1065465,23,15,married,rented,no,Hotel_Manager,Miryalaguda,Telangana,4,12,0,0\r\n26,1797876,76,20,single,norent_noown,no,Mechanical_engineer,Erode[17],Tamil_Nadu,11,14,0,0\r\n27,6063428,38,6,married,rented,no,Dentist,Ambattur,Tamil_Nadu,6,13,0,0\r\n28,9643150,24,13,single,rented,no,Comedian,Indore,Madhya_Pradesh,6,14,0,0\r\n29,8832725,64,5,single,rented,no,Biomedical_Engineer,Pondicherry,Puducherry,5,11,1,0\r\n30,4386333,31,16,single,rented,no,Physician,Shimoga,Karnataka,3,12,0,0\r\n31,3939397,52,19,single,rented,yes,Flight_attendant,Chennai,Tamil_Nadu,3,10,0,1\r\n32,6944134,59,5,single,owned,no,Graphic_Designer,Gulbarga,Karnataka,5,11,0,0\r\n33,4128828,21,10,single,rented,no,Computer_hardware_engineer,Khammam,Telangana,10,12,0,2\r\n34,5023035,26,10,single,rented,yes,Petroleum_Engineer,Madurai,Tamil_Nadu,9,13,0,0\r\n35,9086933,55,7,single,rented,no,Air_traffic_controller,Saharanpur,Uttar_Pradesh,7,13,0,0\r\n36,7537675,45,4,single,rented,no,Graphic_Designer,Gopalpur,West_Bengal,4,14,0,0\r\n37,9625415,77,15,married,rented,no,Secretary,Amravati,Maharashtra,9,10,0,0\r\n38,7904011,71,3,single,rented,no,Computer_operator,Udupi,Karnataka,3,11,0,0\r\n39,3540135,78,4,single,rented,no,Biomedical_Engineer,Howrah,West_Bengal,4,11,0,0\r\n40,8739032,55,3,married,rented,no,Politician,Aurangabad[39],Bihar,3,14,0,0\r\n41,3217258,23,12,single,rented,yes,Petroleum_Engineer,Hospet,Karnataka,8,10,0,0\r\n42,2735428,72,20,single,rented,no,Surveyor,Shimla,Himachal_Pradesh,6,14,0,1\r\n43,9760667,63,17,single,rented,no,Chartered_Accountant,Khandwa,Madhya_Pradesh,13,12,1,2\r\n44,8390825,30,11,single,rented,no,Secretary,Bidhannagar,West_Bengal,7,10,0,3\r\n",
              "userInputFormat": "csv",
              "dataSource": {
                  "type": "upload"
              },
              "rawData": [
                  [
                      "1",
                      "1303834",
                      "23",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Mechanical_engineer",
                      "Rewa",
                      "Madhya_Pradesh",
                      "3",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "2",
                      "7574516",
                      "40",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Software_Developer",
                      "Parbhani",
                      "Maharashtra",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "3",
                      "3991815",
                      "66",
                      "4",
                      "married",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Alappuzha",
                      "Kerala",
                      "4",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "4",
                      "6256451",
                      "41",
                      "2",
                      "single",
                      "rented",
                      "yes",
                      "Software_Developer",
                      "Bhubaneswar",
                      "Odisha",
                      "2",
                      "12",
                      "1",
                      "0"
                  ],
                  [
                      "5",
                      "5768871",
                      "47",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Tiruchirappalli[10]",
                      "Tamil_Nadu",
                      "3",
                      "14",
                      "1",
                      "3"
                  ],
                  [
                      "6",
                      "6915937",
                      "64",
                      "0",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Jalgaon",
                      "Maharashtra",
                      "0",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "7",
                      "3954973",
                      "58",
                      "14",
                      "married",
                      "rented",
                      "no",
                      "Librarian",
                      "Tiruppur",
                      "Tamil_Nadu",
                      "8",
                      "12",
                      "0",
                      "1"
                  ],
                  [
                      "8",
                      "1706172",
                      "33",
                      "2",
                      "single",
                      "rented",
                      "no",
                      "Economist",
                      "Jamnagar",
                      "Gujarat",
                      "2",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "9",
                      "7566849",
                      "24",
                      "17",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Kota[6]",
                      "Rajasthan",
                      "11",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "10",
                      "8964846",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Architect",
                      "Karimnagar",
                      "Telangana",
                      "5",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "11",
                      "4634680",
                      "78",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Flight_attendant",
                      "Hajipur[31]",
                      "Bihar",
                      "7",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "12",
                      "6623263",
                      "22",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Designer",
                      "Adoni",
                      "Andhra_Pradesh",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "13",
                      "9120988",
                      "28",
                      "9",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "9",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "14",
                      "8043880",
                      "57",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Financial_Analyst",
                      "Kollam",
                      "Kerala",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "15",
                      "9420838",
                      "48",
                      "6",
                      "single",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Madurai",
                      "Tamil_Nadu",
                      "6",
                      "10",
                      "1",
                      "0"
                  ],
                  [
                      "16",
                      "5694236",
                      "39",
                      "2",
                      "married",
                      "rented",
                      "yes",
                      "Economist",
                      "Anantapuram[24]",
                      "Andhra_Pradesh",
                      "2",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "17",
                      "7315840",
                      "71",
                      "8",
                      "married",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Kamarhati",
                      "West_Bengal",
                      "8",
                      "14",
                      "0",
                      "3"
                  ],
                  [
                      "18",
                      "3666346",
                      "56",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Bhusawal",
                      "Maharashtra",
                      "12",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "19",
                      "2241112",
                      "28",
                      "8",
                      "single",
                      "rented",
                      "no",
                      "Police_officer",
                      "Sirsa",
                      "Haryana",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "20",
                      "5431918",
                      "40",
                      "1",
                      "single",
                      "rented",
                      "no",
                      "Artist",
                      "Amaravati",
                      "Andhra_Pradesh",
                      "1",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "21",
                      "9225468",
                      "54",
                      "14",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Secunderabad",
                      "Telangana",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "22",
                      "6506739",
                      "50",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Ahmedabad",
                      "Gujarat",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "23",
                      "9157379",
                      "72",
                      "13",
                      "single",
                      "rented",
                      "yes",
                      "Design_Engineer",
                      "Ajmer",
                      "Rajasthan",
                      "9",
                      "10",
                      "0",
                      "2"
                  ],
                  [
                      "24",
                      "9236505",
                      "36",
                      "19",
                      "single",
                      "rented",
                      "no",
                      "Chemical_engineer",
                      "Ongole",
                      "Andhra_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "25",
                      "1065465",
                      "23",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Hotel_Manager",
                      "Miryalaguda",
                      "Telangana",
                      "4",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "26",
                      "1797876",
                      "76",
                      "20",
                      "single",
                      "norent_noown",
                      "no",
                      "Mechanical_engineer",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "11",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "27",
                      "6063428",
                      "38",
                      "6",
                      "married",
                      "rented",
                      "no",
                      "Dentist",
                      "Ambattur",
                      "Tamil_Nadu",
                      "6",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "28",
                      "9643150",
                      "24",
                      "13",
                      "single",
                      "rented",
                      "no",
                      "Comedian",
                      "Indore",
                      "Madhya_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "29",
                      "8832725",
                      "64",
                      "5",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Pondicherry",
                      "Puducherry",
                      "5",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "30",
                      "4386333",
                      "31",
                      "16",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Shimoga",
                      "Karnataka",
                      "3",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "31",
                      "3939397",
                      "52",
                      "19",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Chennai",
                      "Tamil_Nadu",
                      "3",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "32",
                      "6944134",
                      "59",
                      "5",
                      "single",
                      "owned",
                      "no",
                      "Graphic_Designer",
                      "Gulbarga",
                      "Karnataka",
                      "5",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "33",
                      "4128828",
                      "21",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Computer_hardware_engineer",
                      "Khammam",
                      "Telangana",
                      "10",
                      "12",
                      "0",
                      "2"
                  ],
                  [
                      "34",
                      "5023035",
                      "26",
                      "10",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Madurai",
                      "Tamil_Nadu",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "35",
                      "9086933",
                      "55",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Saharanpur",
                      "Uttar_Pradesh",
                      "7",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "36",
                      "7537675",
                      "45",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Graphic_Designer",
                      "Gopalpur",
                      "West_Bengal",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "37",
                      "9625415",
                      "77",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Secretary",
                      "Amravati",
                      "Maharashtra",
                      "9",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "38",
                      "7904011",
                      "71",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Computer_operator",
                      "Udupi",
                      "Karnataka",
                      "3",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "39",
                      "3540135",
                      "78",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Howrah",
                      "West_Bengal",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "40",
                      "8739032",
                      "55",
                      "3",
                      "married",
                      "rented",
                      "no",
                      "Politician",
                      "Aurangabad[39]",
                      "Bihar",
                      "3",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "41",
                      "3217258",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Hospet",
                      "Karnataka",
                      "8",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "42",
                      "2735428",
                      "72",
                      "20",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Shimla",
                      "Himachal_Pradesh",
                      "6",
                      "14",
                      "0",
                      "1"
                  ],
                  [
                      "43",
                      "9760667",
                      "63",
                      "17",
                      "single",
                      "rented",
                      "no",
                      "Chartered_Accountant",
                      "Khandwa",
                      "Madhya_Pradesh",
                      "13",
                      "12",
                      "1",
                      "2"
                  ],
                  [
                      "44",
                      "8390825",
                      "30",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Secretary",
                      "Bidhannagar",
                      "West_Bengal",
                      "7",
                      "10",
                      "0",
                      "3"
                  ]
              ],
              "parseError": null,
              "parseOptions": {
                  "separator": ",",
                  "thousandsSeparator": ",",
                  "decimalsSeparator": ".",
                  "locale": "en-US",
                  "unstackedData": null,
                  "unstackedColumns": null
              },
              "dataTypes": {
                  "Id": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Income": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Age": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Experience": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Married /Single": "string",
                  "House_Ownership": "string",
                  "Car_Ownership": "string",
                  "Profession": "string",
                  "CITY": "string",
                  "STATE": "string",
                  "CURRENT_JOB_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "CURRENT_HOUSE_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Risk_Flag": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  }
              },
              "chart": "rawgraphs.barchart",
              "mapping": {
                  "bars": {
                      "ids": [
                          "4"
                      ],
                      "value": [
                          "Experience"
                      ],
                      "isValid": true,
                      "mappedType": "number"
                  },
                  "size": {
                      "ids": [
                          "5"
                      ],
                      "value": [
                          "Income"
                      ],
                      "isValid": true,
                      "mappedType": "number",
                      "config": {
                          "aggregation": [
                              "sum"
                          ]
                      }
                  },
                  "series": {
                      "ids": [],
                      "value": [],
                      "isValid": true,
                      "mappedType": "number"
                  }
              },
              "visualOptions": {
                  "width": 805,
                  "height": 600,
                  "background": "#FFFFFF",
                  "marginTop": 20,
                  "marginRight": 10,
                  "marginBottom": 20,
                  "marginLeft": 50,
                  "showLegend": false,
                  "legendWidth": 200,
                  "padding": 1,
                  "barsOrientation": "vertical",
                  "sortBarsBy": "name",
                  "useSameScale": true,
                  "columnsNumber": 0,
                  "sortSeriesBy": "Total value (descending)",
                  "showSeriesLabels": true,
                  "repeatAxesLabels": false,
                  "showGrid": false,
                  "colorScale": {
                      "scaleType": "ordinal",
                      "interpolator": "schemeCategory10",
                      "userScaleValues": [
                          {
                              "range": "#1f77b4",
                              "domain": "default"
                          }
                      ],
                      "defaultColor": "#cccccc"
                  }
              }
          },
          {
              "version": "1.1",
              "userInput": "Id,Income,Age,Experience,Married /Single,House_Ownership,Car_Ownership,Profession,CITY,STATE,CURRENT_JOB_YRS,CURRENT_HOUSE_YRS,,Risk_Flag\r\n1,1303834,23,3,single,rented,no,Mechanical_engineer,Rewa,Madhya_Pradesh,3,13,0,2\r\n2,7574516,40,10,single,rented,no,Software_Developer,Parbhani,Maharashtra,9,13,0,0\r\n3,3991815,66,4,married,rented,no,Technical_writer,Alappuzha,Kerala,4,10,0,0\r\n4,6256451,41,2,single,rented,yes,Software_Developer,Bhubaneswar,Odisha,2,12,1,0\r\n5,5768871,47,11,single,rented,no,Civil_servant,Tiruchirappalli[10],Tamil_Nadu,3,14,1,3\r\n6,6915937,64,0,single,rented,no,Civil_servant,Jalgaon,Maharashtra,0,12,0,0\r\n7,3954973,58,14,married,rented,no,Librarian,Tiruppur,Tamil_Nadu,8,12,0,1\r\n8,1706172,33,2,single,rented,no,Economist,Jamnagar,Gujarat,2,14,0,0\r\n9,7566849,24,17,single,rented,yes,Flight_attendant,Kota[6],Rajasthan,11,11,0,0\r\n10,8964846,23,12,single,rented,no,Architect,Karimnagar,Telangana,5,13,0,2\r\n11,4634680,78,7,single,rented,no,Flight_attendant,Hajipur[31],Bihar,7,12,0,0\r\n12,6623263,22,4,single,rented,no,Designer,Adoni,Andhra_Pradesh,4,14,0,0\r\n13,9120988,28,9,single,rented,no,Physician,Erode[17],Tamil_Nadu,9,12,0,0\r\n14,8043880,57,12,single,rented,no,Financial_Analyst,Kollam,Kerala,8,10,0,1\r\n15,9420838,48,6,single,rented,no,Technical_writer,Madurai,Tamil_Nadu,6,10,1,0\r\n16,5694236,39,2,married,rented,yes,Economist,Anantapuram[24],Andhra_Pradesh,2,10,0,0\r\n17,7315840,71,8,married,rented,no,Air_traffic_controller,Kamarhati,West_Bengal,8,14,0,3\r\n18,3666346,56,12,single,rented,no,Politician,Bhusawal,Maharashtra,12,11,1,0\r\n19,2241112,28,8,single,rented,no,Police_officer,Sirsa,Haryana,6,14,0,0\r\n20,5431918,40,1,single,rented,no,Artist,Amaravati,Andhra_Pradesh,1,14,0,0\r\n21,9225468,54,14,single,rented,no,Surveyor,Secunderabad,Telangana,8,10,0,1\r\n22,6506739,50,4,single,rented,no,Politician,Ahmedabad,Gujarat,4,11,0,0\r\n23,9157379,72,13,single,rented,yes,Design_Engineer,Ajmer,Rajasthan,9,10,0,2\r\n24,9236505,36,19,single,rented,no,Chemical_engineer,Ongole,Andhra_Pradesh,6,14,0,0\r\n25,1065465,23,15,married,rented,no,Hotel_Manager,Miryalaguda,Telangana,4,12,0,0\r\n26,1797876,76,20,single,norent_noown,no,Mechanical_engineer,Erode[17],Tamil_Nadu,11,14,0,0\r\n27,6063428,38,6,married,rented,no,Dentist,Ambattur,Tamil_Nadu,6,13,0,0\r\n28,9643150,24,13,single,rented,no,Comedian,Indore,Madhya_Pradesh,6,14,0,0\r\n29,8832725,64,5,single,rented,no,Biomedical_Engineer,Pondicherry,Puducherry,5,11,1,0\r\n30,4386333,31,16,single,rented,no,Physician,Shimoga,Karnataka,3,12,0,0\r\n31,3939397,52,19,single,rented,yes,Flight_attendant,Chennai,Tamil_Nadu,3,10,0,1\r\n32,6944134,59,5,single,owned,no,Graphic_Designer,Gulbarga,Karnataka,5,11,0,0\r\n33,4128828,21,10,single,rented,no,Computer_hardware_engineer,Khammam,Telangana,10,12,0,2\r\n34,5023035,26,10,single,rented,yes,Petroleum_Engineer,Madurai,Tamil_Nadu,9,13,0,0\r\n35,9086933,55,7,single,rented,no,Air_traffic_controller,Saharanpur,Uttar_Pradesh,7,13,0,0\r\n36,7537675,45,4,single,rented,no,Graphic_Designer,Gopalpur,West_Bengal,4,14,0,0\r\n37,9625415,77,15,married,rented,no,Secretary,Amravati,Maharashtra,9,10,0,0\r\n38,7904011,71,3,single,rented,no,Computer_operator,Udupi,Karnataka,3,11,0,0\r\n39,3540135,78,4,single,rented,no,Biomedical_Engineer,Howrah,West_Bengal,4,11,0,0\r\n40,8739032,55,3,married,rented,no,Politician,Aurangabad[39],Bihar,3,14,0,0\r\n41,3217258,23,12,single,rented,yes,Petroleum_Engineer,Hospet,Karnataka,8,10,0,0\r\n42,2735428,72,20,single,rented,no,Surveyor,Shimla,Himachal_Pradesh,6,14,0,1\r\n43,9760667,63,17,single,rented,no,Chartered_Accountant,Khandwa,Madhya_Pradesh,13,12,1,2\r\n44,8390825,30,11,single,rented,no,Secretary,Bidhannagar,West_Bengal,7,10,0,3\r\n",
              "userInputFormat": "csv",
              "dataSource": {
                  "type": "upload"
              },
              "rawData": [
                  [
                      "1",
                      "1303834",
                      "23",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Mechanical_engineer",
                      "Rewa",
                      "Madhya_Pradesh",
                      "3",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "2",
                      "7574516",
                      "40",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Software_Developer",
                      "Parbhani",
                      "Maharashtra",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "3",
                      "3991815",
                      "66",
                      "4",
                      "married",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Alappuzha",
                      "Kerala",
                      "4",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "4",
                      "6256451",
                      "41",
                      "2",
                      "single",
                      "rented",
                      "yes",
                      "Software_Developer",
                      "Bhubaneswar",
                      "Odisha",
                      "2",
                      "12",
                      "1",
                      "0"
                  ],
                  [
                      "5",
                      "5768871",
                      "47",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Tiruchirappalli[10]",
                      "Tamil_Nadu",
                      "3",
                      "14",
                      "1",
                      "3"
                  ],
                  [
                      "6",
                      "6915937",
                      "64",
                      "0",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Jalgaon",
                      "Maharashtra",
                      "0",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "7",
                      "3954973",
                      "58",
                      "14",
                      "married",
                      "rented",
                      "no",
                      "Librarian",
                      "Tiruppur",
                      "Tamil_Nadu",
                      "8",
                      "12",
                      "0",
                      "1"
                  ],
                  [
                      "8",
                      "1706172",
                      "33",
                      "2",
                      "single",
                      "rented",
                      "no",
                      "Economist",
                      "Jamnagar",
                      "Gujarat",
                      "2",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "9",
                      "7566849",
                      "24",
                      "17",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Kota[6]",
                      "Rajasthan",
                      "11",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "10",
                      "8964846",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Architect",
                      "Karimnagar",
                      "Telangana",
                      "5",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "11",
                      "4634680",
                      "78",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Flight_attendant",
                      "Hajipur[31]",
                      "Bihar",
                      "7",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "12",
                      "6623263",
                      "22",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Designer",
                      "Adoni",
                      "Andhra_Pradesh",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "13",
                      "9120988",
                      "28",
                      "9",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "9",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "14",
                      "8043880",
                      "57",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Financial_Analyst",
                      "Kollam",
                      "Kerala",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "15",
                      "9420838",
                      "48",
                      "6",
                      "single",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Madurai",
                      "Tamil_Nadu",
                      "6",
                      "10",
                      "1",
                      "0"
                  ],
                  [
                      "16",
                      "5694236",
                      "39",
                      "2",
                      "married",
                      "rented",
                      "yes",
                      "Economist",
                      "Anantapuram[24]",
                      "Andhra_Pradesh",
                      "2",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "17",
                      "7315840",
                      "71",
                      "8",
                      "married",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Kamarhati",
                      "West_Bengal",
                      "8",
                      "14",
                      "0",
                      "3"
                  ],
                  [
                      "18",
                      "3666346",
                      "56",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Bhusawal",
                      "Maharashtra",
                      "12",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "19",
                      "2241112",
                      "28",
                      "8",
                      "single",
                      "rented",
                      "no",
                      "Police_officer",
                      "Sirsa",
                      "Haryana",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "20",
                      "5431918",
                      "40",
                      "1",
                      "single",
                      "rented",
                      "no",
                      "Artist",
                      "Amaravati",
                      "Andhra_Pradesh",
                      "1",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "21",
                      "9225468",
                      "54",
                      "14",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Secunderabad",
                      "Telangana",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "22",
                      "6506739",
                      "50",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Ahmedabad",
                      "Gujarat",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "23",
                      "9157379",
                      "72",
                      "13",
                      "single",
                      "rented",
                      "yes",
                      "Design_Engineer",
                      "Ajmer",
                      "Rajasthan",
                      "9",
                      "10",
                      "0",
                      "2"
                  ],
                  [
                      "24",
                      "9236505",
                      "36",
                      "19",
                      "single",
                      "rented",
                      "no",
                      "Chemical_engineer",
                      "Ongole",
                      "Andhra_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "25",
                      "1065465",
                      "23",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Hotel_Manager",
                      "Miryalaguda",
                      "Telangana",
                      "4",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "26",
                      "1797876",
                      "76",
                      "20",
                      "single",
                      "norent_noown",
                      "no",
                      "Mechanical_engineer",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "11",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "27",
                      "6063428",
                      "38",
                      "6",
                      "married",
                      "rented",
                      "no",
                      "Dentist",
                      "Ambattur",
                      "Tamil_Nadu",
                      "6",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "28",
                      "9643150",
                      "24",
                      "13",
                      "single",
                      "rented",
                      "no",
                      "Comedian",
                      "Indore",
                      "Madhya_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "29",
                      "8832725",
                      "64",
                      "5",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Pondicherry",
                      "Puducherry",
                      "5",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "30",
                      "4386333",
                      "31",
                      "16",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Shimoga",
                      "Karnataka",
                      "3",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "31",
                      "3939397",
                      "52",
                      "19",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Chennai",
                      "Tamil_Nadu",
                      "3",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "32",
                      "6944134",
                      "59",
                      "5",
                      "single",
                      "owned",
                      "no",
                      "Graphic_Designer",
                      "Gulbarga",
                      "Karnataka",
                      "5",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "33",
                      "4128828",
                      "21",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Computer_hardware_engineer",
                      "Khammam",
                      "Telangana",
                      "10",
                      "12",
                      "0",
                      "2"
                  ],
                  [
                      "34",
                      "5023035",
                      "26",
                      "10",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Madurai",
                      "Tamil_Nadu",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "35",
                      "9086933",
                      "55",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Saharanpur",
                      "Uttar_Pradesh",
                      "7",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "36",
                      "7537675",
                      "45",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Graphic_Designer",
                      "Gopalpur",
                      "West_Bengal",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "37",
                      "9625415",
                      "77",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Secretary",
                      "Amravati",
                      "Maharashtra",
                      "9",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "38",
                      "7904011",
                      "71",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Computer_operator",
                      "Udupi",
                      "Karnataka",
                      "3",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "39",
                      "3540135",
                      "78",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Howrah",
                      "West_Bengal",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "40",
                      "8739032",
                      "55",
                      "3",
                      "married",
                      "rented",
                      "no",
                      "Politician",
                      "Aurangabad[39]",
                      "Bihar",
                      "3",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "41",
                      "3217258",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Hospet",
                      "Karnataka",
                      "8",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "42",
                      "2735428",
                      "72",
                      "20",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Shimla",
                      "Himachal_Pradesh",
                      "6",
                      "14",
                      "0",
                      "1"
                  ],
                  [
                      "43",
                      "9760667",
                      "63",
                      "17",
                      "single",
                      "rented",
                      "no",
                      "Chartered_Accountant",
                      "Khandwa",
                      "Madhya_Pradesh",
                      "13",
                      "12",
                      "1",
                      "2"
                  ],
                  [
                      "44",
                      "8390825",
                      "30",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Secretary",
                      "Bidhannagar",
                      "West_Bengal",
                      "7",
                      "10",
                      "0",
                      "3"
                  ]
              ],
              "parseError": null,
              "parseOptions": {
                  "separator": ",",
                  "thousandsSeparator": ",",
                  "decimalsSeparator": ".",
                  "locale": "en-US",
                  "unstackedData": null,
                  "unstackedColumns": null
              },
              "dataTypes": {
                  "Id": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Income": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Age": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Experience": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Married /Single": "string",
                  "House_Ownership": "string",
                  "Car_Ownership": "string",
                  "Profession": "string",
                  "CITY": "string",
                  "STATE": "string",
                  "CURRENT_JOB_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "CURRENT_HOUSE_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Risk_Flag": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  }
              },
              "chart": "rawgraphs.barchart",
              "mapping": {
                  "bars": {
                      "ids": [
                          "4"
                      ],
                      "value": [
                          "Experience"
                      ],
                      "isValid": true,
                      "mappedType": "number"
                  },
                  "size": {
                      "ids": [
                          "5"
                      ],
                      "value": [
                          "Income"
                      ],
                      "isValid": true,
                      "mappedType": "number",
                      "config": {
                          "aggregation": [
                              "sum"
                          ]
                      }
                  },
                  "series": {
                      "ids": [],
                      "value": [],
                      "isValid": true,
                      "mappedType": "number"
                  }
              },
              "visualOptions": {
                  "width": 805,
                  "height": 600,
                  "background": "#FFFFFF",
                  "marginTop": 20,
                  "marginRight": 10,
                  "marginBottom": 20,
                  "marginLeft": 50,
                  "showLegend": false,
                  "legendWidth": 200,
                  "padding": 1,
                  "barsOrientation": "vertical",
                  "sortBarsBy": "name",
                  "useSameScale": true,
                  "columnsNumber": 0,
                  "sortSeriesBy": "Total value (descending)",
                  "showSeriesLabels": true,
                  "repeatAxesLabels": false,
                  "showGrid": false,
                  "colorScale": {
                      "scaleType": "ordinal",
                      "interpolator": "schemeCategory10",
                      "userScaleValues": [
                          {
                              "range": "#1f77b4",
                              "domain": "default"
                          }
                      ],
                      "defaultColor": "#cccccc"
                  }
              }
          },
          {
              "version": "1.1",
              "userInput": "Id,Income,Age,Experience,Married /Single,House_Ownership,Car_Ownership,Profession,CITY,STATE,CURRENT_JOB_YRS,CURRENT_HOUSE_YRS,,Risk_Flag\r\n1,1303834,23,3,single,rented,no,Mechanical_engineer,Rewa,Madhya_Pradesh,3,13,0,2\r\n2,7574516,40,10,single,rented,no,Software_Developer,Parbhani,Maharashtra,9,13,0,0\r\n3,3991815,66,4,married,rented,no,Technical_writer,Alappuzha,Kerala,4,10,0,0\r\n4,6256451,41,2,single,rented,yes,Software_Developer,Bhubaneswar,Odisha,2,12,1,0\r\n5,5768871,47,11,single,rented,no,Civil_servant,Tiruchirappalli[10],Tamil_Nadu,3,14,1,3\r\n6,6915937,64,0,single,rented,no,Civil_servant,Jalgaon,Maharashtra,0,12,0,0\r\n7,3954973,58,14,married,rented,no,Librarian,Tiruppur,Tamil_Nadu,8,12,0,1\r\n8,1706172,33,2,single,rented,no,Economist,Jamnagar,Gujarat,2,14,0,0\r\n9,7566849,24,17,single,rented,yes,Flight_attendant,Kota[6],Rajasthan,11,11,0,0\r\n10,8964846,23,12,single,rented,no,Architect,Karimnagar,Telangana,5,13,0,2\r\n11,4634680,78,7,single,rented,no,Flight_attendant,Hajipur[31],Bihar,7,12,0,0\r\n12,6623263,22,4,single,rented,no,Designer,Adoni,Andhra_Pradesh,4,14,0,0\r\n13,9120988,28,9,single,rented,no,Physician,Erode[17],Tamil_Nadu,9,12,0,0\r\n14,8043880,57,12,single,rented,no,Financial_Analyst,Kollam,Kerala,8,10,0,1\r\n15,9420838,48,6,single,rented,no,Technical_writer,Madurai,Tamil_Nadu,6,10,1,0\r\n16,5694236,39,2,married,rented,yes,Economist,Anantapuram[24],Andhra_Pradesh,2,10,0,0\r\n17,7315840,71,8,married,rented,no,Air_traffic_controller,Kamarhati,West_Bengal,8,14,0,3\r\n18,3666346,56,12,single,rented,no,Politician,Bhusawal,Maharashtra,12,11,1,0\r\n19,2241112,28,8,single,rented,no,Police_officer,Sirsa,Haryana,6,14,0,0\r\n20,5431918,40,1,single,rented,no,Artist,Amaravati,Andhra_Pradesh,1,14,0,0\r\n21,9225468,54,14,single,rented,no,Surveyor,Secunderabad,Telangana,8,10,0,1\r\n22,6506739,50,4,single,rented,no,Politician,Ahmedabad,Gujarat,4,11,0,0\r\n23,9157379,72,13,single,rented,yes,Design_Engineer,Ajmer,Rajasthan,9,10,0,2\r\n24,9236505,36,19,single,rented,no,Chemical_engineer,Ongole,Andhra_Pradesh,6,14,0,0\r\n25,1065465,23,15,married,rented,no,Hotel_Manager,Miryalaguda,Telangana,4,12,0,0\r\n26,1797876,76,20,single,norent_noown,no,Mechanical_engineer,Erode[17],Tamil_Nadu,11,14,0,0\r\n27,6063428,38,6,married,rented,no,Dentist,Ambattur,Tamil_Nadu,6,13,0,0\r\n28,9643150,24,13,single,rented,no,Comedian,Indore,Madhya_Pradesh,6,14,0,0\r\n29,8832725,64,5,single,rented,no,Biomedical_Engineer,Pondicherry,Puducherry,5,11,1,0\r\n30,4386333,31,16,single,rented,no,Physician,Shimoga,Karnataka,3,12,0,0\r\n31,3939397,52,19,single,rented,yes,Flight_attendant,Chennai,Tamil_Nadu,3,10,0,1\r\n32,6944134,59,5,single,owned,no,Graphic_Designer,Gulbarga,Karnataka,5,11,0,0\r\n33,4128828,21,10,single,rented,no,Computer_hardware_engineer,Khammam,Telangana,10,12,0,2\r\n34,5023035,26,10,single,rented,yes,Petroleum_Engineer,Madurai,Tamil_Nadu,9,13,0,0\r\n35,9086933,55,7,single,rented,no,Air_traffic_controller,Saharanpur,Uttar_Pradesh,7,13,0,0\r\n36,7537675,45,4,single,rented,no,Graphic_Designer,Gopalpur,West_Bengal,4,14,0,0\r\n37,9625415,77,15,married,rented,no,Secretary,Amravati,Maharashtra,9,10,0,0\r\n38,7904011,71,3,single,rented,no,Computer_operator,Udupi,Karnataka,3,11,0,0\r\n39,3540135,78,4,single,rented,no,Biomedical_Engineer,Howrah,West_Bengal,4,11,0,0\r\n40,8739032,55,3,married,rented,no,Politician,Aurangabad[39],Bihar,3,14,0,0\r\n41,3217258,23,12,single,rented,yes,Petroleum_Engineer,Hospet,Karnataka,8,10,0,0\r\n42,2735428,72,20,single,rented,no,Surveyor,Shimla,Himachal_Pradesh,6,14,0,1\r\n43,9760667,63,17,single,rented,no,Chartered_Accountant,Khandwa,Madhya_Pradesh,13,12,1,2\r\n44,8390825,30,11,single,rented,no,Secretary,Bidhannagar,West_Bengal,7,10,0,3\r\n",
              "userInputFormat": "csv",
              "dataSource": {
                  "type": "upload"
              },
              "rawData": [
                  [
                      "1",
                      "1303834",
                      "23",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Mechanical_engineer",
                      "Rewa",
                      "Madhya_Pradesh",
                      "3",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "2",
                      "7574516",
                      "40",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Software_Developer",
                      "Parbhani",
                      "Maharashtra",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "3",
                      "3991815",
                      "66",
                      "4",
                      "married",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Alappuzha",
                      "Kerala",
                      "4",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "4",
                      "6256451",
                      "41",
                      "2",
                      "single",
                      "rented",
                      "yes",
                      "Software_Developer",
                      "Bhubaneswar",
                      "Odisha",
                      "2",
                      "12",
                      "1",
                      "0"
                  ],
                  [
                      "5",
                      "5768871",
                      "47",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Tiruchirappalli[10]",
                      "Tamil_Nadu",
                      "3",
                      "14",
                      "1",
                      "3"
                  ],
                  [
                      "6",
                      "6915937",
                      "64",
                      "0",
                      "single",
                      "rented",
                      "no",
                      "Civil_servant",
                      "Jalgaon",
                      "Maharashtra",
                      "0",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "7",
                      "3954973",
                      "58",
                      "14",
                      "married",
                      "rented",
                      "no",
                      "Librarian",
                      "Tiruppur",
                      "Tamil_Nadu",
                      "8",
                      "12",
                      "0",
                      "1"
                  ],
                  [
                      "8",
                      "1706172",
                      "33",
                      "2",
                      "single",
                      "rented",
                      "no",
                      "Economist",
                      "Jamnagar",
                      "Gujarat",
                      "2",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "9",
                      "7566849",
                      "24",
                      "17",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Kota[6]",
                      "Rajasthan",
                      "11",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "10",
                      "8964846",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Architect",
                      "Karimnagar",
                      "Telangana",
                      "5",
                      "13",
                      "0",
                      "2"
                  ],
                  [
                      "11",
                      "4634680",
                      "78",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Flight_attendant",
                      "Hajipur[31]",
                      "Bihar",
                      "7",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "12",
                      "6623263",
                      "22",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Designer",
                      "Adoni",
                      "Andhra_Pradesh",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "13",
                      "9120988",
                      "28",
                      "9",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "9",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "14",
                      "8043880",
                      "57",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Financial_Analyst",
                      "Kollam",
                      "Kerala",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "15",
                      "9420838",
                      "48",
                      "6",
                      "single",
                      "rented",
                      "no",
                      "Technical_writer",
                      "Madurai",
                      "Tamil_Nadu",
                      "6",
                      "10",
                      "1",
                      "0"
                  ],
                  [
                      "16",
                      "5694236",
                      "39",
                      "2",
                      "married",
                      "rented",
                      "yes",
                      "Economist",
                      "Anantapuram[24]",
                      "Andhra_Pradesh",
                      "2",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "17",
                      "7315840",
                      "71",
                      "8",
                      "married",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Kamarhati",
                      "West_Bengal",
                      "8",
                      "14",
                      "0",
                      "3"
                  ],
                  [
                      "18",
                      "3666346",
                      "56",
                      "12",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Bhusawal",
                      "Maharashtra",
                      "12",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "19",
                      "2241112",
                      "28",
                      "8",
                      "single",
                      "rented",
                      "no",
                      "Police_officer",
                      "Sirsa",
                      "Haryana",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "20",
                      "5431918",
                      "40",
                      "1",
                      "single",
                      "rented",
                      "no",
                      "Artist",
                      "Amaravati",
                      "Andhra_Pradesh",
                      "1",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "21",
                      "9225468",
                      "54",
                      "14",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Secunderabad",
                      "Telangana",
                      "8",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "22",
                      "6506739",
                      "50",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Politician",
                      "Ahmedabad",
                      "Gujarat",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "23",
                      "9157379",
                      "72",
                      "13",
                      "single",
                      "rented",
                      "yes",
                      "Design_Engineer",
                      "Ajmer",
                      "Rajasthan",
                      "9",
                      "10",
                      "0",
                      "2"
                  ],
                  [
                      "24",
                      "9236505",
                      "36",
                      "19",
                      "single",
                      "rented",
                      "no",
                      "Chemical_engineer",
                      "Ongole",
                      "Andhra_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "25",
                      "1065465",
                      "23",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Hotel_Manager",
                      "Miryalaguda",
                      "Telangana",
                      "4",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "26",
                      "1797876",
                      "76",
                      "20",
                      "single",
                      "norent_noown",
                      "no",
                      "Mechanical_engineer",
                      "Erode[17]",
                      "Tamil_Nadu",
                      "11",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "27",
                      "6063428",
                      "38",
                      "6",
                      "married",
                      "rented",
                      "no",
                      "Dentist",
                      "Ambattur",
                      "Tamil_Nadu",
                      "6",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "28",
                      "9643150",
                      "24",
                      "13",
                      "single",
                      "rented",
                      "no",
                      "Comedian",
                      "Indore",
                      "Madhya_Pradesh",
                      "6",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "29",
                      "8832725",
                      "64",
                      "5",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Pondicherry",
                      "Puducherry",
                      "5",
                      "11",
                      "1",
                      "0"
                  ],
                  [
                      "30",
                      "4386333",
                      "31",
                      "16",
                      "single",
                      "rented",
                      "no",
                      "Physician",
                      "Shimoga",
                      "Karnataka",
                      "3",
                      "12",
                      "0",
                      "0"
                  ],
                  [
                      "31",
                      "3939397",
                      "52",
                      "19",
                      "single",
                      "rented",
                      "yes",
                      "Flight_attendant",
                      "Chennai",
                      "Tamil_Nadu",
                      "3",
                      "10",
                      "0",
                      "1"
                  ],
                  [
                      "32",
                      "6944134",
                      "59",
                      "5",
                      "single",
                      "owned",
                      "no",
                      "Graphic_Designer",
                      "Gulbarga",
                      "Karnataka",
                      "5",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "33",
                      "4128828",
                      "21",
                      "10",
                      "single",
                      "rented",
                      "no",
                      "Computer_hardware_engineer",
                      "Khammam",
                      "Telangana",
                      "10",
                      "12",
                      "0",
                      "2"
                  ],
                  [
                      "34",
                      "5023035",
                      "26",
                      "10",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Madurai",
                      "Tamil_Nadu",
                      "9",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "35",
                      "9086933",
                      "55",
                      "7",
                      "single",
                      "rented",
                      "no",
                      "Air_traffic_controller",
                      "Saharanpur",
                      "Uttar_Pradesh",
                      "7",
                      "13",
                      "0",
                      "0"
                  ],
                  [
                      "36",
                      "7537675",
                      "45",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Graphic_Designer",
                      "Gopalpur",
                      "West_Bengal",
                      "4",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "37",
                      "9625415",
                      "77",
                      "15",
                      "married",
                      "rented",
                      "no",
                      "Secretary",
                      "Amravati",
                      "Maharashtra",
                      "9",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "38",
                      "7904011",
                      "71",
                      "3",
                      "single",
                      "rented",
                      "no",
                      "Computer_operator",
                      "Udupi",
                      "Karnataka",
                      "3",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "39",
                      "3540135",
                      "78",
                      "4",
                      "single",
                      "rented",
                      "no",
                      "Biomedical_Engineer",
                      "Howrah",
                      "West_Bengal",
                      "4",
                      "11",
                      "0",
                      "0"
                  ],
                  [
                      "40",
                      "8739032",
                      "55",
                      "3",
                      "married",
                      "rented",
                      "no",
                      "Politician",
                      "Aurangabad[39]",
                      "Bihar",
                      "3",
                      "14",
                      "0",
                      "0"
                  ],
                  [
                      "41",
                      "3217258",
                      "23",
                      "12",
                      "single",
                      "rented",
                      "yes",
                      "Petroleum_Engineer",
                      "Hospet",
                      "Karnataka",
                      "8",
                      "10",
                      "0",
                      "0"
                  ],
                  [
                      "42",
                      "2735428",
                      "72",
                      "20",
                      "single",
                      "rented",
                      "no",
                      "Surveyor",
                      "Shimla",
                      "Himachal_Pradesh",
                      "6",
                      "14",
                      "0",
                      "1"
                  ],
                  [
                      "43",
                      "9760667",
                      "63",
                      "17",
                      "single",
                      "rented",
                      "no",
                      "Chartered_Accountant",
                      "Khandwa",
                      "Madhya_Pradesh",
                      "13",
                      "12",
                      "1",
                      "2"
                  ],
                  [
                      "44",
                      "8390825",
                      "30",
                      "11",
                      "single",
                      "rented",
                      "no",
                      "Secretary",
                      "Bidhannagar",
                      "West_Bengal",
                      "7",
                      "10",
                      "0",
                      "3"
                  ]
              ],
              "parseError": null,
              "parseOptions": {
                  "separator": ",",
                  "thousandsSeparator": ",",
                  "decimalsSeparator": ".",
                  "locale": "en-US",
                  "unstackedData": null,
                  "unstackedColumns": null
              },
              "dataTypes": {
                  "Id": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Income": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Age": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Experience": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Married /Single": "string",
                  "House_Ownership": "string",
                  "Car_Ownership": "string",
                  "Profession": "string",
                  "CITY": "string",
                  "STATE": "string",
                  "CURRENT_JOB_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "CURRENT_HOUSE_YRS": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  },
                  "Risk_Flag": {
                      "type": "number",
                      "locale": "en-US",
                      "decimal": ".",
                      "group": ",",
                      "numerals": [
                          "0",
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9"
                      ]
                  }
              },
              "chart": "rawgraphs.barchart",
              "mapping": {
                  "bars": {
                      "ids": [
                          "4"
                      ],
                      "value": [
                          "Experience"
                      ],
                      "isValid": true,
                      "mappedType": "number"
                  },
                  "size": {
                      "ids": [
                          "5"
                      ],
                      "value": [
                          "Income"
                      ],
                      "isValid": true,
                      "mappedType": "number",
                      "config": {
                          "aggregation": [
                              "sum"
                          ]
                      }
                  },
                  "series": {
                      "ids": [],
                      "value": [],
                      "isValid": true,
                      "mappedType": "number"
                  }
              },
              "visualOptions": {
                  "width": 805,
                  "height": 600,
                  "background": "#FFFFFF",
                  "marginTop": 20,
                  "marginRight": 10,
                  "marginBottom": 20,
                  "marginLeft": 50,
                  "showLegend": false,
                  "legendWidth": 200,
                  "padding": 1,
                  "barsOrientation": "vertical",
                  "sortBarsBy": "name",
                  "useSameScale": true,
                  "columnsNumber": 0,
                  "sortSeriesBy": "Total value (descending)",
                  "showSeriesLabels": true,
                  "repeatAxesLabels": false,
                  "showGrid": false,
                  "colorScale": {
                      "scaleType": "ordinal",
                      "interpolator": "schemeCategory10",
                      "userScaleValues": [
                          {
                              "range": "#1f77b4",
                              "domain": "default"
                          }
                      ],
                      "defaultColor": "#cccccc"
                  }
              }
          }
      ]
  }
  ),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Handle the API response data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("API call failed:", error);
  });


// const ChartID = "chart 3/";
// const DivID="Mychart_11_3"


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
              <h2>Hello  Welcome to  CreateDashboard page</h2>
               <>
      {/* <div className="content" style={{marginLeft:"-185px"}} > */}
      <div className="content mainContentDiv" style={{marginTop:'-60px'}} >
        
      




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
                        
                      }}
                    >
                      <svg
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
                      </svg>
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
        

        <Row style={{ marginBottom: "30px", width: "100%" }}>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
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
              </CardHeader>
              <CardBody>
                {/* Render chart containers */}
                {chartsData.map((chart, index) => (
                  <div
                    key={chart.chartID}
                    ref={index === 0 ? chartContainerRef : null}
                    style={{
                      width: `${chart.chartWidth}px`,
                      height: `${chart.chartHeight}px`,
                      resize: "both",
                      overflow: "auto",
                      transform: `translate(${chart.chartPosition.x}px, ${chart.chartPosition.y}px)`,
                    }}
                  >
                    <div className="chart-area" id={chart.divID}></div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
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

export default CreateDash;
