import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/tasks')
      .then(response => {
        this.setState({todos: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.title}</div>
        })}
      </div>
    );
  }
}

export default TodoList;
