//import { getTasks } from '../helpers/requests.js';

const axios = require('axios');
export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const loadTasks = () => {
  console.log('here');
  return function(dispatch){
    return axios.get('/api/tasks').then((tasks) => {
      console.log('taskData', tasks);
      dispatch({
        type: LOAD_TASKS,
        tasks: tasks.data
      });
    });
  }
}

// export const loadTasks = () => {
//   return function(dispatch){
//     return getTasks().then((tasks) => {
//       dispatch({
//         type: LOAD_TASKS,
//         tasks: tasks
//       });
//     });
//   }
//   // return {
//   //   type: LOAD_TASKS,
//   //   tasks: tasks
//   // }
// }

export const addTask = (task) => {
  return{
    type: ADD_TASK,
    task: task
  }
}