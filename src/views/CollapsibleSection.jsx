import React, { useState } from "react";
import Sidebar from "../views/Sidebar";
import routes from "routes";

const CollapsibleSection = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`main-layout ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>

      {/* Sidebar */}
      <Sidebar routes={routes} />

      {/* Main Content */}
      {/* ... Your main content components ... */}
    </div>
  );
};


export default CollapsibleSection;
