// import { getTasks } from '../helpers/requests.js';

const axios = require('axios');
export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const loadTasks = () => {
  return function(dispatch){
    return axios.get('/api/tasks').then((tasks) => {
      console.log('taskData', tasks.data);
      dispatch({
        type: LOAD_TASKS,
        tasks: tasks.data
      });
    });
  }
}

export const addTask = (task) => {
  console.log('task', task);
  return function(dispatch){
    return axios.post('/api/tasks', task).then((newTask) => {
      console.log('newTask', newTask);
      dispatch({
        type: ADD_TASK,
        task: newTask.data
      });
    });
  }
}

export const editTask = (task) => {
  return function(dispatch){
    return axios.put('/api/tasks/:id', task).then((updatedTask) => {
      dispatch({
        type: EDIT_TASK,
        task: updatedTask.data
      });
    });
  }
}