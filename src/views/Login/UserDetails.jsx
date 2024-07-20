import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import EditUser from "../Login/EditUser";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer";
import routes from "routes.js";
import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function UserDetails() {
  const [selectedOption, setSelectedOption] = useState("Dropdown button");
  const [responseMessage, setResponseMessage] = useState(null);
  const [bearerToken,setBearerToken] = useState(localStorage.getItem('token'));
  const [newUser, setNewUser] = useState({
    name: "",
    allow_user_creation: "",
  
  });
  
  
  const [recordVisibility, setRecordVisibility] = useState("");
  const [locationType, setLocationType] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [role,setRole] = useState("");
  const [manager,setManager]= useState("");
  const [level,setLevel] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
  };

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpened(!sidebarOpened);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://dev.vizart.traversetec.co/api/v1/role/create',
        {
          // Include any data you want to send in the request body here
          // For example, if you need to send JSON data:
          // key1: 'value1',
          // key2: 'value2',
        }
      );

      // Assuming the response contains a message field
      setResponseMessage(response.data.message);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('API Error:', error);
    }
  };


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
             
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={fetchData}>
                      {/* Title */}
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="Empid">Name</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="First"> allow_user_creation</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="allow_user_creation"
                              name="allow_user_creation"
                              placeholder="allow_user_creation "
                              onChange={handleInputChange}
                            />
                          </div>
                                               </div>
                      </div>

                      {/* Add other input fields */}
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <Link to="/Edituser1" >
                      <button
                        type="reset"
                        className="btn btn-success"
                        style={{ margin: "25px", marginLeft: "890px" }}
                        >
                        Edituser
                      </button>
                          </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default UserDetails;
