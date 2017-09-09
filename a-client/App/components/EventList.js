import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function EventList({ event }){
  return (
    <div className="event">
      <div className="event-image">
        <img width="250px" src={event.featured_image} />
      </div>
      <div className="event-details">
        <h3>{event.title}</h3>
        <div>
          <p>{event.venue}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>
        <div className="event-actions">
          <small>See who's going...</small>
          <button>ATTEND</button>
        </div>
      </div>
    </div>
  );
}

export default EventList;