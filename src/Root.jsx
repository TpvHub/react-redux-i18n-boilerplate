import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// pages
import LoginPage from 'pages/login';
import HomePage from 'pages/home';
import UserPage from 'pages/user';
import { NotFound } from 'pages/statics';
import AuthRoute, { userAuth } from 'elements/AuthRoute';

/**
 * All pages has diferrent layout: Header, Footer, SideBar, etc .. should place here
 */

export default function Root() {
  return (
    <div className="Root-App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <AuthRoute path="/user" component={UserPage} middlewares={[
          userAuth
        ]} />
        <Route exact path={['/', '/home']} component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
