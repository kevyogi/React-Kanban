import { LOAD_TASKS,
         ADD_TASK,
         EDIT_TASK,
         DELETE_TASK
       } from '../actions/tasks';

const initialState = [];

const taskList = (state = initialState, action) => {
  switch (action.type){

    case LOAD_TASKS:
      return [...action.tasks];

    case ADD_TASK:
      return [...state, action.task];

    case EDIT_TASK:
      let tasks = state.filter((task) => {
        return task.id !== Number(action.updatedTask.id)
      });
      return [...tasks, action.updatedTask];

    case DELETE_TASK:
      return state.filter((task) => {
        return task.id !== Number(action.data)
      });

    default:
      return state;
  }
}

export default taskList;