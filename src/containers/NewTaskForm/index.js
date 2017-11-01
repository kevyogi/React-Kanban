import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';

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
      priority: this.state.priorityInput,
      createdBy: this.state.createdInput,
      assignedTo: this.state.assignedInput
    };
    this.props.addTask(newTask);
    this.setState({
      taskInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
          <input type="text" placeholder="priority" value={this.state.priorityInput} onChange={this.handleChangePriority.bind(this)}/>
          <input type="text" placeholder="created by" value={this.state.createdInput} onChange={this.handleChangeCreated.bind(this)}/>
          <input type="text" placeholder="assigned to" value={this.state.assignedInput} onChange={this.handleChangeAssigned.bind(this)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
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
  null,
  mapDispatchToProps
)(NewTaskForm)

export default ConnectedNewTaskForm;