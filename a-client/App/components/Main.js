import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

/**
 * Renders a component that contains all routes
 * @returns {object} jsx
 */
function Main() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  );
}
export default Main;
