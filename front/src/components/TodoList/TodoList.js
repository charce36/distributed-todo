import React, { Component } from 'react';
import axios from 'axios';

import TodoItem from '../TodoItem';

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
          return <TodoItem key={todo.id} title={todo.title}/>
        })}
      </div>
    );
  }
}

export default TodoList;
