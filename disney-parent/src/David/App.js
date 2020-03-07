import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ParentsPage from "./components/ParentsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoutes exact path="/parents" component={ParentsPage} />
      </div>
    </Router>
  );
};

export default App;
