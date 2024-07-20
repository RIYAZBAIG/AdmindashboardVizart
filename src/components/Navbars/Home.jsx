import React, { useState } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import routes from 'routes.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import { BackgroundColorContext } from 'contexts/BackgroundColorContext';
import logo from 'assets/img/react-logo.png';
import Footer from 'components/Footer/Footer';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const [sidebarOpened, setsidebarOpened] = useState(
    document.documentElement.className.indexOf('nav-open') !== -1
  );

  const buttonStyle = {
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    // return 'Brand';
  };

  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    setsidebarOpened(!sidebarOpened);
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route path={prop.layout + prop.path} component={prop.component} key={key} />
        );
      } else if (prop.layout === '/admin' && prop.path === '/dashboard1') {
        return (
          <Route path={prop.layout + prop.path} component={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ flex: 1 }}>
            <Sidebar
              routes={routes}
              logo={{
                outterLink: 'https://www.creative-tim.com/',
                text: 'Creative Tim',
                imgSrc: logo,
              }}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div style={{ flex: 4, padding: '20px' }}>
            <AdminNavbar
              brandText={getBrandText(location.pathname)}
              toggleSidebar={toggleSidebar}
              sidebarOpened={sidebarOpened}
            />
            <div className="content mainContentDiv">
              <div style={{ textAlign: 'center', marginTop:"85px" }}>
                <header style={{ backgroundColor: 'rgb(33, 37, 41);', color: 'white', padding: '20px', marginRight:"125px" }}>
                  <h1>Welcome to My Home Page</h1>
                </header>
                <main style={{ padding: '20px' }}>
                  <p>This is some content on your home page.</p>
                  <button
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Animate Me
                  </button>
                </main>
              </div>
            </div>
            
          </div>
          
        </div>
        
      )}
      
    </BackgroundColorContext.Consumer>
  );
}

export default Home;
