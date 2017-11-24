import axios from 'axios';
import { GET_EVENT, JOIN_EVENT } from './constants';
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
        console.log('Resp', res);
        dispatch({
          type: JOIN_EVENT,
          data: res.data
        })
      })
      .catch(error => handleError(error, dispatch));
  };
}

