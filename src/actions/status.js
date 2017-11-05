const axios = require('axios');
export const LOAD_STATUS = 'LOAD_STATUS';

export const loadStatus = () => {
  return function(dispatch) {
    return axios.get('/api/status').then((status) => {
      dispatch({
        type: LOAD_STATUS,
        status: status.data
      });
    });
  }
}