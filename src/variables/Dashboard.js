import React from "react";
import { Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import PieChart from "./ApiFetch1";
// import Chart from "./Chart";

const Dashboard = () => {
  return (
    <>
      <div className="content mainContentDiv">
        <Row>
          <Col md="6">
            <div className="chart-area">
              <Line
                data={chartExample1.data1}
                options={chartExample1.options}
              />
              <Line
                data={chartExample1.data2}
                options={chartExample1.options}
              />
              <Line
                data={chartExample1.data3}
                options={chartExample1.options}
              />
            </div>
          </Col>
          <Col md="6">
            <div className="chart-area">
              <Line
                data={chartExample2.data1}
                options={chartExample2.options}
              />
              <Line
                data={chartExample2.data2}
                options={chartExample2.options}
              />
              <Line
                data={chartExample2.data3}
                options={chartExample2.options}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="chart-area">
              <PieChart />
              {/* <Chart/> */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
