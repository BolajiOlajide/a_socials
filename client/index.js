import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import './App/assets/style.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("app")
);