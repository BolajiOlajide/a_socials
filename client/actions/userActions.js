import axios from 'axios';
import * as constants from './constants';
import {authenticationFailed, handleError, throwError} from '../utils/errorHandler';

export function login(response, type){
  return {
    response,
    type
  };
}

export function setRedirectUrl(url){
  return {
    type: constants.SET_REDIRECT_URL,
    url
  };
}

export function signOut(){
  return {
    type: constants.SIGN_OUT
  };
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
