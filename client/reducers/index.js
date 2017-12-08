import { socialClub, socialClubs, joinedClubs } from './socialClubReducers';
import { event } from './eventReducers';
import access from './accessReducers';
import url from './urlReducers';


const rootReducer = {
  access,
  socialClubs,
  joinedClubs,
  socialClub,
  event,
  url,
};

export default rootReducer;
