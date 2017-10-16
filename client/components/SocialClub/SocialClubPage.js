import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { getClub, joinClub } from '../../actions/socialClubActions';
import { sendEvent } from '../../actions/createEventActions';

// components
import PageHeader from './PageHeader';
import EventList from '../Events/EventList';
import toastr from 'toastr';


const attendees = [
  {id: 1, slack_id: '@cent'},
  {id: 2, slack_id: '@proton'},
  {id: 3, slack_id: '@gentlefella'},
  {id: 4, slack_id: '@ignatius'}
]

const clubEvents = [
  {venue: 'Hotel Ibis, Ikeja', date: '20th of June, 2017', time: '2:30px'},
  {venue: 'Hotel Ibis, Ikeja', date: '20th of June, 2017', time: '2:30px'},
  {venue: 'Hotel Ibis, Ikeja', date: '20th of June, 2017', time: '2:30px'}
]

class SocialClubPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      venue: '',
      date: '',
      time: '',
      featured_image: '',
      category_id: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.join = this.join.bind(this);
  }


  componentDidMount() {
    this.props.getClub(3);
    toastr.success('Clubs loaded Successfully');
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      category_id: this.props.club.id
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.sendEvent(this.state)
    .then(() => {
      toastr.success('Event sucessfully created');
    })
    .catch((error) => {
      toastr.error('Aww! Something went wong');
    });
  }

  join(details={'club_id': 3, 'email': 'ig@uk.com'}){
    this.props.joinClub(details)
    .then(() => {
      toastr.success('You have successfully joined this Club. You will be notified of new events');
    })
    .catch((error) => {
      toastr.error('Aww! Something went wong');
    });
  }

  render(){
    const { name, id, featured_image, events, created_by, created_on, description, venue, date, time } = this.props.club;
    return (
      <div>
        <div className="events-page social-club">
          <div>
            <div className="row">
              <div className="col-lg-12">
                <div className="banner"
                     style={{backgroundImage: `url(${featured_image})`}}
                >
                  <div className="info-tag">
                    <div className="info-tag-holder">
                      <div className="title-holder">
                        <div className="header-title">
                          <h2>{name}</h2>
                        </div>
                        <div className="header-meta">
                          For those who wish to stay afloat no matter what
                        </div>
                      </div>

                      <div className="main-cta">
                        <a
                          href="#"
                          className="btn btn-lg btn-primary cta"
                          onClick={this.join}
                        >
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9 main-content">
                      <div className="content">
                        <div className="event-details bordered">


                          <div className="event-list">
                            <div className="event-list-header">
                              Past events
                              <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Create Event</button>






                            </div>
                            <div className="event-list-content">

                              <p className="description">
                                {description}
                              </p>

                            { events &&
                            clubEvents.map(event =>
                              <EventList
                                key={event.id}
                                event={event}
                              />
                            )}
                            </div>
                          </div>





                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 bordered sidebar">
                      <div className="heading">
                        Upcoming events
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

                      <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">

                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Create an Event</h4>
                            </div>
                            <div className="modal-body">

                              <form >

                                <div className="form-group">
                                  <label  htmlFor="title">title</label>
                                  <input value={this.state.title}  onChange={this.onChange} type="" className="form-control" id="title" placeholder="title" name="title"/>
                                </div>

                                <div className="form-group">
                                  <label  htmlFor="description">description</label>
                                  <textarea value={this.state.description}  onChange={this.onChange} className="form-control" rows="7" id="description" placeholder="description" name="description"></textarea>
                                </div>

                                <div className="form-group">
                                  <label  htmlFor="venue">venue</label>
                                  <input value={this.state.venue}  onChange={this.onChange} type="text" className="form-control" id="venue" placeholder="venue" name="venue"/>
                                </div>

                                <div className="form-group">
                                  <label  htmlFor="date">date</label>
                                  <input value={this.state.date}  onChange={this.onChange} type="date" className="form-control" id="date" placeholder="date" name="date"/>
                                </div>

                                <div className="form-group">
                                  <label  htmlFor="time">time</label>
                                  <input value={this.state.time}  onChange={this.onChange} type="time" className="form-control" id="time" placeholder="time" name="time"/>
                                </div>

                                <div className="form-group">
                                  <label  htmlFor="featured_image">featured_image</label>
                                  <input value={this.state.featured_image}  onChange={this.onChange} type="text" className="form-control" id="featured_image" placeholder="featured_image" name="featured_image"/>
                                </div>

                                <div className="modal-footer">
                                  <button type="submit" onClick={this.onSubmit} className="btn btn-default" data-dismiss="modal">Submit</button>
                                </div>

                              </form>

                            </div>
                          </div>
                        </div>
                      </div>

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
  console.log('State', state)
  return {
    club: state.socialClub
  };
}

export default connect(mapStateToProps, {getClub, joinClub, sendEvent})(SocialClubPage);
