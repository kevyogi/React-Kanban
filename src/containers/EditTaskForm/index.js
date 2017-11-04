// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { editTask } from '../../actions/tasks';

// class EditTaskForm extends Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       titleInput: '',
//       priorityInput: '',
//       createdInput: '',
//       assignedInput: '',
//       statusInput: '',
//       idInput: ''
//     };
//   }

//   handleChangeTitle(event){
//     //console.log(props);
//     this.setState({
//       titleInput:event.target.value
//     });
//   }

//   handleChangePriority(event){
//     this.setState({
//       priorityInput:event.target.value
//     });
//   }

//   handleChangeCreated(event){
//     this.setState({
//       createdInput:event.target.value
//     });
//   }

//   handleChangeAssigned(event){
//     this.setState({
//       assignedInput:event.target.value
//     });
//   }

//   handleChangeStatus(event){
//     this.setState({
//       statusInput:event.target.value
//     });
//   }

//   render(){
//     <div>
//       this.props.tasks
//       <div id={task.id+'a'}>
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           let queue = document.getElementById(task.id);
//           let editQueue = document.getElementById(task.id+'a');
//           queue.style.display = "block";
//           editQueue.style.display = "none";
//           //console.log('yo edit', this.props);
//           let editedTask = {
//             title: this.state.titleInput,
//             priority_id: this.state.priorityInput,
//             created_by_id: this.state.createdInput,
//             assigned_to_id: this.state.assignedInput,
//             status_id: this.state.statusInput,
//             id: this.state.idInput
//           };
//           //console.log('edit:', editedTask);
//           this.props.editTask(editedTask);
//           this.setState({
//             titleInput: '',
//             priorityInput: '',
//             createdInput: '',
//             assignedInput: '',
//             statusInput: ''
//           });
//         }}>
//           Task: <input type="text" placeholder={task.title} value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/><br/>

//           Status: <select name="status" defaultValue={task.status_id} onChange={this.handleChangeStatus.bind(this)}>
//             <option value="1">Queue</option>
//             <option value="2">In Progress</option>
//             <option value="3">Finished</option>
//           </select><br/>

//           Priority: <select name="priority" defaultValue={task.priority_id} onChange={this.handleChangePriority.bind(this)}>
//             <option value="3">Low</option>
//             <option value="2">Medium</option>
//             <option value="1">High</option>
//           </select><br/>

//           Assigned to: <select onChange={this.handleChangeAssigned.bind(this)}>
//                         {
//                           this.props.users.map((user) => {
//                             return(
//                               <option value={user.id}>{user.name}</option>
//                             )
//                           })
//                         }
//                        </select><br/>

//           Created by: <select onChange={this.handleChangeCreated.bind(this)}>
//                        {
//                         this.props.users.map((user) => {
//                           return(
//                             <option value={user.id}>{user.name}</option>
//                           )
//                         })
//                        }
//                       </select> <br/><br/>
//           <input type="submit" value="Done" /><br/>
//         </form>
//       </div>
//     </div>
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     users: state.userList,
//     tasks: state.taskList
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editTask: (task) => {
//       dispatch(editTask(task))
//     }
//   }
// }

// const ConnectedEditTaskForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditTaskForm)

// export default ConnectedEditTaskForm;