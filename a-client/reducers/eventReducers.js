import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducers for all events in a socialClub
 * @param {array} [state=initialState.events]
 * @param {object} action
 * @returns {array} new state of events
 */
// export function events(state = initialState.events, action) {
//   return state;
// }

/**
 * Reducers for one event
 * @param {object} state
 * @param {object} action
 * @returns {array} new state of the event
 */
// export function event(state = initialState.event, action) {
//   return state;
// }

export function number(state=initialState.number, action) {
   if (action.type == constants.DISPLAY) {
     console.log('Action', action)
      return state + action.figure;
  }
  return state;
}

