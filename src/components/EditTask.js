import React from 'react';

const EditTask = ( {task, state, display, titleHandler, statusHandler, priorityHandler, assignHandler, createHandler} ) => {
  return (
    <div>
      <form>
        <span>Task:</span><input type="text" placeholder={task.title} value={display} onChange={titleHandler}/><br/>
        <Select list={state.statusList} handler={statusHandler} display="status" label="Status:" state={state}/>
        <Select list={state.priorityList} handler={priorityHandler} display="priority" label="Priority:" state={state}/>
        <Select list={state.userList} handler={assignHandler} display="name" label="Assigned to:" state={state}/>
        <Select list={state.userList} handler={createHandler} display="name" label="Created by:" state={state}/>
      </form>
    </div>
  )
}