import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../components/TaskListItem';
import { editTask } from '../../actions/tasks';

class TaskList extends Component{
  constructor(props){
    super(props);

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

  handleChangeStatus(event){
    this.setState({
      statusInput:event.target.value
    });
  }

  render(){
    //console.log('state:', this.props)
    return (
      <div className="task-list">
      <h2>Finished</h2>
        {
          this.props.tasks.filter((allTasks) => {
            return allTasks.status_id === 3
          }).map((task) => {
            return(
              <div>
                <div id={task.id}>
                  <Task
                  title={task.title}
                  priority={task.priority.priority}
                  createdBy={task.creator.name}
                  assignedTo={task.dev.name}
                  status={task.status.status}
                  id={task.id}
                  key={task.id}
                  />
                  <input type="submit" value="Edit" onClick={(e) => {
                    let queue = document.getElementById(task.id);
                    let editQueue = document.getElementById(task.id+'a');
                    queue.style.display = "none";
                    editQueue.style.display = "block";
                    this.setState({idInput: task.id});
                  }}/>
                </div>

                <div id={task.id+'a'} style={{display:'none'}}>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    let queue = document.getElementById(task.id);
                    let editQueue = document.getElementById(task.id+'a');
                    queue.style.display = "block";
                    editQueue.style.display = "none";
                    //console.log('yo edit', this.props);
                    let editedTask = {
                      title: this.state.titleInput,
                      priority_id: this.state.priorityInput,
                      created_by_id: this.state.createdInput,
                      assigned_to_id: this.state.assignedInput,
                      status_id: this.state.statusInput,
                      id: this.state.idInput
                    };
                    console.log('edit:', editedTask);
                    this.props.editTask(editedTask);
                    this.setState({
                      titleInput: '',
                      priorityInput: '',
                      createdInput: '',
                      assignedInput: '',
                      statusInput: ''
                    });
                  }}>
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

                    Assigned to: <input type="text" placeholder={task.dev.name} value={this.state.assignedInput} onChange={this.handleChangeAssigned.bind(this)}/><br/>
                    Created by: <input type="text" placeholder={task.creator.name} value={this.state.createdInput} onChange={this.handleChangeCreated.bind(this)}/><br/><br/>
                    <input type="submit" value="Done" /><br/>
                  </form>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task))
    }
  }
}

const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default ConnectedTaskList;