import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';

export class NewTodoForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createTodo({...this.state, id:uuid()});
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input 
          type="text" 
          placeholder="New Todo" 
          id="task"
          name="task"
          value={this.state.task} 
          onChange={this.handleChange} 
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm
