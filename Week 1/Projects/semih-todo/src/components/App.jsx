import React, {useState} from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from "./InputArea.jsx";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  //Show the previous ToDos via useState.
  const [toDos, setToDos] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputTodo(newValue)
  }
  const handleClear = (event) => {
    setToDos([])
  }

  const addValue = () => {
    setToDos((prevValues) => {
      return [...prevValues, inputTodo]
    })
    //Clear the input area after submitting.
    setInputTodo("");
};
//Delete an item with a click and update the todo list.
  const deleteToDo = (id) => {
    setToDos(prevValues => {
      return prevValues.filter(
        (item,index) => {
          return index !== id
        }
      )
    })
  };
  return (
    <div>
    <Header />
    <div className="container">
      <div className="heading">
        <h1>{new Date().toISOString().slice(0, 10)}</h1>
      </div>
      <InputArea 
        onClear={handleClear}
        onChange={handleChange}
        onClick={addValue}
        value={inputTodo}
      />
      <div>
        <ul>
          {toDos.map((todoItem,index) => (
            <ToDoItem 
              key={index}
              id={index}
              text={todoItem}
              onPress={deleteToDo}
            />
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  )
};

export default App;
