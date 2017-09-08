import React, { Component } from 'react';
import Header from './common/Header';
import Main from './components/Main';
import Footer from './common/Footer';

import './assets/style.css'


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;