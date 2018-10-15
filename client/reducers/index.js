import { joinedCategories, socialClubs } from './socialClubReducers';
import {
  events,
  eventReducer,
  subscribedEvents,
  attendees,
  eventsSearchList,
  uploadImage,
} from './eventReducers';
import interests from './interestReducers';
import url from './urlReducers';
import userReducers from './userReducers';
import { inviteValidation } from './inviteReducers';
import oauth from './oauthReducers';

const rootReducer = {
  activeUser: userReducers,
  event: eventReducer,
  joinedCategories,
  socialClubs,
  events,
  uploadImage,
  subscribedEvents,
  eventsSearchList,
  attendees,
  interests,
  url,
  oauth,
  invite: inviteValidation,
};

export default rootReducer;
