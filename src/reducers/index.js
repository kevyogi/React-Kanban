import { combineReducers } from 'redux';
import taskList from './tasklist';
import userList from './userlist';
import priorityList from './prioritylist';
import statusList from './statuslist';

export default combineReducers({
  taskList,
  userList,
  priorityList,
  statusList
});