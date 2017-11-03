import React from 'react';

const Task = ( {title, priority, createdBy, assignedTo, status, id } ) => {
  return (
    <div className="task">
      <div>Task: { title }</div>
      <div>Status: { status }</div>
      <div>Priority: { priority }</div>
      <div>Assigned to: { assignedTo }</div>
      <div>Created by: { createdBy }</div>
      <div>ID: { id }</div>
      <br />
    </div>
  );
}

export default Task;