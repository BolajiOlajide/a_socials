import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducer for users
 * @param {array} [state=initialState.users]
 * @param {object} action
 * @returns {array} users state
 */
export function users(state = initialState.users, action) {
  return state;
}

/**
 * Reducer for an individual user
 * @param {object} [state=initialState.user]
 * @param {object} action
 * @returns {object} user state
 */
export function user(state = initialState.user, action) {
  return state;
}
