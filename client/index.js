import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import routes from './routes';
import axios from 'axios';

// styles
import './assets/style.scss';

// store
const { persistor, store } = configureStore();

if (localStorage.getItem('a_socials')) {
  const token = JSON.parse(localStorage.getItem('a_socials'));
  const jwt = token.jwt;
  axios.defaults.headers.common['Authorization'] = `JWT ${jwt}`;
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router routes={routes} history={browserHistory} />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
