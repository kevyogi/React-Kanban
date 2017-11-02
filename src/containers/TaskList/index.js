import React, { Component } from 'react';
import { connect } from 'react-redux';
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

export default TaskList;