import { socialClub, socialClubs } from './socialClubReducers';
import { event} from './eventReducers';
// import { users, user} from './userReducers';
import access from './accessReducers';


const rootReducer = {
  access,
  socialClubs,
  socialClub,
  // events,
  event
  // users,
  // user
};

export default rootReducer;
