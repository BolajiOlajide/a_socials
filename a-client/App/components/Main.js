import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import SocialClubPage from './SocialClubPage';

/**
 * Renders a component that contains all routes
 * @returns {object} jsx
 */
function Main() {
  return (
    <Switch>
      <Route path='/' component={SocialClubPage} />
    </Switch>
  );
}
export default Main;
