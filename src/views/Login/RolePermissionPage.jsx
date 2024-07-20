// import React, { useState } from 'react';
// import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// import routes from 'routes.js';
// import Sidebar from 'components/Sidebar/Sidebar.js';
// import AdminNavbar from 'components/Navbars/AdminNavbar.js';
// import { BackgroundColorContext } from 'contexts/BackgroundColorContext';
// import logo from 'assets/img/react-logo.png';
// import Footer from 'components/Footer/Footer';
// function RolePermissionPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         status: 'Active',
//         allowYourCreation: 'Yes', // Default is set to 'Yes'
//         parentRole: 'Select',
//         level: 'Select',
//         dashboardURL: '',
//     });
//     const location = useLocation();
//     const [sidebarOpened, setsidebarOpened] = useState(
//       document.documentElement.className.indexOf('nav-open') !== -1
//     );

//     const getBrandText = (path) => {
//         for (let i = 0; i < routes.length; i++) {
//           if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
//             return routes[i].name;
//           }
//         }
//         // return 'Brand';
//       };


//       const toggleSidebar = () => {
//         document.documentElement.classList.toggle('nav-open');
//         setsidebarOpened(!sidebarOpened);
//       };


//       const getRoutes = (routes) => {
//         return routes.map((prop, key) => {
//           if (prop.layout === '/admin') {
//             return (
//               <Route path={prop.layout + prop.path} component={prop.component} key={key} />
//             );
//           } else if (prop.layout === '/admin' && prop.path === '/dashboard1') {
//             return (
//               <Route path={prop.layout + prop.path} component={prop.component} key={key} />
//             );
//           } else {
//             return null;
//           }
//         });
//       };


//     const [rightsData, setRightsData] = useState({
//         read: false,
//         write: false,
//         delete: false,
//         // Add more options as needed
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (type === 'checkbox') {
//             setFormData({
//                 ...formData,
//                 [name]: checked,
//             });
//         } else {
//             setFormData({
//                 ...formData,
//                 [name]: value,
//             });
//         }
//     };

//     return (
//       <div>

//         <BackgroundColorContext.Consumer>
//       {({ color, changeColor }) => (
//         <div style={{ display: 'flex', height: '100vh' }}>
//           <div style={{ flex: 1 }}>
//             <Sidebar
//               routes={routes}
//               logo={{
//                 outterLink: 'https://www.creative-tim.com/',
//                 text: 'Creative Tim',
//                 imgSrc: logo,
//               }}
//               toggleSidebar={toggleSidebar}
//             />
//           </div>
//           <div style={{ flex: 4, padding: '20px' }}>
//             <AdminNavbar
//               brandText={getBrandText(location.pathname)}
//               toggleSidebar={toggleSidebar}
//               sidebarOpened={sidebarOpened}
//              />
//             <div className="content mainContentDiv"  >
//             <div className="container" style={{backgroundColor:"rgb(33, 37, 41);", position:"relative",  display:"flex", marginTop:"65px", marginLeft:"-50px" }} >
//             <div className="form-section"  >
//                 {/* <h2  >Add User Roles</h2> */}
//                 <h3 style={{position:"relative", display:'flex', marginLeft:"-15px", marginBottom:"-30PX"}} >User Roles>> </h3>
//                 <p style={{position:"relative", display:'flex', marginLeft:"135px",  padding:"1px",width:"118px"}} >Add User Roles</p>

//                 <button class="btn btn-primary btn-round" style={{position:"relative", display:'flex', marginLeft:"625px", marginBottom:"-25px"}} >User Roles Listing</button>
  
//             {/* <button type="button" style={{position:"relative", display:'flex', marginLeft:"525px", marginBottom:"-25px"}}  >User Roles Listing</button> */}


// <br/><br/>
// <div style={{marginLeft:"185px"}} >
    
//                 <label className="input-label" htmlFor="name">
//                     Name*
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                    className="grid-item" />
//                 </label>  

//                 <label className="input-label" htmlFor="status">
//                     Status*
//                     <select
//                         id="status"
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                     >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                     </select> 
//                 </label>
                
//                   <br/><br/>

//                 <label className="input-label" htmlFor="allow-your-creation">
//                     Allow User Creation:
//                     <select
//                         id="allow-your-creation"
//                         name="allowYourCreation"
//                         value={formData.allowYourCreation}
//                         onChange={handleChange}
//                   className="grid-item"  >
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </label>

//                 <label className="input-label" htmlFor="parent-role">
//                     Parent Role:
//                     <select
//                         id="parent-role"
//                         name="parentRole"
//                         value={formData.parentRole}
//                         onChange={handleChange}
//                     >
//                         <option value="Select">Select</option>
//                         <option value="Role1">Role1</option>
//                         <option value="Role2">Role2</option>
//                         {/* Add more role options as needed */}
//                     </select>
//                 </label> <br/><br/>

//                 <label className="input-label" htmlFor="level">
//                     Level:
//                     <select
//                         id="level"
//                         name="level"
//                         value={formData.level}
//                         onChange={handleChange}
//                   className="grid-item"  >
//                         <option value="Select">Select</option>
//                         <option value="Level1">Level1</option>
//                         <option value="Level2">Level2</option>
//                         {/* Add more level options as needed */}
//                     </select>
//                 </label>

//                 <label className="input-label" htmlFor="dashboard-url">
//                     Dashboard URL:
//                     <input
//                         type="text"
//                         id="dashboard-url"
//                         name="dashboardURL"
//                         value={formData.dashboardURL}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             </div  >

//             <div className="table-section" >
//                 <div className="table" style={{position:"relative", display:"flex", marginTop:"250px",marginLeft:"-660px" }}  >
//                 <table>
//     <tr>
//         <th style={{ paddingRight: '120px' }}>Managing Rights</th>
//         <th style={{ paddingLeft: '20px', paddingRight: '50px' }}>Read</th>
//         <th style={{ paddingLeft: '20px', paddingRight: '50px' }}>Write</th>
//         <th style={{ paddingLeft: '20px' }}>Delete</th>
//         <th style={{ paddingLeft: '20px' }}>More Options</th>
//     </tr>
//     <tr>
//         <th colSpan="5">
//             <input type="checkbox" /> Check All
//         </th>
//     </tr>
//     <tr>
//         <td>Ticket to select / de-select all</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>Dashboard</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>+LOS</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>+Operations</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>+Users</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>+Masters</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>+Configuration</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>Report</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
//     <tr>
//         <td>Collections</td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//         <td><input type="checkbox" /></td>
//     </tr>
    
// </table>


//                 </div>
                
//             </div>

//         </div>
//         <Footer  />
        
//             </div>
//           {/* <Footer/> */}
//           </div>
          
//         </div>
        
        
//       )}
      
//     </BackgroundColorContext.Consumer>
//     <div>
      
//     </div>
//     </div>

//     );
// }

// export default RolePermissionPage;
