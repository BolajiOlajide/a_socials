import axios from 'axios';
import { GET_CLUB, GET_CLUBS, JOIN_CLUB } from './constants';
import { handleError } from "../utils/errorHandler";

export function getClubs(socialClubs) {
  return {
    type: GET_CLUBS,
    payload: socialClubs,
    error: false
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
          type: GET_CLUB,
          payload: res.data,
          error: false
        });
      })
      .catch(error => handleError(error, dispatch));
  };
}

export function joinClub(details) {
  return (dispatch) => {
    return axios.post('/api/v1/join/', details)
      .then((res) => {
        dispatch({
          type: JOIN_CLUB,
          payload: res.data,
          error: false
        })
      })
      .catch(error => handleError(error, dispatch));
  };
}
