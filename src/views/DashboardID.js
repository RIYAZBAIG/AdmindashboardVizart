// Dashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';

const dashboardData = [
  {
    id: 1,
    title: 'Dashboard 1',
    content: 'This is the content of Dashboard 1',
  },
  {
    id: 2,
    title: 'Dashboard 2',
    content: 'This is the content of Dashboard 2',
  },
  // Add more dashboard data objects as needed
];

const DashboardID = () => {
  const { id } = useParams(); // Get the 'id' from the URL parameter

  // Find the dashboard object with the matching ID
  const dashboard = dashboardData.find((dashboard) => dashboard.id === parseInt(id));

  // If the dashboard with the provided ID is found, display its content
  if (dashboard) {
    return (
      <div>
        <h2>{dashboard.title}</h2>
        <p>{dashboard.content}</p>
      </div>
    );
  } else {
    // If the dashboard with the provided ID is not found, display an error message
    return <div>Dashboard not found</div>;
  }
};

export default DashboardID;
