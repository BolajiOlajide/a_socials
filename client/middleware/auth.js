import * as constants from '../actions/constants';
import axios from 'axios';

export const saveTokenMiddleware = ({getState, dispatch}) => next => action => {
  console.log('Middleware')
  if (action.type === constants.SIGN_IN){
    const token = action.response.data.token;
    axios.defaults.headers.common['Authorisation'] = token;
    const jwtToSave = JSON.stringify({
      jwt: token
    });
    localStorage.setItem('a_socials', jwtToSave);
    let nextAction = {
      type: constants.SIGN_IN_SUCCESS,
      user: action.response.data.user
    };
    console.log('next action', nextAction);
    dispatch(nextAction)
  }

  next(action);
};
