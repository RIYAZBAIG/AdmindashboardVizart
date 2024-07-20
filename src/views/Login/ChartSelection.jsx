import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import { NavItem } from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import axios  from "axios";
import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";


import Modal from 'react-modal';

// Define the styles for your modal content
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '400px',
  },
};
const ChartSelection = () => {
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



  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(true);
  };

  



  const submitData = () => {
    // Define the data you want to send in the POST request
    const postData = {
      // Define your request payload here
      // For example, if you have form data, you can include it here
    };

    // const headers = {
    //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDA4ZGQyY2QxOTg2MWNhOTA4ZTU3ZmUyMGE3ZTFlY2RkNDE3N2RkNmVkZTRjYmYwNWJlM2ZjNTQ3YzEwZDVjYWY0NjFkYTY1YmRhYmY2YzAiLCJpYXQiOjE2OTUxOTgzNjAuMzc3Mzk5LCJuYmYiOjE2OTUxOTgzNjAuMzc3NDAxLCJleHAiOjE3MjY4MjA3NjAuMzcwMTA1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.6oMi8bSQSmr3hYnhrMUm6V9qNHRCQZDHorkVwQlFdnUwNsH35aSGXTfakW0vxK3PEe2SmBG6gZtBzxeqv4xjGQfPpWIEiH-WUSFPjYO3zZfbwk-HyuJFXorxArCUSAcl1LnCGCkSVNoaNAfCc8Dz4TbxTsA_tMxZsFb6fRlBIxuhZyNLKtmSEM_IJUqG6_piEGFId2UZittnVdMySW-_7bjPZEWhKUhlNzlzXo_GrbPCSThpkz9BiMOzxJtXYWDN2in0VoyG7n-UpvTqCU0Vtl4FoCcIltdaUAVk2sVwLcPRTY3QPpX-mY1MxkV42m9p-4v_2b05P2gxKgq9vk4CnCY93JeDBSjaBv8fILIz9nPJmxB0SV2blieKvGk9YJkMRUHGIF9tb9oim2Rw2mdg2DnR2AXKUoYbTuoVM-AnYPlI0frXqoCLqElmjJ2ax1_SgVviNlZXH2hMyjHzveecYTJCqh-wiF4w9je1YoFsRHccNCJKjdzldoAgAWZJ51GD_zSqqPIHZksVLRhewrBOQ0om9Jz1t7paiww3e90l8Bvfq9mwifjjDiKocBBgvB0EYdho94trCYrKjWhlJEaB-5VcSU4ChRk58tO4pcZfQDzl6LD900N_imxWJCdlBGYhZheQJlFCfgsVnmq0_sz5zjBehbSQj1nVgxuZmdPUZO0`,
   
    // };
  
    // Make the POST request
    fetch('http://dev.vizart.traversetec.co/api/v1/chart/lists',  { method: 'POST',
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDA4ZGQyY2QxOTg2MWNhOTA4ZTU3ZmUyMGE3ZTFlY2RkNDE3N2RkNmVkZTRjYmYwNWJlM2ZjNTQ3YzEwZDVjYWY0NjFkYTY1YmRhYmY2YzAiLCJpYXQiOjE2OTUxOTgzNjAuMzc3Mzk5LCJuYmYiOjE2OTUxOTgzNjAuMzc3NDAxLCJleHAiOjE3MjY4MjA3NjAuMzcwMTA1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.6oMi8bSQSmr3hYnhrMUm6V9qNHRCQZDHorkVwQlFdnUwNsH35aSGXTfakW0vxK3PEe2SmBG6gZtBzxeqv4xjGQfPpWIEiH-WUSFPjYO3zZfbwk-HyuJFXorxArCUSAcl1LnCGCkSVNoaNAfCc8Dz4TbxTsA_tMxZsFb6fRlBIxuhZyNLKtmSEM_IJUqG6_piEGFId2UZittnVdMySW-_7bjPZEWhKUhlNzlzXo_GrbPCSThpkz9BiMOzxJtXYWDN2in0VoyG7n-UpvTqCU0Vtl4FoCcIltdaUAVk2sVwLcPRTY3QPpX-mY1MxkV42m9p-4v_2b05P2gxKgq9vk4CnCY93JeDBSjaBv8fILIz9nPJmxB0SV2blieKvGk9YJkMRUHGIF9tb9oim2Rw2mdg2DnR2AXKUoYbTuoVM-AnYPlI0frXqoCLqElmjJ2ax1_SgVviNlZXH2hMyjHzveecYTJCqh-wiF4w9je1YoFsRHccNCJKjdzldoAgAWZJ51GD_zSqqPIHZksVLRhewrBOQ0om9Jz1t7paiww3e90l8Bvfq9mwifjjDiKocBBgvB0EYdho94trCYrKjWhlJEaB-5VcSU4ChRk58tO4pcZfQDzl6LD900N_imxWJCdlBGYhZheQJlFCfgsVnmq0_sz5zjBehbSQj1nVgxuZmdPUZO0`, // Include the bearer token in the request headers
      'Content-Type': 'application/json', // Set the content type as JSON if needed
    },})
      .then(response => {
        // Handle a successful response here
        console.log('POST request successful', response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error making POST request', error);
      });
  };
  


  return (
    <BackgroundColorContext.Consumer   >
    {({ color, changeColor }) => (
      
      <React.Fragment  >
       
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
            <div     >
             
              <div style={{ textAlign: "center"  }}>

               
      
      <div  >
      <h1>Admin Dashboard</h1>
      {/* <button  class=" btn btn-primary btn-round"   onClick={openModal}  >Open Modal</button> */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* Modal Content */}
        <h2  >Modal Title</h2>
        <p>Modal content goes here.</p>
        <div class="card">
  <div class="card-body" style={{marginBottom:"25px"}} >
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>

<br />


    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>

<div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>

    </div>
    <br />
    


  </div>
</div>
        <button onClick={closeModal}>Close</button>
        <button onClick={submitData}>Submit</button>

      </Modal>
    </div>


      <br></br>
     

     

     
      
    </div>
            </div>

          </div>
          
          

<Footer/>
        
          </div>
          

      </React.Fragment>
    )}
  </BackgroundColorContext.Consumer>
  );
};

export default ChartSelection;
