import React from 'react';
import { Route, IndexRoute } from 'react-router';

// components
import App from './components/App';
import LoginPage from './components/HomePage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import EventPage from './components/Events/index';
import SocialClubPage from './components/SocialClub/SocialClubPage';
import EnsureLoggedIn from "./components/common/EnsureLoggedIn";
import NotFound from "./components/common/NotFound";


export default
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />

    <Route component={EnsureLoggedIn}>
      <Route path="/home" component={HomePage} />
      <Route path="/clubs/:id" component={SocialClubPage} />
      <Route path="/clubs/:club_id/events/:id" component={EventPage} />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>;
