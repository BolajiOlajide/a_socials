import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/app';
import Homepage from './App/components/HomePage';
import EventPage from './App/components/events/event/Index';

export default
  <Route path="/home" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="home/clubs/:club_id/events/:id" component={EventPage} />
  </Route>;
