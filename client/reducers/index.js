import { socialClub, socialClubs, joinedClubs } from './socialClubReducers';
import { event, subscribedEvents } from './eventReducers';
import access from './accessReducers';
import url from './urlReducers';


const rootReducer = {
  access,
  socialClubs,
  joinedClubs,
  socialClub,
  event,
  subscribedEvents,
  url,
};

export default rootReducer;
