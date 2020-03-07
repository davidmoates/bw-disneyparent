import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const Login = props => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    axiosWithAuth()
      .post("/api/auth/login", login)
      .then(res => {
        console.log("Login Results", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/parents");
      })
      .catch(err => {
        console.error("Login Error", err.message);
      });
  };

  return (
    <div className="FormCenter">
      {console.log(login)}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className="FormFields"
      >
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            E-Mail Address
          </label>
          <input
            className="FormField__Input"
            type="text"
            name="email"
            value={login.name}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            className="FormField__Input"
            type="password"
            name="password"
            value={login.name}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20" type="submit">
            Login
          </button>
        </div>

      </form>
    </div>
  );
};

export default Login;
