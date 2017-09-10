import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClub } from '../../actions/SocialClubActions';
import PageHeader from './PageHeader';
import EventList from './EventList';

class SocialClubPage extends Component {
  componentDidMount() {
    this.props.getClub();
  }
  render(){
    const { meta, events } = this.props.club;
    return (
      <div>
      { meta &&
        <PageHeader
          title={meta.name}
          image={meta.featured_image}
          buttonTitle="JOIN CLUB"
        />}
        <div className="event-list">
          <div className="event-list-header">
            <h2>Upcoming Events</h2>
            <button>Create Event</button>
          </div>
          { events &&
            events.map(event =>
            <EventList
              key={event.id}
              event={event} 
            />
            )} 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('State', state)
  return {
    club: state.socialClub
  };
}

export default connect(mapStateToProps, {getClub})(SocialClubPage);