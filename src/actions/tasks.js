export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks: tasks
  }
}

export const addTask = (task) => {
  return{
    type: ADD_TASK,
    task: task
  }
}