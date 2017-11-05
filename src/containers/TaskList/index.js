import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../components/TaskListItem';
import { editTask, deleteTask } from '../../actions/tasks';
import Select from '../../components/Select';
import FilterMap from '../../components/FilterMap';

class TaskList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    //console.log('props:', this.props)
    return (
      <div className="task-list">
      <h2>Queue</h2>
        <FilterMap list={this.props.tasks} statusID={1} state={this.props}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.taskList,
    users: state.userList,
    priority: state.priorityList,
    status: state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task))
    },
    deleteTask: (task) => {
      dispatch(deleteTask(task))
    }
  }
}

const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default ConnectedTaskList;

