import React from 'react';
import Task from '../../components/TaskListItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
    <h2>To Do List</h2>
      {
        tasks.map((task) => {
          return(
            <Task title={task.title} priority={task.priority} createdBy={task.createdBy} assignedTo={task.assignedTo} />
          );
        })
      }
    </div>
  );
}

export default TaskList;