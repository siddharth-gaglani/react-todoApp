import React, { Component } from 'react'

export class Todo extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleRemove(){
    this.props.removeTodo(this.props.id);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  toggleForm(){
    this.setState({
      isEditing: true
    })
  }

  handleUpdate(event){
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing:false });
  }

  render() {
    let result;
    if(this.state.isEditing){
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task} 
              onChange={this.handleChange}
              name="task"
            />
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }

    return result;
  }
}

export default Todo
