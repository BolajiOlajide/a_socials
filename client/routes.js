import React from 'react';
import { Route, IndexRoute } from 'react-router';

// components
import App from './components/App';
import EventPage from './components/Events/index';
import HomePage from './components/HomePage/HomePage';
import SocialClubPage from './components/SocialClub/SocialClubPage';

export default
  <Route path="/" component={App}>
  	<Route path="/home" component={HomePage} />
  	<Route path="/home/clubs/:id" component={SocialClubPage} />
    <Route path="home/clubs/:club_id/events/:id" component={EventPage} />
  </Route>;
