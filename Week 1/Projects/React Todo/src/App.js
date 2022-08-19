import ToDoList from "./components/ToDoList";
import React, { useState, useRef } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  const todoInput = useRef()

  function handleAdd(e) {
    const text = todoInput.current.value;

    if (text === '') {
      return;
    }

    setTodos([...todos, { id: todos.length+1, text, done: false }]);

    todoInput.current.value = '';
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.done = !todo.done
    setTodos(newTodos)
  }

  function handleClear () {
    const newTodos = todos.filter(todo => !todo.done)

    setTodos(newTodos)
  }

  return (
    <>
      <h1>My ToDo App</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoInput} type="text" />
      <button onClick={handleAdd}>Submit</button>
      <button onClick={handleClear}>Clear</button>
      <p>{todos.filter(todo => todo.done === false).length} left todos</p>
    </>
  );
}

export default App;
