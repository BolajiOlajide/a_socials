import axios from 'axios';
import * as constants from './constants';

export function getClub(club_id) {
  return (dispatch) => {
    return axios.get(`/api/v1/category/${club_id}/events`)
      .then((res) => {
        console.log('Res', res);
        dispatch({
          type: constants.GET_CLUB,
          document: res.data
        });
      })
      .catch(error => console.log(error));
  };
}

export function joinClub(details) {
  return (dispatch) => {
    return axios.post('/api/v1/join', details)
      .then((res) => {
        dispatch({
          type: constants.JOIN_CLUB,
          message: res.data.message,
          document: res.data.document
        });
      })
      .catch(error => throwError(error, dispatch));
  };
}


// export function getClub() {
//   return {
//     type: constants.GET_CLUB,
//     club: {
//       meta: {
//       id: 1,
//       name: 'Swimming meetups',
//       members_count: '5',
//       featured_image: "https://i.ytimg.com/vi/JGIxB_jvGa8/maxresdefault.jpg"
//       },
//       events: [
//         {
//             id: 1,
//             featured_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg",
//             title: 'Swimming at EPIC Towers hotel',
//             description: 'We should visit blah blah blah',
//             venue: 'EPIC Towers, 235 Ilupeju, Lagos',
//             date: 'September 10, 2017',
//             time: '01:00pm WAT',
//             created_at: '2017-08-09'
//         },
//         {
//             id: 2,
//             featured_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg",
//             title: 'Swimming at EPIC Towers hotel',
//             description: 'We should visit blah blah blah',
//             venue: 'EPIC Towers, 235 Ilupeju, Lagos',
//             date: 'September 10, 2017',
//             time: '01:00pm WAT',
//             created_at: '2017-08-09'
//         }
//       ]
//     }
//   };
// }
