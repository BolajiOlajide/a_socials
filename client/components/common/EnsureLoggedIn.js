import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {setRedirectUrl} from "../../actions/userActions";


class EnsureLoggedIn extends Component {

  componentDidMount() {
    const { setRedirectUrl, currentUrl, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      setRedirectUrl(currentUrl);
      browserHistory.replace("/");
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return this.props.children
    } else {
      return null
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.access.isAuthenticated,
    currentUrl: ownProps.location.pathname
  }
}

export default connect(mapStateToProps, { setRedirectUrl })(EnsureLoggedIn);
