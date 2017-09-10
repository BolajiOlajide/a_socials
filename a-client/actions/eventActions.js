import * as constants from './constants';

// This should be uncommented when the endpoint works
// export function getEvent(event_id) {
//   return (dispatch) => {
//     return axios.get(`/api/v1/event/${event_id}`)
//       .then((res) => {
//         console.log('Res', res);
//         dispatch({
//           type: constants.GET_EVENT,
//           details: res.data
//         });
//       })
//       .catch(error => console.log(error));
//   };
// }

export function joinEvent(details) {
  return (dispatch) => {
    return axios.post('/api/v1/attend', details)
      .then((res) => {
        console.log('Res', res);
      })
      .catch(error => {
        throw error
      });
  };
}

// This should be deleted when getEvent endpoint works
export function getEvent(event_id) {
  return {
    type: constants.GET_EVENT,
    details: {
        id: 1,
        club_id: 3,
        featured_image: 'https://www.omnihotels.com/-/media/images/hotels/pueave/hotel/pueave-omni-puerto-aventuras-beach-resort.jpg?h=660&la=en&w=1170',
        title: 'Swimming at EPIC Towers hotel',
        description: 'We should visit blah blah blah',
        venue: 'EPIC Towers, 235 Ilupeju, Lagos',
        date: 'September 10, 2017',
        time: '01:00pm WAT',
        created_on:  'September 10, 2017',
        created_by: '@gentlefella',
        attendees: [
            {
                id: 1,
                full_name: 'Innocent Amadi',
                slack_id: '@cent'
            },
            {
                id: 2,
                full_name: 'Ignatius Ukwuoma',
                slack_id: '@ignatius'
            }
        ]
      }
  };
}
