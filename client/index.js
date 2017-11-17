import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {login} from "./actions/userActions";
import configureStore from './store/configureStore';
import {RETRIEVE_USER} from "./actions/constants";
import routes from './routes';

// styles
import './assets/style.scss';

// store
const store = configureStore();

if (localStorage.getItem('a_socials')) {
  store.dispatch(login('response', RETRIEVE_USER));
}

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("app")
);
