import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialClubPage extends Component {
  render(){
    return (
      <div>
        <PageTitle title={name} buttonTitle="JOIN" />
        <h2>Events</h2>
        <button>Create New Event</button>
        <EventList events={event} />
      </div>
    );
  }
}

export default SocialClubPage;