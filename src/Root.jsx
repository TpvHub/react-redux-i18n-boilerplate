import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// pages
import LoginPage from 'pages/login';
import HomePage from 'pages/home';
import UserPage from 'pages/user';
import { NotFound } from 'elements/statics';

export default function Root() {
  return (
    <div className="Root-App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/user" component={UserPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
