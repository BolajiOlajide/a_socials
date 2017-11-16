import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { retrieve_user } from "./actions/userActions";
import configureStore from './store/configureStore';
import routes from './routes';

// styles
import './assets/style.scss';

// store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("app")
);
