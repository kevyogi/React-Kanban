{
          this.props.tasks.taskList.filter((allTasks) => {
            return allTasks.status_id === 1
          }).sort(function (a, b) {return a.priority_id - b.priority_id;}).map((task) => {
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
                    console.log('yo edit', this.props);
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
                    <span>Task:</span><input type="text" placeholder={task.title} value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/><br/>
                    <Select list={this.props.status} handler={this.handleChangeStatus.bind(this)} display="status" label="Status:"/>
                    <Select list={this.props.priority} handler={this.handleChangePriority.bind(this)} display="priority" label="Priority:"/>
                    <Select list={this.props.users} handler={this.handleChangeAssigned.bind(this)} display="name" label="Assigned to:"/>
                    <Select list={this.props.users} handler={this.handleChangeCreated.bind(this)} display="name" label="Created by:"/>
                    <input type="submit" value="Done" /><br/>
                    <div>
                      <input type="submit" value="Delete" onClick={(event) => {
                        event.preventDefault();
                        let targetTask = {
                          id: this.state.idInput
                        };
                        console.log(targetTask);
                        this.props.deleteTask(targetTask);
                      }}/>
                    </div>
                  </form>

                </div>

              </div>
            );
          })
        }