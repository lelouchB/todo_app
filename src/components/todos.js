import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        ))}
      </div>
    );
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
