import React from 'react';

const Task = ( { task, state } ) => {
  return (
    <div className="task">
      <div>Task: { task.title }</div>
      <div>Status: { task.status.status }</div>
      <div>Priority: { task.priority.priority }</div>
      <div>Assigned to: { task.dev.name }</div>
      <div>Created by: { task.creator.name }</div>
      <div>ID: { task.id }</div>
      <br />
    </div>
  );
}

export default Task;


