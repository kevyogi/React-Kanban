import React from 'react';

const Task = ( {title, priority, createdBy, assignedTo } ) => {
  return (
    <div className="task">
      <div>Task:{ title }</div>
      <div>Priority:{ priority }</div>
      <div>Created by:{ createdBy }</div>
      <div>Assigned to:{ assignedTo }</div>
    </div>
  );
}

export default Task;