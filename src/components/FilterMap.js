import React from 'react';
import Task from './TaskListItem';

const FilterMap = ( {list, statusID, state} ) => {
  return(
    <div>
      {
        list.filter((allTasks) => {
          return allTasks.status_id === statusID
        }).sort(function(a, b){
          return a.priority_id - b.priority_id
        }).map((task) => {
          return (
            <Task task={task} state={state}/>
          )
        })
      }
    </div>
  )
}

export default FilterMap;