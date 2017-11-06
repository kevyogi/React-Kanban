import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../../actions/tasks';
import  Select from '../../components/Select';
import Task from '../../components/TaskListItem';
import Delete from '../../components/Delete';

class EditTaskForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
      statusInput: '',
      show: 0
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
    //changes are invoked immediately when changed

    // let test = {
    //   status_id: event.target.value,
    //   id: this.props.task.id
    // }
    // this.props.editTask(test);

    this.setState({
      statusInput:event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
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
      statusInput: '',
      show: 0
    });
  }

  handleDelete(event){
    event.preventDefault();
    let targetTask = {
      id: this.props.task.id
    }
    this.props.deleteTask(targetTask);
  }

  render(){
    return(
      <div>
        <div>
          {(this.state.show !== this.props.task.id) ? <Task task={this.props.task} /> : null}
          <button onClick={(e) => {this.setState({show:this.props.task.id})}}>Edit</button>
        </div>

        {(this.state.show === this.props.task.id) ?
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <span>Title:</span><input type="text" placeholder={this.props.task.title} value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)} />
            <Select list={this.props.status} handler={this.handleChangeStatus.bind(this)} display="status" label="Status:" theValue={this.props.task.status_id}/>
            <Select list={this.props.priority} handler={this.handleChangePriority.bind(this)} display="priority" label="Priority:" theValue={this.props.task.priority_id}/>
            <Select list={this.props.users} handler={this.handleChangeAssigned.bind(this)} display="name" label="Assigned to:" theValue={this.props.task.dev.id}/>
            <Select list={this.props.users} handler={this.handleChangeCreated.bind(this)} display="name" label="Created by:" theValue={this.props.task.creator.id}/>
            <input type="submit" value="Save Changes" />
            <Delete handler={this.handleDelete.bind(this)} />
          </form>
          <br />
        </div>
        : null}
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

//you need a delete in this, either as native to it or as a component

//for better user interface you might also need to make a component out of the edit form to be a peer with the actual tasks


  // {(this.state.show !== task.id) ? <Task task={task} key={task.id}/> : null}
  // {(this.state.show === task.id) ? <EditTaskForm task={task} key={task.id+'a'}/> : null}