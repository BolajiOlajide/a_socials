import axios from 'axios';
import * as constants from './constants';
import { handleError } from "../utils/errorHandler";

export function getClubs(socialClubs) {
  return {
    type: constants.GET_CLUBS,
    clubs: socialClubs
  }
}

export function getAllClubs() {
  return (dispatch) => {
    return axios.get('/api/v1/categories/')
      .then((socialClubs) => {
        dispatch(getClubs(socialClubs.data.results));
      })
      .catch(error => handleError(error, dispatch));
  };
}

export function getClub(club_id) {
  return (dispatch) => {
    return axios.get(`/api/v1/category/${club_id}/events/`)
      .then((res) => {
        dispatch({
          type: constants.GET_CLUB,
          club: res.data
        });
      })
      .catch(error => handleError(error, dispatch));
  };
}

export function joinClub(details) {
  return (dispatch) => {
    return axios.post('/api/v1/join/', details)
      .then((res) => {
        console.log('Res', res);
      })
      .catch(error => handleError(error, dispatch));
  };
}
