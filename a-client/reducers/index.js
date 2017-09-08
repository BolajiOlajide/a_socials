import { combineReducers } from 'redux';
// import { socialClubs, socialClub } from './socialClubReducers';
// import { events, event} from './eventReducers';
// import { users, user} from './userReducers';
// import access from './accessReducers';
import { number } from './eventReducers';


const rootReducer = combineReducers({
  number,
  // access,
  // socialClubs,
  // socialClub,
  // events,
  // event,
  // users,
  // user
});

export default rootReducer;