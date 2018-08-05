import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

import { setRedirectUrl } from '../../actions/userActions';


class EnsureLoggedIn extends Component {
  componentDidMount() {
    const {
      setRedirectUrl,
      currentUrl,
      isAuthenticated,
    } = this.props;

    if (!isAuthenticated) {
      setRedirectUrl(currentUrl);
      browserHistory.replace('/');
      toastr.warning('Please sign in to continue');
    }
  }

  render() {
    const { isAuthenticated, children } = this.props;

    if (isAuthenticated) {
      return children;
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.access.isAuthenticated,
  currentUrl: ownProps.location.pathname,
});

export default connect(mapStateToProps, {
  setRedirectUrl,
})(EnsureLoggedIn);
