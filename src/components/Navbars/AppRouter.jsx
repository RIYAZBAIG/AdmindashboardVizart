import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"; // Import your Home component
import Contact from "./Contact"; // Import your Contact component
import About from "./About";
import SystemUsers from "views/Login/SystemUsers";
import EditUser from "views/Login/EditUser";
// ... Import other components
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path= "/SystemUsers" exact component={SystemUsers}/>
        <Route path="/EditUser" exact component={EditUser}/>
        {/* Define other routes for your components */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
