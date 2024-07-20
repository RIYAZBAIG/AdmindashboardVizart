import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer";
import routes from "routes.js";
import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function UpdateUser() {
  const [selectedOption, setSelectedOption] = useState("Dropdown button");
  const [bearerToken,setBearerToken] = useState(localStorage.getItem('token'));
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    role: "",
    employeeId: "",
    userId: "",
    reportingManager: "",
    products: "",
    locationType: "",
    location: "",
    recordVisibility: "",
    level: "",
    committee: "",
    uuid: "",
    remarks: "",
    status: ""
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

  const submitHandler = async(event) => {
    event.preventDefault();
    try {
      const info = JSON.stringify(UpdateUser);
    fetch("http://dev.vizart.traversetec.co/api/v1/user/update",{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        authorization:`Bearer ${bearerToken}`
      },
      body:info
    })
    .then(output=>output.json())
    .then(res=>{
      if(res.status === 200){
        window.location.href='/UpdateUser'
      }
    })
    } catch (error) {
      console.log('error',error)
    }
    
    // .catch(err=>)
   };

  const options = ["Action", "Another action", "Something else here"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
                    <form onSubmit={submitHandler}>
                      {/* Title */}
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="Empid">Empid</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="employeeId"
                              name="employeeId"
                              placeholder="Enter Empid"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="First">First Name</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="firstName"
                              name="firstName"
                              placeholder="Enter First Name"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="Empid">Userid</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="Userid"
                              name="userId"
                              placeholder="Enter Userid"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="Last">Last Name</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="lastName"
                              name="lastName"
                              placeholder="Enter Last Name"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="Email">Email</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Enter Email"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="password">Password</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="Con_password">Confirme password</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="password_confirmation"
                              name="password_confirmation"
                              placeholder="Enter password again"
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* <div className="col-md-6">
                            <label htmlFor="User Id">User Id</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id='userId'
                              name="userId"
                              placeholder="Enter User Id"
                              onChange={handleInputChange}
                            />
                          </div> */}
                        
                          <div className="col-md-6">
                            <label htmlFor="MobileNo">Mobile No.</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="mobile"
                              name="mobile"
                              placeholder="Enter Mobile No."
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="Products">Products</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="products"
                              name="products"
                              placeholder="Enter Products"
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="col-md-6">
                            <label htmlFor="Location">Location</label> <br />
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="location"
                              name="location"
                              placeholder="Enter Location"
                              onChange={handleInputChange}
                            />
                          </div>
                          <br /><br />
                         
                       
                        
                          <div className="col-md-6">
                            <label htmlFor="uuid">UUID</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="uuid"
                              name="uuid"
                              placeholder="Enter UUID"
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="col-md-6">
                            <label htmlFor="remarks">Remarks</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="remarks"
                              name="remarks"
                              placeholder="Enter Remarks"
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="col-md-6">
                            <label htmlFor="status">status</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="status"
                              name="status"
                              placeholder="Enter Status"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6" >
                            <label htmlFor="committee">Committee</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="committee"
                              name="committee"
                              placeholder="Enter Committee"
                              onChange={handleInputChange}
                            />
                          </div>

                          
                          <div className="row">
  <div className="col-md-6">
    <label htmlFor="Location Type" style={{margin:"25px"}} >Location Type</label>
    <select
      name="locationType"
      value={locationType}
      onChange={(e) => setLocationType(e.target.value)}
    >
      {/* <option value="">Select Location Type</option> */}
      <option value="office">"1"</option>
      <option value="remote">"2"</option>
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="Proficiency" style={{margin:"25px"}}>Proficiency</label>
    <select
      name="Proficiency"
      value={proficiency}
      onChange={(e) => setProficiency(e.target.value)}
    >
      {/* <option value="">Select Proficiency</option> */}
      <option value="expert">Expert</option>
      <option value="intermediate">Intermediate</option>
      <option value="beginner">Beginner</option>
    </select>
  </div>

  <div className="col-md-6" style={{marginTop:"50px"}} >
    <label htmlFor="Record Visibility" style={{margin:"25px"}}>Record Visibility</label>
    <select
      name="recordVisibility"
      value={recordVisibility}
      onChange={(e) => setRecordVisibility(e.target.value)}
    >
      <option value="">Select Record Visibility</option>
      <option value="public">my-team</option>
      <option value="private">Private</option>
    </select>
  </div>

  <div className="col-md-6" style={{marginTop:"50px"}}>
    <label htmlFor="Role" style={{margin:"25px"}}>Role</label>
    <select
      name="Role"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="admin">"3"</option>
      <option value="manager">"4"</option>
      <option value="employee">"5"</option>
    </select>
  </div>

  <div className="col-md-6" style={{marginTop:"50px"}}>
    <label htmlFor="Reporting Manager" style={{margin:"25px"}}>Reporting Manager</label>
    <select
      name="Reporting Manager"
      value={manager}
      onChange={(e) => setManager(e.target.value)}
    >
      <option value="Andrel Russel">Andrel Russel</option>
      <option value="M.S. Dhoni">M.S. Dhoni</option>
      <option value="V. S Laxman">V. S Laxman</option>
    </select>
  </div>

  <div className="col-md-6"style={{marginTop:"50px"}}>
    <label htmlFor="Level" style={{margin:"25px"}} >Level</label>
    <select
      name="Level"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    >
      <option value="Level-1">Level-1</option>
      <option value="Level-2">Level-2</option>
      <option value="Level-3">Level-3</option>
    </select>
  </div>
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

export default UpdateUser;
