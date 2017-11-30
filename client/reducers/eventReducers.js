import { GET_EVENT, SIGN_OUT } from '../actions/constants';
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
export function event(state = initialState.event, action) {
  switch(action.type) {
    case GET_EVENT:
      return action.payload;
    case SIGN_OUT:
      return initialState.event;
    default:
      return state;
  }
}


