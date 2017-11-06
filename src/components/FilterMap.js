import React, { Component } from 'react';
import Task from './TaskListItem';
import EditTaskForm from '../containers/EditTaskForm';


class FilterMap extends Component {
  constructor(props){
    super(props);
  }

  render(){
    //console.log(this.state.show)
    return(
      <div>
        <h2>{this.props.header}</h2>
        {
          this.props.list.filter((allTasks) => {
            return allTasks.status_id === this.props.statusID
          }).sort(function(a, b){
            return a.priority_id - b.priority_id
          }).map((task) => {
            return (
              <div>
                <EditTaskForm task={task} key={task.id+'a'}/>
              </div>
            )
          })
        }
      </div>
    )
  }

  //can probably turn this back into a dumb component, but will have to change the way things are referenced here/when it's invoked higher up

    //older way that kinda works
  // render(){
  //   //console.log(this.state.show)
  //   return(
  //     <div>
  //       <h2>{this.props.header}</h2>
  //       {
  //         this.props.list.filter((allTasks) => {
  //           return allTasks.status_id === this.props.statusID
  //         }).sort(function(a, b){
  //           return a.priority_id - b.priority_id
  //         }).map((task) => {
  //           return (
  //             <div>
  //               {(this.state.show !== task.id) ? <Task task={task} key={task.id}/> : null}
  //               {(this.state.show === task.id) ? <EditTaskForm task={task} key={task.id+'a'}/> : null}
  //               <button onClick={(e) => {this.setState({show:task.id})}}>Show Edit</button>
  //               <button onClick={(e) => {this.setState({show:0})}}>Hide Edit</button>
  //             </div>
  //           )
  //         })
  //       }
  //     </div>
  //   )
  // }
    //to handle display changes as state changes
  // {(this.state.show !== task.id) ? <Task task={task} key={task.id}/> : null}
  // {(this.state.show === task.id) ? <EditTaskForm task={task} key={task.id+'a'}/> : null}
}

export default FilterMap;

