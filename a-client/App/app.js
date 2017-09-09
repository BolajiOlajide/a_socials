import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

import './assets/style.scss'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;