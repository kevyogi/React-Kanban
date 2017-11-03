import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../../components/TaskListItem';
// import EditTaskForm from '../EditTaskForm';
// import EditForm from '../../components/editForm';

class TaskList extends Component{
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

  handleClickEdit(event){
    let queue = document.getElementById('queue');
    let editQueue = document.getElementById('editQueue');
    queue.style.display = "none";
    editQueue.style.display = "block";
  }

  handleSubmitEdit(event){
    let queue = document.getElementById('queue');
    let editQueue = document.getElementById('editQueue');
    queue.style.display = "block";
    editQueue.style.display = "none";
  }

  render(){
    console.log('state:', this.props)
    return (
      <div className="task-list">
      <h2>Queue</h2>
        {
          this.props.tasks.filter((allTasks) => {
            return allTasks.status_id === 1
          }).map((task) => {
            return(
              <div>
                <div id="queue">
                  <Task
                  title={task.title}
                  priority={task.priority.priority}
                  createdBy={task.user.name}
                  assignedTo={task.user.name}
                  status={task.status.status}
                  key={task.id}
                  />
                  <button onClick={this.handleClickEdit.bind(this)}>Edit</button>
                </div>

                <div id="editQueue" style={{display:'none'}}>
                  <form onSubmit={this.handleSubmitEdit.bind(this)}>
                    Task: <input type="text" placeholder="title"/><br/>

                    Status: <select name="status">
                      <option value="1">To Do</option>
                      <option value="2">Doing</option>
                      <option value="3">Done</option>
                    </select><br/>

                    Priority: <select name="priority">
                      <option value="3">Low</option>
                      <option value="2">Medium</option>
                      <option value="1">High</option>
                    </select><br/>

                    Assigned to: <input type="text" placeholder="assigned to"/><br/>
                    Created by: <input type="text" placeholder="created by"/><br/>
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

const ConnectedTaskList = connect(
  mapStateToProps
)(TaskList)

export default ConnectedTaskList;