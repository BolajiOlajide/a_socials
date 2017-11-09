import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { signIn } from '../../actions/userActions';


class LoginPage extends Component {

  constructor(props){
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.renderLoginButton);
  }

  onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    this.props.signIn(id_token);
  }

  onFailure(error) {
    console.log(error);
  }

  renderLoginButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn,
      'onfailure': this.onFailure
    });
  }

  render() {
    return (
      <div className="auth-page">
        <img src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/558826-625de22961eeaa0f85618a784e1d5a81-medium_jpg.jpg?buster=1444152051" alt="Andela logo" />
        <div id="my-signin2" />
        <h1>Work Hard! Code Hard! Play Harder!!!</h1>
      </div>
    );
  }
}

export default connect(null, { signIn })(LoginPage);
