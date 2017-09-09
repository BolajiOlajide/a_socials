import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClub, joinClub } from '../../actions/SocialClubActions';
import PageHeader from './PageHeader';
import EventList from './EventList';
import toastr from 'toastr';

class SocialClubPage extends Component {
  constructor(props){
    super(props);
    this.join = this.join.bind(this);
  }
  componentDidMount() {
    this.props.getClub(3);
    toastr.success('Clubs loaded Successfully');
  }

  join(details={club_id: 3, email: 'ig@uk.com'}){
    this.props.joinClub(details)
    .then(() => {
      toastr.success('You have successfully joined this Club. You will be notified of new events');
    })
    .catch((error) => {
      toastr.error('Aww! Something went wong');
    });
  }

  render(){
    const { name, id, featured_image, events } = this.props.club;
    return (
      <div>
      { name &&
        <PageHeader
          title={name}
          image={featured_image}
          buttonTitle="JOIN CLUB"
          club_id={id}
          joinClub={this.join}
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

export default connect(mapStateToProps, {getClub, joinClub})(SocialClubPage);