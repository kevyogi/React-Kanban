import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../components/TaskListItem';

const DoneList = ({ tasks }) => {
  return (
    <div className="task-list">
    <h2>Finished</h2>
      {
        tasks.filter((allTasks) => {
          return allTasks.status_id === 3
        }).map((task) => {
          return(
            <Task
            title={task.title}
            priority={task.priority.priority}
            createdBy={task.user.name}
            assignedTo={task.user.name}
            status={task.status.status}
            key={task.id}
            />
          );
        })
      }
    </div>
  );
}

export default DoneList;