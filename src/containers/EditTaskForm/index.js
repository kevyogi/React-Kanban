import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../../actions/tasks';
import  Select from '../../components/Select';

class EditTaskForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
      statusInput: ''
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

  handleChangeStatus(event){
    this.setState({
      statusInput:event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('here!')
    let taskId = this.props.task.id;
    let editedTask = {
      title: this.state.titleInput,
      priority_id: this.state.priorityInput,
      created_by_id: this.state.createdInput,
      assigned_to_id: this.state.assignedInput,
      status_id: this.state.statusInput,
      id: taskId
    }
    console.log(editedTask);
    this.props.editTask(editedTask);
    this.setState({
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
      statusInput: ''
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder={this.props.task.title} value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)} />
          <Select list={this.props.status} handler={this.handleChangeStatus.bind(this)} display="status" label="Status:" defaultValue={this.props.task.status_id}/>
          <Select list={this.props.priority} handler={this.handleChangePriority.bind(this)} display="priority" label="Priority:" defaultValue={this.props.task.priority_id}/>
          <Select list={this.props.users} handler={this.handleChangeAssigned.bind(this)} display="name" label="Assigned to:" defaultValue={this.props.task.dev.id}/>
          <Select list={this.props.users} handler={this.handleChangeCreated.bind(this)} display="name" label="Created by:" defaultValue={this.props.task.creator.id}/>
          <input type="submit" value="Done" />
        </form>
      </div>
    )
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

const ConnectedEditTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskForm)

export default ConnectedEditTaskForm;