import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './Jumbotron';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        {this.props.children}
      </div>
    );
  }
}

export default HomePage;