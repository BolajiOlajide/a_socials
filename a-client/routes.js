import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/app';
import EventPage from './App/components/events/event/Index';

export default
  <Route path="/" component={App}>
    <Route path="home/clubs/:club_id/events/:id" component={EventPage} />
  </Route>;
