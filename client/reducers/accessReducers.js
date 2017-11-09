import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducer for user access or authentication
 * @param {object} [state=initialState.access]
 * @param {object} action
 * @returns {object} access state
 */
function access(state = initialState.access, action) {
  switch (action.type) {
    case constants.SIGN_IN:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case constants.SIGN_OUT:
      return initialState.access;
    default:
      return state;
  }
}

export default access;
