import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';
import  Select from '../../components/Select';

class NewTaskForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
    };
  }

  handleChangeTitle(event){
    this.setState({
      titleInput:event.target.value
    });
  }

  handleChangePriority(event){
    this.setState({
      priorityInput:event.target.value
    });
  }

  handleChangeCreated(event){
    this.setState({
      createdInput:event.target.value
    });
  }

  handleChangeAssigned(event){
    this.setState({
      assignedInput:event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let newTask = {
      title: this.state.titleInput,
      priority_id: this.state.priorityInput || "3",
      created_by_id: this.state.createdInput || "1",
      assigned_to_id: this.state.assignedInput || "1"
    };
    //console.log(newTask);
    this.props.addTask(newTask);
    this.setState({
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
    });
  }

  render(){
    //console.log('newtaskform', this.props)
    return (
      <div>
        <h2 id="newTaskHeader">Create New Task</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>Task:</span>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
          <Select list={this.props.priority} handler={this.handleChangePriority.bind(this)} display="priority" label="Priority:"/>
          <Select list={this.props.users} handler={this.handleChangeAssigned.bind(this)} display="name" label="Assigned to:"/>
          <Select list={this.props.users} handler={this.handleChangeCreated.bind(this)} display="name" label="Created by:"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userList,
    priority: state.priorityList,
    status: state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(addTask(task))
    }
  }
}

const ConnectedNewTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm)

export default ConnectedNewTaskForm;
