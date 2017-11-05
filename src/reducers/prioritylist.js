import { LOAD_PRIORITY } from '../actions/priority';

const initialState = [];

const priorityList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_PRIORITY:
      return [...action.priority]

    default:
      return state;
  }
}

export default priorityList;