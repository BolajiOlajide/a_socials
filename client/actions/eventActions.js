import axios from 'axios';
import { GET_EVENT, JOIN_EVENT, CREATE_EVENT_SUCCESS } from './constants';
import { handleError } from "../utils/errorHandler";

export function getEvent(event_id) {
  return (dispatch) => {
    return axios.get(`/api/v1/event/${event_id}`)
      .then((res) => {
        dispatch({
          type: GET_EVENT,
          details: res.data
        });
      })
      .catch(error => handleError(error, dispatch));
  };
}

export function joinEvent(details) {
  return (dispatch) => {
    return axios.post('/api/v1/attend', details)
      .then((res) => {
        dispatch({
          type: JOIN_EVENT,
          data: res.data
        })
      })
      .catch(error => handleError(error, dispatch));
  };
}


export function createEvent(eventData) {
  return (dispatch) => {
    return axios.post('/api/v1/create/event', eventData)
      .then((res) => {
        dispatch({
          type: CREATE_EVENT_SUCCESS,
          event: res.data
        })
      })
      .catch(error => handleError(error, dispatch));
  };
}
