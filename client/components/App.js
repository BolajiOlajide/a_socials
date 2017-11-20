import React, { Component } from 'react';

// components
import Header from './common/Header';
import Footer from './common/Footer';

import '../assets/style.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.location.pathname === '/' ? null : <Header />}
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
