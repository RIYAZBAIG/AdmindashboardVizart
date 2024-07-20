import React, { useEffect, useState } from "react";
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

function Edituser1() {
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


  
 
  const fetchData = async () => {
    try {
      const response = await axios.get("http://dev.vizart.traversetec.co/api/v1/role/edit/3", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2ZiOTFmYmE0NmQ3OTZmMTFhMjcyNmMwMDA0YmUyNmQ3ZTliMDBiN2YzZTI5NDE5YjcyMjhlNDcwYTBlYjkwOGNlMmQzZjE3NTQzYjY0OGMiLCJpYXQiOjE2OTUzNTQwMzYuODAxNDM0LCJuYmYiOjE2OTUzNTQwMzYuODAxNDM3LCJleHAiOjE3MjY5NzY0MzYuNzk0MzYyLCJzdWIiOiIzMCIsInNjb3BlcyI6W119.HGltzSxCD_aYXiWvYn1WtpH4FmTQYVUoi6YJHuzvPJf-n5b0B1dTpnsuySdfGE0XDVKSwuPqIMOAt4Cs23stMDXDgMuDODW7UeUdcVr0JIQLcd4OpfZSwG06ecvoxFSB7y3dNvIi7C7FljMJOJsl4T0tDqryGSK4kOhRmZtf01dFaILt32EVIObZG_DUsnnyg0dZB6RRisimu790sap3dVJ0LgG4ssGy9QtRdW729KT6XEA03qMVjKqF1ZcZP7GH0FzH0GK677OTxSpg5ouIRSXBMMJPxOwlRKBZqokzHfqh6XHqc6lZDnR45Ol_DOcl6krJMZqi75gZ_wBp5it6HXDyZwFvAbGKtbSKPrOekh_2ddZsmOWpCHoWNbK3Al-goA8HzBIBUD9lpecOtZ2-M2PQNLB2fMn9p6G5jU5QaTlgxuS2sxAhQPnAzyMFNwEzfjdpKWanpVo3JOLcN99QSYZtnUntME8gm7quZHT6XSiELDoFj75yzSkXx3X39rDxxUn2EnJGA2Ep_q6l19lc1IkKlQckvQHAbDTtt6-muX2LPluV3_ejE-nEeivoRE4EMPgi6S950hXcP8C0VJ1kfl-CnBvoi7mE7pVrc4Af3pAE1Ey-fusboR0LD228KBOaXAVanesmRhjtYlie2mGx0Luh9mNvC4n9carPTAxzZiI`, // Include your bearer token
        },
      });
      // Handle the response here
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted!"); // Add this line to check if the function is called
    fetchData();
  };
  

  useEffect(() => {
  }, []);


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
                    <form onSubmit={onSubmit}>
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
                      <Link to="/UpdateRole" >
                      <button
                        type="reset"
                        className="btn btn-success"
                        style={{ margin: "25px", marginLeft: "890px" }}
                        >
                        Update Role
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

export default Edituser1;
