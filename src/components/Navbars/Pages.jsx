import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import logo from "assets/img/react-logo.png";
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";
import Footer from "components/Footer/Footer";
const About = () => {
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

  // Define a list of pages
  const pages = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      title: "Profile",
      path: "/admin/UserProfile1",
    },
    {
      title: "Settings",
      path: "/admin/settings",
    },
    // Add more pages as needed
  ];

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
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
              <div className="content mainContentDiv">
                {/* <h2>Hello from Pages page</h2> */}
                <h3>List of Pages:</h3>
                <ul>
                  {pages.map((page, index) => (
                    <li key={index}>
                      <a href={page.path}>{page.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Footer/>
          </div>
         
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
};

export default About;
