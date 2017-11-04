// import { getTasks } from '../helpers/requests.js';

const axios = require('axios');
export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const loadTasks = () => {
  return function(dispatch){
    return axios.get('/api/tasks').then((tasks) => {
      dispatch({
        type: LOAD_TASKS,
        tasks: tasks.data
      });
    });
  }
}

export const addTask = (task) => {
  return function(dispatch){
    return axios.post('/api/tasks/new', task).then((newTask) => {
      dispatch({
        type: ADD_TASK,
        task: newTask.data
      });
    });
  }
}

export const editTask = (task) => {
  return function(dispatch){
    return axios.put(`/api/tasks/${task.id}/edit`, task).then((updatedTask) => {
      dispatch({
        type: EDIT_TASK,
        updatedTask: updatedTask.data
      });
    });
  }
}

export const deleteTask = (task) => {
  return function(dispatch){
    return axios.delete(`/api/tasks/${task.id}/delete`).then(({ data }) => {
      dispatch({
        type: DELETE_TASK,
        data
      });
    });
  }
}