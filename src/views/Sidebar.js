import React, { useState } from 'react';
import { NavItem } from 'reactstrap';
import routes from 'routes';
function Sidebar() {
  const [isCollapsibleCollapsed, setIsCollapsibleCollapsed] = useState(false);

  const handleCollapsibleToggle = () => {
    setIsCollapsibleCollapsed(!isCollapsibleCollapsed);
  };

  return (
    <div className="sidebar"  >
      <NavItem onClick={handleCollapsibleToggle}>
      </NavItem>
      {routes.map((route, index) => {
        if (route.path === "/CollapsibleSection") {
          return (
            <NavItem
              // ... other NavItem props
              isCollapsed={isCollapsibleCollapsed}
            >
              {/* ... NavItem content */}
            </NavItem>
          );
        } else {
          return (
            <NavItem
              // ... other NavItem props
              isCollapsed={isCollapsibleCollapsed && route.isCollapsed}   
            >
              {/* ... NavItem content */}
            </NavItem>
          );
        }
      })}
    </div>
  );
}

