import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import Jumbotron from '../common/jumbotron';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Jumbotron />
        {this.props.children}
      </div>
    );
  }
}

export default HomePage;
