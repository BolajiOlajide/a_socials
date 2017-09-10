import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import featuredImage from '../../../assets/img/img_1.jpg';
import ClubInfo from './ClubInfo';
import { getEvent, joinEvent } from '../../../../actions/eventActions';
import { joinClub } from '../../../../actions/socialClubActions';
import toastr from 'toastr';

class EventPage extends Component {
  constructor(props){
    super(props);
    this.joinThisClub = this.joinThisClub.bind(this);
    this.joinThisEvent = this.joinThisEvent.bind(this);
  }
  // TODO: There will be two API calls here
  // To get the clicked event and a recommended event
  componentDidMount(){
    this.props.getEvent();

  }

  joinThisClub(details={'club_id': 3, 'email': 'ig@uk.com'}){
    this.props.joinClub(details)
    .then(() => {
      toastr.success('You have successfully joined this Club. You will be notified of new events');
    })
    .catch((error) => {
      toastr.error('Aww! Something went wong');
    });
  }

  joinThisEvent(details={'event_id': 1, 'club_id': 3, 'email': 'ig@uk.com'}){
    this.props.joinEvent(details)
    .then(() => {
      toastr.success('You have successfully subscribed. You will get notifications on this event');
    })
    .catch((error) => {
      toastr.error('Aww! Something went wong');
    });
  }

  render() {
    const { featured_image, title, attendees, created_by, created_on,
      description, venue, date, time, club_id } = this.props.event;
    return (
      <div className="events-page">
        <ClubInfo joinClub={this.joinThisClub} />
        <div>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner"
                   style={{backgroundImage: `url(${featured_image})`}}
              >
                <div className="info-tag">
                  <div className="header-title">
                    <h2>{title}</h2>
                  </div>
                  <div className="header-meta">
                    Created by {created_by}  on {created_on}
                  </div>

                  <div className="main-cta">
                    <a
                      href="#"
                      className="btn btn-lg btn-primary cta"
                      onClick={this.joinThisEvent}
                    >
                      I am attending
                    </a>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 main-content">
                    <div className="content">
                    <div className="event-details bordered">
                      <p className="description">
                        {description}
                      </p>
                      <table className="table borderless">
                        <tbody>
                          <tr>
                            <td>Venue:</td>
                            <td>{venue}</td>
                          </tr>
                          <tr>
                            <td>Date:</td>
                            <td>{date}</td>
                          </tr>
                          <tr>
                            <td>Time:</td>
                            <td>{time}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h3>Who is attending?</h3>
                      <ul className="member-list">
                        {
                          attendees &&
                          attendees.map(attendee =>
                            <li key={attendee.id}> {attendee.slack_id} </li>
                          )
                        }
                      </ul>

                      <div className="main-cta">
                        <a href="#" className="btn btn-lg btn-primary cta">
                          Join this event
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>


                  <div className="col-lg-3 bordered sidebar">
                    <div className="heading">
                      Recommended Event
                    </div>
                    <div className="preview-card"
                         style={{backgroundImage: `url(${featured_image})`}}>
                      <div>Reserve a space</div>
                    </div>

                    <div className="content">
                      <p><b>Venue: </b>{venue}</p>
                      <p><b>Date: </b>{date}</p>
                      <p>
                      {
                          attendees &&
                          attendees.map(attendee =>
                            <span key={attendee.id}> {attendee.slack_id},</span>
                          )
                        }
                      <span> have already indicated interest.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    event: state.event
  };
}

export default connect(mapStateToProps, { getEvent, joinClub, joinEvent })(EventPage);