import React, { Component } from 'react';
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
