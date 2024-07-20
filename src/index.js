import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Home from "components/Navbars/Home";
import About from "components/Navbars/About";
import Contact from "components/Navbars/Contact";
import Pages from "components/Navbars/Pages";
import Features from "components/Navbars/Features";
import { Eshop } from "components/Navbars/Eshop";
import VizArtLayout from "components/Navbars/VizArtLayout";

import Login from "views/Login";
import SystemUsersLayout from "views/Login/SystemUsersLayout";
import UserRolesLayout from "views/Login/UserRolesLayout";
import RolePermissionPage from "views/Login/RolePermissionPage";
import RolePermissionPageLayout from "views/Login/RolePermissionPageLayout";
import HomeLayout from "components/Navbars/HomeLayout";
import Breadcrumbs from "components/Navbars/Breadcrumbs";
import Footer from "components/Footer/Footer";
import AddUserPage from "views/Login/AddUserPage";
import ShowAll from "views/Login/ShowAll";
import Dashboard11 from "views/Login/Dashboard11";
import Dashboard12 from "views/Login/Dashboard12";
import Dashboard13 from "views/Login/Dashboard13";
import Dashboard1 from "views/DashboardWithID";
import CreateDash from "views/Login/CreateDash";
import ChartSelection from "views/Login/ChartSelection";
import Logout from "views/Login/Logout";
import EditUser from "views/Login/EditUser";
import UserDetails from "views/Login/UserDetails";
import Edituser1 from "views/Login/Edituser1";
import UpdateRole from "views/Login/UpdateRole";
import DeleteUserRole from "views/Login/DeleteUserRole";
import DeleteUserForm from "views/Login/DeleteUserForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>

        <Switch>

          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />

          <Route
            path="/navbars"
            render={(props) => <AdminNavbar {...props}  />}  
            
             />
            
          
            {/* <Route
            path="/Footer"
            render={(props) => <AdminNavbar {...props} />}
          /> */}

          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />

          <Route path="/about" component={About} />
          <Route path="/VizArt" component={VizArtLayout} />

          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} />
          <Route path="/Features" component={Features} />
          <Route path="/Eshop" component={Eshop} />
          <Route path="/SystemUsers" component={SystemUsersLayout} />
          <Route path="/UserRoles" component={UserRolesLayout} />
          <Route path="/UserDetails" component={UserDetails}/>
          <Route path="/edituser1" component={Edituser1}/>
          <Route path="/RolePermissionPage" component={RolePermissionPage} />
          <Route path= "HomeLayout" component={HomeLayout}/>
          <Route path="/addUserPage" component={AddUserPage} />
          <Route path="/editUser" component={EditUser}/>
          <Route path="/deleteUserForm" component={DeleteUserForm}/>
          <Route path="/UpdateRole" component={UpdateRole}/>
          <Route path="/DeleteUserRole" component={DeleteUserRole}/>

          <Route path="/ShowAll" component={ShowAll}/>
          <Route path="/Dashboard11" component={Dashboard11}/>
          <Route path="/Dashboard12" component={Dashboard12}/>
          <Route path="/Dashboard13" component={Dashboard13}/>
          <Route path="/Dashboard1" component={Dashboard1}/>
          <Route path="/CreateDash" component={CreateDash}/>
          <Route path="/ChartSelection" component={ChartSelection}/>
          <Route path="/Logout" component={Logout}/>
          <Route
            path="/RolePermissionPageLayout" component={RolePermissionPageLayout}
          />
          <Redirect from="/" to="/admin/dashboard" />
          
        </Switch>
        {/* <div style={{position:"relative", display:"flex", marginTop:"-665px" , height:"15px" }} >

      <Breadcrumbs style={{height:"5px"}} />
        </div> */}
        
     
      
      </BrowserRouter>
    
      
    </BackgroundColorWrapper>
    
  </ThemeContextWrapper>
);
