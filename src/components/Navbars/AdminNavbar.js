import React, { useState } from "react";
import classNames from "classnames";
import { useAuth0 } from "@auth0/auth0-react";
import { Link,  useHistory } from "react-router-dom";
import Breadcrumbs from "components/Navbars/Breadcrumbs";

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";
// import Footer from "components/Footer/Footer";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const history = useHistory();
  const [showNewUI, setShowNewUI] = useState(false);
  const [NewUIComponent, setNewUIComponent] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const [showIframe, setShowIframe] = useState(false);

  const runProject = () => {
    setShowIframe(true);

    const newURL = "http://localhost:5000/admin/VizArt";
    window.history.pushState(null, "", newURL);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });

  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };

  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  const submitForm = async (e) => {
    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async API call
    setIsLoggedIn(true);
  };

  const handleProfileClick = () => {
    setIsLoggedIn(false);
    history.push("./UserProfile1");
  };

  const handleSystemUser = () => {
    window.location.href = "/SystemUsers";
  };

  const handleShowAll = () => {
    window.location.href = "/ShowAll";
  };

  const handleDash = () => {
    window.location.href = "/CreateDash";
  };
  

  const handleUser = () => {
    window.location.href = "/UserRoles";
  };

  const handleLogout = ()=>{
    fetch("http://dev.vizart.traversetec.co/api/v1/user/logout",{
      method:'post',
      headers:{
        authorization: "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDA4ZGQyY2QxOTg2MWNhOTA4ZTU3ZmUyMGE3ZTFlY2RkNDE3N2RkNmVkZTRjYmYwNWJlM2ZjNTQ3YzEwZDVjYWY0NjFkYTY1YmRhYmY2YzAiLCJpYXQiOjE2OTUxOTgzNjAuMzc3Mzk5LCJuYmYiOjE2OTUxOTgzNjAuMzc3NDAxLCJleHAiOjE3MjY4MjA3NjAuMzcwMTA1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.6oMi8bSQSmr3hYnhrMUm6V9qNHRCQZDHorkVwQlFdnUwNsH35aSGXTfakW0vxK3PEe2SmBG6gZtBzxeqv4xjGQfPpWIEiH-WUSFPjYO3zZfbwk-HyuJFXorxArCUSAcl1LnCGCkSVNoaNAfCc8Dz4TbxTsA_tMxZsFb6fRlBIxuhZyNLKtmSEM_IJUqG6_piEGFId2UZittnVdMySW-_7bjPZEWhKUhlNzlzXo_GrbPCSThpkz9BiMOzxJtXYWDN2in0VoyG7n-UpvTqCU0Vtl4FoCcIltdaUAVk2sVwLcPRTY3QPpX-mY1MxkV42m9p-4v_2b05P2gxKgq9vk4CnCY93JeDBSjaBv8fILIz9nPJmxB0SV2blieKvGk9YJkMRUHGIF9tb9oim2Rw2mdg2DnR2AXKUoYbTuoVM-AnYPlI0frXqoCLqElmjJ2ax1_SgVviNlZXH2hMyjHzveecYTJCqh-wiF4w9je1YoFsRHccNCJKjdzldoAgAWZJ51GD_zSqqPIHZksVLRhewrBOQ0om9Jz1t7paiww3e90l8Bvfq9mwifjjDiKocBBgvB0EYdho94trCYrKjWhlJEaB-5VcSU4ChRk58tO4pcZfQDzl6LD900N_imxWJCdlBGYhZheQJlFCfgsVnmq0_sz5zjBehbSQj1nVgxuZmdPUZO0",
        'Content-Type':'application/json',
        // authorization:`Bearer ${bearerToken}`
      }
    })
    .then(res=>{
      if(res.status===200){
        localStorage.removeItem('token');
        window.location.href = "/login";
      }
    })
    .catch(err=>{
      console.log('Error:',err)
    })
}

  const underLine2 = {
    color: "rgb(112, 108, 108)", // Wrap color value in quotes
    transition: "10s", // Wrap transition value in quotes
    display: "inline-block",
    position: "relative",
  };
  
  return (
    <  >

    
      <Navbar className={classNames("navbar-absolute", color)} expand="lg  bg-primary"   >
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {/* {props.brandText} */}
              {props.DASHVIZ}

            </NavbarBrand>

            
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="mr-auto" navbar  >
              <div
                className="A"
                style={{
                  position: "relative",
                  display: "flex",
                  marginRight: "500px",
                }}
              >
                <li className="nav-item"></li>
              </div>


              
              
              <UncontrolledDropdown nav style={{marginTop:'2px'}}  >
                <DropdownToggle
                  caret
                  tag="div"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    marginTop: "5px",

                  }}
                  
                >
                  Home
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={handleShowAll}>
                    Show All
                  </DropdownItem>
                  {/* <DropdownItem onClick={handleUser}>User Roles</DropdownItem> */}
                  <DropdownItem onClick={handleDash}>
                    Create Dashboard
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

