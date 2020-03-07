import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const Signup = props => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    name: "",
    number_of_kids: "",
    ride: "",
    time: ""
  });

  const handleChange = ev => {
    setSignup({
      ...signup,
      [ev.target.name]: ev.target.value
    });
  };

  const register = ev => {
    ev.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", signup)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/parents");
      })
      .catch(error => console.log(error));
    setSignup({ signup: "" });
    console.log(signup);
  };

  return (
    <div>
      <div className="FormCenter">
        <form onSubmit={register} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label">Email</label>
            <input
              className="FormField__Input"
              type="text"
              name="email"
              required="required"
              value={signup.email}
              onChange={handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">Password</label>
            <input
              className="FormField__Input"
              type="password"
              name="password"
              required="required"
              value={signup.password}
              onChange={handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">Family Name</label>
            <input
              className="FormField__Input"
              type="text"
              name="name"
              required="required"
              value={signup.name}
              onChange={handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">Number of Kids</label>
            <input
              className="FormField__Input"
              type="text"
              name="number_of_kids"
              required="required"
              value={signup.number_of_kids}
              onChange={handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">The Ride to Meet</label>
            <input
              className="FormField__Input"
              type="text"
              name="ride"
              required="required"
              value={signup.ride}
              onChange={handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">The Time to Meet</label>
            <input
              className="FormField__Input"
              type="text"
              name="time"
              required="required"
              value={signup.time}
              onChange={handleChange}
            />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20" type="submit">
              Sign-Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
