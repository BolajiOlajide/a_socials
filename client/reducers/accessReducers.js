import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducer for user access or authentication
 * @param {object} [state=initialState.access]
 * @param {object} action
 * @returns {object} access state
 */
function access(state = initialState.access, action) {
  return state;
}

export default access;
