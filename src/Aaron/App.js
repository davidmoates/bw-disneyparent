import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Navbar from "./pages/NavBar/Navbar.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <div className="App">
            //========================= Old Navigation Code
            ==============================// //{" "}
            <div className="App__Aside"></div>
            //{" "}
            <div className="App__Form">
              //{" "}
              <div className="PageSwitcher">
                //{" "}
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                //{" "}
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
                //{" "}
              </div>
              //=============================================================================//
              
              </div>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoutes exact path="/parents" component={ParentsPage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
