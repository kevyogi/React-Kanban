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
    this.props.loadTasks()
  }

  render() {
    console.log(this.props);
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
    tasks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: () => {
      dispatch(loadTasks());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;