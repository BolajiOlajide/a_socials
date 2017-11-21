import axios from 'axios';
import { SET_REDIRECT_URL, SIGN_OUT, SIGN_IN } from './constants';
import { authenticationFailed } from '../utils/errorHandler';

export function login(response, type){
  return {
    response,
    type
  };
}

export function setRedirectUrl(url){
  return {
    type: SET_REDIRECT_URL,
    url
  };
}

export function signOut(){
  return {
    type: SIGN_OUT
  };
}

export function signIn(id_token){
  return (dispatch) => {
    return axios.post('/api/v1/auth/login/', {'ID_Token': id_token})
      .then((res) => {
        dispatch(login(res, SIGN_IN));
      })
      .catch(error => authenticationFailed(error));
  };
}
