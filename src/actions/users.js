const axios = require('axios');
export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';

export const loadUsers = () => {
  return function(dispatch){
    return axios.get('/api/users').then((users) => {
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
  }
}

export const addUser = (user) => {
  return function(dispatch){
    return axios.post('/api/users', user).then((newUser) => {
      dispatch({
        type: ADD_USER,
        user: newUser.data
      });
    });
  }
}