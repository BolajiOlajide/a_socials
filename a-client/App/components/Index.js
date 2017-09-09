import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Event extends Component {
  render() {
    return (
      <div>
        <p>Something different</p>
        {this.props.children}
      </div>
    );
  }
}

export default Event;