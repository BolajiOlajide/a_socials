import { socialClub, socialClubs } from './socialClubReducers';
import { event } from './eventReducers';
import access from './accessReducers';
import url from './urlReducers';


const rootReducer = {
  access,
  socialClubs,
  socialClub,
  event,
  url,
};

export default rootReducer;
