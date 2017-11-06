import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../../actions/tasks';
import FilterMap from '../../components/FilterMap';

class TaskList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    //console.log('props:', this.props)
    return (
      <div className="task-list">
        <FilterMap header={"Queue"} list={this.props.tasks} statusID={1}/>
        <FilterMap header={"In Progress"} list={this.props.tasks} statusID={2}/>
        <FilterMap header={"Finished"} list={this.props.tasks} statusID={3}/>
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

