import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ParentsPage from "./components/ParentsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside"></div>

        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Login
            </NavLink>

            <NavLink
              exact
              to="/"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </NavLink>
          </div>
          <h2 className="FormTitle">Disney Parents</h2>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes exact path="/parents" component={ParentsPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
