import { GET_CLUBS, GET_CLUB, CREATE_EVENT_SUCCESS, SIGN_OUT } from '../actions/constants';
import initialState from './initialState';

/**
 * Reducers for socialClubs
 * @param {array} [state=initialState.socialClubs]
 * @param {object} action
 * @returns {array} new state of socialClubs
 */
export function socialClubs(state = initialState.socialClubs, action) {
  switch(action.type){
    case GET_CLUBS:
      return action.clubs;
    case SIGN_OUT:
      return initialState.socialClubs;
    default:
      return state;
  }
}

/**
 * Reducers for one socialClub
 * @param {object} state
 * @param {object} action
 * @returns {array} new state of the socialClub
 */
export function socialClub(state = initialState.socialClub, action) {
  switch(action.type){
    case GET_CLUB:
      return action.club;
    case CREATE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        events: state.events.concat(action.event)
      });
    case SIGN_OUT:
      return initialState.socialClub;
    default:
      return state;
  }
}
