import axios from 'axios';

export function sendEvent(eventData) {
    return (dispatch) => {
        return axios.post('/api/v1/create/event/', eventData)
            .then((res) => {
            console.log('Res', res);
      })
      .catch(error => {
        throw error
      });
    };
}
