import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasks';
import { loadUsers } from '../../actions/users';
import { loadPriority } from '../../actions/priority';
import { loadStatus } from '../../actions/status';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import DoingList from '../TaskList/doing';
import DoneList from '../TaskList/done';
import './styles.css';

class App extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){
    this.props.loadTasks();
    this.props.loadUsers();
    this.props.loadPriority();
    this.props.loadStatus();
  }

  render() {
    //console.log('props', this.props);
    //console.log('prop.tasks', this.props.tasks);
    return (
      <div className="App">

        <div id="header-div">
          <h1 id="header">Kanban</h1>
        </div>


        <div id="list-div">
          <TaskList/>
        </div>


        <div id="newTaskDiv">
          <NewTaskForm/>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: () => {
      dispatch(loadTasks());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadPriority: () => {
      dispatch(loadPriority());
    },
    loadStatus: () => {
      dispatch(loadStatus());
    }
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App)

export default ConnectedApp;

