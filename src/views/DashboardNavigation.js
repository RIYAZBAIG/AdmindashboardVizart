import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "routes";

const DashboardNavigation = () => {
  const [currentDashboard, setCurrentDashboard] = useState(1);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    setCurrentDashboard((prev) => (prev < 10 ? prev + 1 : 1));
    navigate(`/dashboard${currentDashboard}`);
  };

  return (
    <div>
      <p>Current Dashboard: {currentDashboard}</p>
      {routes.map((route) => {
        const { Dashboard1, name } = route;
        return (
          <Link
            key={Dashboard1}
            to={Dashboard1}
            onClick={Dashboard1 === "/dashboard1" ? handleDashboardClick : null}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardNavigation;
