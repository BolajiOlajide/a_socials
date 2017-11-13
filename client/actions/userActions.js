import axios from 'axios';
import * as constants from './constants';
import {handleError} from '../utils/errorHandler';

function saveToken(response, type, dispatch) {
  const token = response.token;
  const jwtToSave = JSON.stringify({
    jwt: token
  });
  localStorage.setItem('a_socials', jwtToSave);
  dispatch({
    type,
    user: response.user
  });
}

export function signIn(id_token) {
  return (dispatch) => {
    return axios.post('/api/v1/auth/login/', {'ID_Token': id_token})
      .then((res) => {
        console.log('Response', res)
        if (res.data.error){
          console.log('Error response', res);
          handleError(res.data.error.message, dispatch)
        } else {
          console.log('saveToken')
          saveToken(res.data, constants.SIGN_IN, dispatch);
        }
      });
  };
}
