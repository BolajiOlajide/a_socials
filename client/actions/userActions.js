import axios from 'axios';
import * as constants from './constants';
import {authenticationFailed, handleError, throwError} from '../utils/errorHandler';

export function login(response, type){
  return {
    response,
    type
  };
}


export function retrieve_user(jwt){
  axios.post('/api/v1/auth/token-verify/', {'token': jwt})
    .then((res) => {
      console.log('Response', res);
      login(res, constants.SIGN_IN_SUCCESS);
    })
    .catch(error => authenticationFailed(error))
}

export function signIn(id_token){
  return (dispatch) => {
    return axios.post('/api/v1/auth/login/', {'ID_Token': id_token})
      .then((res) => {
        dispatch(login(res, constants.SIGN_IN));
      })
      .catch(error => authenticationFailed(error));
  };
}
