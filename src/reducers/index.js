import { combineReducers } from 'redux';
import taskList from './tasklist';
import userList from './userlist';

export default combineReducers({
  taskList,
  userList
});