{/*           
                <li className="nav-item"  >
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li> */}
              

              <div style={underLine2}>
             
              
              </div>

            


              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages">
                  Pages
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Eshop">
                  Eshop
                </Link>
              </li> */}

              <UncontrolledDropdown nav style={{marginTop:"2px"}} >
                <DropdownToggle
                  caret
                  tag="div"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    marginTop: "5px",
                  }}
                >
                  Users
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={handleSystemUser}>
                    System User
                  </DropdownItem>
                  <DropdownItem onClick={handleUser}>User Roles</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/VizArt">
                  VizArt
                </Link>
              </li> */}

              <div style={{ marginTop: "7px" }}>
                <li onClick={runProject}>VizArt</li>
              </div>

              {/* Conditionally render the iframe */}
              {showIframe && (
                <iframe
                  title="VizArt Project"
                  src="http://localhost:5001/"
                  width="1400px"
                  height="1000px"
                  frameBorder="0"
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "-1030px",
                    marginTop: "70px",
                  }}
                />
              )}

              {/* Notifications Dropdown */}
              <UncontrolledDropdown nav>
                {/* ... Dropdown content ... */}
              </UncontrolledDropdown>

              {/* User Profile Dropdown */}
              <UncontrolledDropdown nav>
                {/* ... Dropdown content ... */}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          {/* Search Bar */}
          {/* <InputGroup className="search-bar">
            <Button color="link" onClick={toggleModalSearch}>
              <i className="tim-icons icon-zoom-split" />
              <span className="d-lg-none d-md-block">Search</span>
            </Button>
          </InputGroup> */}

<form class="form-inline ml-auto">
          <div class="form-group no-border">
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
          <button type="submit" class="btn btn-link btn-icon btn-round">
              <i class="tim-icons icon-zoom-split"></i>
          </button>
      </form>

          <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle
                tag="div"
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#5e72e4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >


                  {/* R.B */}


                  <button class="btn btn-primary btn-fab btn-icon btn-round">
  <i class="tim-icons icon-heart-2"></i>
</button>
                  
                </div>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem onClick={handleProfileClick}>
                  Profile
                </DropdownItem>
                {/* <Link to="/Logout" > */}
                <DropdownItem onClick={handleLogout}>
                  Logout
                  </DropdownItem>
                {/* </Link> */}
              </DropdownMenu>
            </Dropdown>
            
          </div>
          
        </Container>
        
      </Navbar>
      <div style={{position:'relative', display:'flex', marginTop:'58px'}} >
      <Breadcrumbs/>

      </div>
      {/* <div style={{position:"relative", display:'flex', marginTop:"1125px"}} >
        <Footer/>
      </div>
       */}
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
          
        </ModalHeader>
     
      </Modal>
    
    </>
    
  );
}

export default AdminNavbar;
