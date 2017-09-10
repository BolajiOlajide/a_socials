import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClub, joinClub } from '../../actions/socialClubActions';
import { sendEvent } from '../../actions/createEventActions';
import PageHeader from './PageHeader';
import EventList from './EventList';
import toastr from 'toastr';


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
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Create Event</button>
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

export default connect(mapStateToProps, {getClub, joinClub, sendEvent})(SocialClubPage);