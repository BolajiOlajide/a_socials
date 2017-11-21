import React, { Component } from 'react';
import { connect } from 'react-redux';

require('dotenv').config();

// actions
import { signIn } from '../../actions/userActions';


class LoginPage extends Component {
  constructor(props){
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.initializeAuth = this.initializeAuth.bind(this);
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.initializeAuth);
  }

  initializeAuth() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.CLIENT_ID,
        hosted_domain: process.env.G_SUITE_DOMAIN,
        ux_mode: 'popup',
      });
    });
  }

  onSignIn() {
    let googleAuth = gapi.auth2.getAuthInstance();
    if (googleAuth) {
      googleAuth.signIn()
        .then((googleUser) => {
          let id_token = googleUser.getAuthResponse().id_token;
          this.props.signIn(id_token)
        });
    }
  }

  render() {
    return (
      <div className="auth-page">
        <img className="andela" src="http://res.cloudinary.com/proton/image/upload/v1510947117/Condensed-white_qudkxm.png" />
        <div className="welcome-text">
          <p> SOCIALIZE MORE WITHIN <span className="bold"> ANDELA </span> </p>
        </div>
        <div className="image-holder">
          <img src="http://res.cloudinary.com/proton/image/upload/v1509311455/andrew-ly-152166_w5ffs9.jpg" className="featured-meetup" />
        </div>
        <div className="button">
          <button type="submit" id="button" onClick={this.onSignIn}>SIGN IN</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { signIn })(LoginPage);
