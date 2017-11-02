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
      //statusInput: ''
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

  // handleChangeStatus(event){
  //   this.setState({
  //     statusInput:event.target.value
  //   });
  // }

  handleSubmit(event){
    event.preventDefault();
    let newTask = {
      title: this.state.titleInput,
      priority_id: this.state.priorityInput || "3",
      createdBy_id: this.state.createdInput,
      assignedTo_id: this.state.assignedInput
      //status_id: this.state.statusInput
    };
    console.log(this.props);
    console.log(newTask);
    this.props.addTask(newTask);
    this.setState({
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
      //statusInput: ''
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>

          <select name="select" onChange={this.handleChangePriority.bind(this)}>
            <option value="3">Low</option>
            <option value="2">Medium</option>
            <option value="1">High</option>
          </select>

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

//<select name="select" onChange={this.handleChangePriority.bind(this)}>
  //<option value={this.state.priorityInput}>Low</option>
  //<option value={this.state.priorityInput}>Medium</option>
  //<option value={this.state.priorityInput}>High</option>
//</select>

// <input type="text" placeholder="priority" value={this.state.priorityInput} onChange={this.handleChangePriority.bind(this)}/>