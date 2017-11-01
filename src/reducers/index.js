import { LOAD_TASKS } from '../actions/tasks';
import { ADD_TASK } from '../actions/tasks';

const initialState = {
  todoList: []
};

const reducers = (state = initialState, action) => {
  switch (action.type){
    case LOAD_TASKS:
      return Object.assign({}, state, { todoList: [...action.tasks]})
    case ADD_TASK:
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.task]
      })
    default:
      return state
  }
}

export default reducers;