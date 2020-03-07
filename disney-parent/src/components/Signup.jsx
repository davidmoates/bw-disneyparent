import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { Input, Button, Form } from "./Styled";

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
      <div>
        <h2>Signup</h2>
      </div>
      <div>
        <Form onSubmit={register}>
          <h2>Disney Parents</h2>

          <Input
            type="text"
            name="email"
            placeholder="Email"
            required="required"
            value={signup.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            value={signup.password}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="name"
            placeholder="Family Name"
            required="required"
            value={signup.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="number_of_kids"
            placeholder="Number of Kids"
            required="required"
            value={signup.number_of_kids}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="ride"
            placeholder="The Ride to Meet"
            required="required"
            value={signup.ride}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="time"
            placeholder="The Time to Meet"
            required="required"
            value={signup.time}
            onChange={handleChange}
          />

          <div>
            <Button>Sign up</Button>
            <Button>Login Page</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
