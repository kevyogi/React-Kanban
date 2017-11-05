const axios = require('axios');
export const LOAD_PRIORITY = 'LOAD_PRIORITY';

export const loadPriority = () => {
  return function(dispatch) {
    return axios.get('/api/priority').then((priority) => {
      dispatch({
        type: LOAD_PRIORITY,
        priority: priority.data
      });
    });
  }
}