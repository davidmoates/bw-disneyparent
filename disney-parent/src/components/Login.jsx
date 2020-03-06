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
    <>
      {console.log(login)}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          value={login.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.name}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
