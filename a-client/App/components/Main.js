import React, { Component } from 'react';
import HomePage from './HomePage';
import Event from './events/event/Index';
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
