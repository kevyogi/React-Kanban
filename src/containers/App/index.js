import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasks';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
//import logo from './logo.svg';
//import './App.css';

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

  }

  render() {
    return (
      <div className="App">

        <TaskList tasks={this.props.tasks} />

        <NewTaskForm/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: (tasks) => {
      dispatch(loadTasks(tasks));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;