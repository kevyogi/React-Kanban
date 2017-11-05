import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../actions/tasks';

//<EditTaskForm cardInstance=task>

class EditTaskForm extends Component{
  constructor(props){
    super(props);
    console.log(this.props);

    this.state = {
      titleInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
      statusInput: '',
      idInput: ''
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

  render(){
    return(
      <div>
        <form>
          Task: <input type="text" placeholder={task.title} value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/><br/>

          Status: <select name="status" defaultValue={task.status_id} onChange={this.handleChangeStatus.bind(this)}>
            <option value="1">Queue</option>
            <option value="2">In Progress</option>
            <option value="3">Finished</option>
          </select><br/>

          Priority: <select name="priority" defaultValue={task.priority_id} onChange={this.handleChangePriority.bind(this)}>
            <option value="3">Low</option>
            <option value="2">Medium</option>
            <option value="1">High</option>
          </select><br/>

          Assigned to: <select onChange={this.handleChangeAssigned.bind(this)} value={task.dev.id}>
                        {
                          this.props.users.map((user) => {
                            return(
                              <option value={user.id}>{user.name}</option>
                            )
                          })
                        }
                       </select><br/>

          Created by: <select onChange={this.handleChangeCreated.bind(this)} value={task.creator.id}>
                       {
                        this.props.users.map((user) => {
                          return(
                            <option value={user.id}>{user.name}</option>
                          )
                        })
                       }
                      </select> <br/><br/>
          <input type="submit" value="Done" /><br/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.userList,
    tasks: state.taskList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task))
    }
  }
}

const ConnectedEditTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskForm)

export default ConnectedEditTaskForm;