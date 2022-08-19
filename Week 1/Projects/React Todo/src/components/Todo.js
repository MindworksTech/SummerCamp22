import React from 'react'

function Todo({ todo, toggleTodo }) {


    function handleCheckBoxClick() {
        toggleTodo(todo.id);
    }

  return (
    <div style={{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckBoxClick} />
        <p> {todo.text} </p>
    </div>
  )
}

export default Todo