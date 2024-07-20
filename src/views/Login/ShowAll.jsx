import React, { useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import { NavItem } from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import axios from 'axios';
import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";
const ShowAll = () => {

  const [apiData, setApiData] = useState(null);

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
  

    
  // Function to make the API call
  const fetchData = async () => {
    try {
      // Replace 'your_token' with your actual authentication token if needed
      const response = await axios.post(
        'http://dev.vizart.traversetec.co/api/v1/chart/lists',
        {
         
        },
        {
          // Include any headers required for authentication here
          headers: {
           
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYThmOWMxYzEyMzBiYjExOTYyMmE2MzI4ZTExZmU2ZjUzMzllMjFkODk1ZDhmNzNmMzlmYTEwNjRhZGIwMTU4ZjM1Y2Q5ZDNmYzU1MGMxYTciLCJpYXQiOjE2OTUyNjIwMTAuNjMwNDksIm5iZiI6MTY5NTI2MjAxMC42MzA0OTIsImV4cCI6MTcyNjg4NDQxMC42MTQwNiwic3ViIjoiNyIsInNjb3BlcyI6W119.LWEJBanv8p6bKPEaNUzwNHLIm4IIf8GUo_vzd11lmnImGJ7yH2oIz6hoBiFXvP0AOC8bn_2JBqnGT9LNIZa9IicgGZf8zfuovm5i9sYQdWiHNfAfSVnKMyvc0STyPY4RE_OMSyjkEAXDmXz3MmY98-SYw9EEJO6YjTrrDo9A3mcR3_lNai5auz19X5_W70fs-F-ukgFeSdvJ2_5QUv6blyMN919bG5OWBPDLk_9wwLm9OOqChKdkVWy5FgSodaRMGlPd0fhgmwdjsD_uz55nxiIAVmh23UYFwuI0aiZC3NqIcE1b-kRwURIsiMW-qGNxnOb4V4mmnjGnnd3t9t1GVY8TTyt9jNq7yAXueP1DFjdJEeltflvIWSs-eskBEiJbEgdpgN4PO7rGgZFxYIJL5Qhr9h8wcPALMFqpERylvbZGViRYpmjjL5TG533v0Yq9tbmbwzdAGu5WI1XbTpkPKcMOaRiLjGvBI1G6i_PGjt68ihUDq_oZ4NRqMdfkpmsdCX0dcizt9JRcTza0i6t4X396XtDZIxJFmTeAguJR05NqPvBVtxPPxJhkeQ5s4dBzflt5bmCuEqkUAMlj7otK3Y1j80D3IGFhhctoFf3xolUbWRm_vAbcykmhD3TuA_n-zqu_H2eRoPXp59-v8vR2Qbn2YiHYXPVXdtDw6L9vK5w',
            'Content-Type': 'application/json', // Set the content type if needed
          },
        }
      );

      // Set the API response data in the state
      setApiData(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('API Error:', error);
    }
  };



    useEffect(() => {
      fetchData();
    }, []); 

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
              <h2>  List Of Dashboard</h2>
              <Link to="/admin/admindashboard">Go to Admin Dashboard</Link>

              
      <table class="table">
    <thead>
        <tr>
            <th class="text-center">Sr No</th>
            <th>Name Of The Users</th>
            <th>Chart Id</th>
            <th>Div Id</th>
            <th class="text-right">Dashboard</th>
            <th class="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="text-center">1</td>
            <td>Andrew Russel</td>
            <td>CHART1</td>
            <td>Mychart_11_1</td>
            <td class="text-right"   >
                 <Link to="/Dashboard11" >
                 Dashboard-1
                 </Link>
                 </td>
            <td class="td-actions text-right">
                <button type="button" rel="tooltip" class="btn btn-info btn-sm btn-icon">
                    <i class="tim-icons icon-single-02"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-success btn-sm btn-icon">
                    <i class="tim-icons icon-settings"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon">
                    <i class="tim-icons icon-simple-remove"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td class="text-center">2</td>
            <td>Jana Doe</td>
            <td>CHART2</td>
            <td>Mychart_11_2</td>
            <td class="text-right">
            <Link to="/Dashboard12" >
                 Dashboard-2
                 </Link>
            </td>
            <td class="td-actions text-right">
              <button type="button" rel="tooltip" class="btn btn-info btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-single-02"></i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-success btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-settings"></i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-simple-remove"></i>
              </button>
            </td>
        </tr>
        <tr>
            <td class="text-center">3</td>
            <td>Alex Murage</td>
            <td>CHART3</td>
            <td>Mychart_11_3</td>
            <td class="text-right">
            <Link to="/Dashboard13" >
                 Dashboard-3
                 </Link>
                </td>
            <td class="td-actions text-right">
                <button type="button" rel="tooltip" class="btn btn-info btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-single-02"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-success btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-settings"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-simple-remove"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
            </div>
          </div>
          

<Footer/>
        
          </div>

      </React.Fragment>
    )}
  </BackgroundColorContext.Consumer>
   
  )
}

export default ShowAll;
