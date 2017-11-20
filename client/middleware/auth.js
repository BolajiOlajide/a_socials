import * as constants from '../actions/constants';
import axios from 'axios';

export const saveTokenMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === constants.SIGN_IN){
    const token = action.response.data.token;
    axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
    const jwtToSave = JSON.stringify({
      jwt: token
    });
    localStorage.setItem('a_socials', jwtToSave);
    let nextAction = {
      type: constants.SIGN_IN_SUCCESS,
      user: action.response.data.user,
    };
    dispatch(nextAction);
  } else if (action.type === constants.SIGN_OUT){
    localStorage.removeItem('a_socials');
    delete axios.defaults.headers.common['Authorization'];
  }

  next(action);
};
