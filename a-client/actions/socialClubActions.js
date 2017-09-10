import axios from 'axios';
import * as constants from './constants';

const socialClubs = [
  {
    id: 1,
    name: "Lunch date",
    members_count: "3"
  },
  {
    id: 2,
    name: "Swimming meetup",
    members_count: "5",
  }
];

export function getClub() {
  return {
    type: constants.GET_CLUB,
    club: {
      meta: {
      id: 1,
      name: 'Swimming meetups',
      members_count: '5',
      featured_image: "https://i.ytimg.com/vi/JGIxB_jvGa8/maxresdefault.jpg"
      },
      events: [
        {
            id: 1,
            featured_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg",
            title: 'Swimming at EPIC Towers hotel',
            description: 'We should visit blah blah blah',
            venue: 'EPIC Towers, 235 Ilupeju, Lagos',
            date: 'September 10, 2017',
            time: '01:00pm WAT',
            created_at: '2017-08-09'
        },
        {
            id: 2,
            featured_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg",
            title: 'Swimming at EPIC Towers hotel',
            description: 'We should visit blah blah blah',
            venue: 'EPIC Towers, 235 Ilupeju, Lagos',
            date: 'September 10, 2017',
            time: '01:00pm WAT',
            created_at: '2017-08-09'
        }
      ]
    }
  };
}


/**
 * Social Club List Action Creator
 */
export function getClubs(socialClubs) {
  return {
    type: constants.GET_CLUBS,
    clubs: socialClubs
  }
}

export function getAllClubs() {
  return function(dispatch) {
    return axios.get('/api/v1/categories/').then(socialClubs => {
      console.log(socialClubs);
      dispatch(getClubs(socialClubs.data.results));
    }).catch(error => {
      throw error;
    });
  };
}