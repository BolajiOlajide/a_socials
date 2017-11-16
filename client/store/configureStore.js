import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { saveTokenMiddleware } from '../middleware/auth';


const middleware = [thunk, saveTokenMiddleware];

/**
 * Single Store
 * @param {object} initialState
 * @returns {function} store configuration
 */
const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  );
};

export default configureStore;
