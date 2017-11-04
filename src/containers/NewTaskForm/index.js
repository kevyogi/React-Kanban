import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';
//import { loadUsers } from '../../actions/users';

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
    //console.log(props);
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
    //console.log(this.props);
    console.log(newTask);
    this.props.addTask(newTask);
    this.setState({
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
    });
  }

  render(){
    //console.log('newtaskform', this.props.users)
    return (
      <div>
        <h2 id="newTaskHeader">Create New Task</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>

          <select name="select" onChange={this.handleChangePriority.bind(this)}>
            <option value="3">Low</option>
            <option value="2">Medium</option>
            <option value="1">High</option>
          </select>


          <select onChange={this.handleChangeCreated.bind(this)}>
            {
              this.props.users.map((user) => {
                return(
                  <option value={user.id}>{user.name}</option>
                )
              })
            }
          </select>

          <select onChange={this.handleChangeAssigned.bind(this)}>
            {
              this.props.users.map((user) => {
                return(
                  <option value={user.id}>{user.name}</option>
                )
              })
            }
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userList
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