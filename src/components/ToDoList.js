import React from 'react'
import Todo from './Todo'

function ToDoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))
  )
}

export default ToDoList