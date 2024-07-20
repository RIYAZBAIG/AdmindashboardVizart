import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import { BackgroundColorContext } from 'contexts/BackgroundColorContext';
import logo from 'assets/img/react-logo.png';
import axios from "axios";
import { Grid, Card, CardContent, Typography, Rating } from "@mui/material";
import routes from "routes";
 export const Eshop = () => {
    const [data, setData] = useState([]);
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const location = useLocation();

    const getData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        setData(result.data);
    };

    useEffect(() => {
        getData();
    }, []);

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
        setSidebarOpened(!sidebarOpened);
    };

    return (
        <BackgroundColorContext.Consumer>
            {({ color, changeColor }) => (
                <div style={{ display: 'flex', height: '100vh'}}>
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
                    <div style={{ flex: 4, padding: '20px'  }}>
                        <AdminNavbar
                            brandText={getBrandText(location.pathname)}
                            toggleSidebar={toggleSidebar}
                            sidebarOpened={sidebarOpened}
                        />

                        <React.Fragment  >
                            {/* <h2>Hello Eshop page</h2> */}
                            <div style={{position:"relative", display:"flex", marginTop:"75px", marginLeft:"-20px"}} >

                            <Grid container spacing={2}>
                                {data.map((item) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                <h1> Price:- $
                                                {item.price} 

                                                </h1>
                                                <br />
                                                      <h3>
                                                      title:-
                                                    {item.title}
                                                      </h3>
                                                    <img src={item.image} alt={item.title} height="140px" width="150px" />
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <h2> Category
                                                      :-
                                                       {item.category}</h2>
                                                    {item.description}
                                                    <h4>
                                                    {item.rating.rate}

                                                    </h4>
                                                    <h4>
                                                    {/* {item.rating.count} */}
                                                    <Rating value={item.rating.rate}/>


                                                    </h4>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            </div>

                        </React.Fragment>
                    </div>
                </div>
            )}
        </BackgroundColorContext.Consumer>
    );
};


