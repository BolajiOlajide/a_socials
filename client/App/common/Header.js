import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top nav-menu no-margin no-padding">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/home" className="navbar-brand">Andela Socials</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    number: state
  };
}

export default connect(mapStateToProps)(Header);