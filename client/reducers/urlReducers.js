import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducer for setting redirectUrl
 * @param {string} [state=initialState.access]
 * @param {object} action
 * @returns {object} redirectUrl state
 */
function url(state = initialState.redirectUrl, action) {
  switch (action.type) {
    case constants.SET_REDIRECT_URL:
      return action.url;
    default:
      return state;
  }
}

export default url;
