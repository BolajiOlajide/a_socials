import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Event from './Index';
import HomePage from './HomePage';
import HomePage2 from './events/event/Index';

const Checker = () => {
  <div>A check</div>
}

/**
 * Renders a component that contains all routes
 * @returns {object} jsx
 */
function Main() {
  return (
    <Switch>
      <Route exact path='/home/' component={HomePage2} />
      <Route path="/home/clubs" component={HomePage2} />
      <Route path="home/clubs/:club_id/events/:id" component={HomePage2} />

    </Switch>
  );
}
export default Main;
