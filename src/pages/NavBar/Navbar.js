import React from 'react';
import { Route } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';

const NavBar = () => (
  <div>
      <Route path="/SignInForm" component={SignInForm}>A</Route>
      <Route path="/SignUpForm" component={SignUpForm} >Contact</Route>
  </div>
);

export default NavBar;
