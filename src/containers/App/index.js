import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasks';
import { loadUsers } from '../../actions/users';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import DoingList from '../TaskList/doing';
import DoneList from '../TaskList/done';
//import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: []
    }
  }

  componentWillMount(){

  }

  componentDidMount(){
    this.props.loadTasks();
    this.props.loadUsers();
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
          <div>
            <TaskList tasks={this.props.tasks} />
          </div>

          <div>
            <DoingList tasks={this.props.tasks} />
          </div>

          <div>
            <DoneList tasks={this.props.tasks} />
          </div>
        </div>

        <div id="newTaskDiv">
          <NewTaskForm/>
        </div>

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
    loadTasks: () => {
      dispatch(loadTasks());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;