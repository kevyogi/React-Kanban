import { LOAD_TASKS,
         ADD_TASK,
         EDIT_TASK
       } from '../actions/tasks';

const initialState = [];

const taskList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_TASKS:
      return [...action.tasks];
    case ADD_TASK:
      return [...state, action.task];
    case EDIT_TASK:
      return [...action.task];
    default:
      return state;
  }
}

export default taskList;