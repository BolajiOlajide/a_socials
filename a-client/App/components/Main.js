import React, { Component } from 'react';
import HomePage from './HomePage';
<<<<<<< HEAD
import Event from './events/event/Index';
=======
import SocialClubPage from './SocialClubPage';
>>>>>>> Create socialclub page

/**
 * Renders a component that contains all routes
 * @returns {object} jsx
 */
function Main() {
  return (
<<<<<<< HEAD
    <div>Don't need you.</div>
=======
    <Switch>
      <Route path='/' component={SocialClubPage} />
    </Switch>
>>>>>>> Create socialclub page
  );
}
export default Main;
