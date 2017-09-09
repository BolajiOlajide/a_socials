import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/app';
import EventPage from './App/components/events/event/Index';

import EventPage from './App/components/events/event/Index';
import HomePage from './App/components/HomePage';
import SocialClubPage from './App/components/SocialClubPage';

export default
  <Route path="/" component={App}>
  	<Route path="/home" component={HomePage} />
  	<Route path="/home/clubs" component={SocialClubPage} />
    <Route path="home/clubs/:club_id/events/:id" component={EventPage} />
  </Route>;
