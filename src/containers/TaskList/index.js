import React from 'react';
import Task from '../../components/TaskListItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
    <h2>To Do List</h2>
      {
        tasks.map((task) => {
          return(
            <Task
            title={task.title}
            priority={task.priority_id}
            createdBy={task.createdBy_id}
            assignedTo={task.assignedTo_id}
            key={task.id}
            />
          );
        })
      }
    </div>
  );
}

export default TaskList;