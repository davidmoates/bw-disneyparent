
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class SignUpForm extends Component {

  state = {
  username: "",
  password: "",
  email: "",
  hasAgreed:false
  // accountType: "parent"
};

//========================  Old COnstructor Function Code  ===========================//
  // constructor() {
  //     super();
  //
  //     this.state = {
  //         email: '',
  //         password: '',
  //         name: '',
  //         hasAgreed: false
  //     };
  //
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  // }
//================================================================//


  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://disney-parent-bw-2.herokuapp.com`,
        this.state
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data === 201) {
          console.log("Thank you, please log in");
        }
      });
  };

//=========================  Old Handle Change/Submit Code  ===================================//
  // handleChange(e) {
  //     let target = e.target;
  //     let value = target.type === 'checkbox' ? target.checked : target.value;
  //     let name = target.name;
  //
  //     this.setState({
  //       [name]: value
  //     });
  // }
  //
  // handleSubmit(e) {
  //     e.preventDefault();
  //
  //     console.log('The form was submitted with the following data:');
  //     console.log(this.state);
  // }

  //============================================================//

  render() {
      return (
      <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="FormField">
              <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
              </label>
            </div>

            <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
            </div>
          </form>
        </div>
      );
  }
}

export default SignUpForm;
