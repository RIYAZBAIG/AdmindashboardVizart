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

function DeleteUserRole() {
  const [selectedOption, setSelectedOption] = useState("Dropdown button");
  const [responseMessage, setResponseMessage] = useState(null);
  const [bearerToken,setBearerToken] = useState(localStorage.getItem('token'));
  const [newUser, setNewUser] = useState({
    name: "",
    allow_user_creation: "",
  
  });
  
  

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

 
  const fetchData = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make an Axios POST request to the API endpoint
      const response = await axios.post(
        "http://dev.vizart.traversetec.co/api/v1/role/delete/7",
        newUser, // Send the newUser object as the request body
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmRlY2RkYmVmMDJjNTU1NWE3MTIxN2FhNWYxODdmZmYzZDEyODNkNTcwYzAxMTQ0OWYzMjIwZjY2ZTBiNTBjM2Y5ZjdlNDUzNzcwNTE3ODIiLCJpYXQiOjE2OTUxMzgzNjUuMjg1NTMzLCJuYmYiOjE2OTUxMzgzNjUuMjg1NTM1LCJleHAiOjE3MjY3NjA3NjUuMjc3OTY4LCJzdWIiOiIyOCIsInNjb3BlcyI6W119.GswaLMkwQAaKPbZNJwjO9GZJTgPzkgscpdvf4iWOnswbk_X-ap9FkfahH9mjhEe4rLBTH_BoZC7vN308lqYRnbcwE_VriqCrioVxp36pYpLgkzKRer1kl1Xr-a5WKROfXG9NBZBFoW3rj-ikjorhB1H2WkgpudCHHHedye-xHthw9doKQZdjGbY27pTyFYrW13nJbZyc6FarirJ2EzutdvNrsMDYLUAyUC2XgrIsDSk7MlZdWPHxUMBBb763dQNAMPPLm7IdBvzQa4w6_3arBOBprvMYy6VQyhwCTt-9EJP66mY2Rr0ksDAIHCmbdmlegLuUSsZPxUgWUg1lSTdrUdm8gdngycu7V2Ev0cVA2sTIIGfJ06-WzOlvYZG9aQsv68Yp6llUnrQk7JfWDJvX5rFCwt9MbPd6uYFasR-54bY-Gl8kXRzeeNrrLvuUSjTiQmnxRqqpzkQOuHJwocimOA83OsuHh8S9Y7xrK7VIexewBwYvPK94ovgmlpxdAShuI17VYVd0lRRyCNQZAflYTDG0XfeoSf90u9zFBo23rwO79bBicLvFvg1gGzwXbibFGPW1-y8hWhoojTtBHzV5iauY4OqeXGhSkQ-jYB2qmdVKC7QQGKxggYrbmIByOH_hG4YCccsZYkz26tVIDRH5ynGd0yQzOqqom2ikD7aMwRY`, // Include the bearer token in the request headers
        'Content-Type': 'application/json', // Set the content type as JSON if needed
         
        },
        }
      );

      // Handle the response here (e.g., show a success message)
      if (response.status === 200) {
        setResponseMessage("User data updated successfully.");
      } else {
        setResponseMessage("Failed to update user data.");
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error updating user data:", error);
      setResponseMessage("Failed to update user data.");
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
                      <button
                        type="reset"
                        className="btn btn-success"
                        style={{ margin: "25px", marginLeft: "890px" }}
                      >
                        Cancel
                      </button>
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

export default DeleteUserRole;
