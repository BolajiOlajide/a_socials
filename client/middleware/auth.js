import * as constants from '../actions/constants';
import axios from 'axios';
import {authenticationFailed} from "../utils/errorHandler";

export const saveTokenMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === constants.SIGN_IN){
    const token = action.response.data.token;
    print('HEADER', `JWT ${token}`)
    axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
    const jwtToSave = JSON.stringify({
      jwt: token
    });
    localStorage.setItem('a_socials', jwtToSave);
    let nextAction = {
      type: constants.SIGN_IN_SUCCESS,
      user: action.response.data.user,
    };
    dispatch(nextAction)
  } else if (action.type === constants.RETRIEVE_USER){
    axios.get('/api/v1/auth/retrieve-user/')
      .then((res) => {
        console.log('Response', res);
        // login(res, constants.SIGN_IN_SUCCESS);
      })
      .catch(error => authenticationFailed(error))
  }

  next(action);
};
