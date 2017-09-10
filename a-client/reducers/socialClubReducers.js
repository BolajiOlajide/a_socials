import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducers for socialClubs
 * @param {array} [state=initialState.socialClubs]
 * @param {object} action
 * @returns {array} new state of socialClubs
 */
export function socialClubs(state = initialState.socialClubs, action) {
  console.log(action)
  if (action.type == constants.GET_CLUBS) {
    return action.clubs || state;
  }
  return state;
}

/**
 * Reducers for one socialClub
 * @param {object} state
 * @param {object} action
 * @returns {array} new state of the socialClub
 */
export function socialClub(state = initialState.socialClub, action) {
  if (action.type == constants.GET_CLUB) {
      return action.club;
  }
  return state;
}