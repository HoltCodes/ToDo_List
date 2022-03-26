import React, { useState } from 'react';
import './App.css';

import ToDo from './components/ToDo';


function App() {

  const [newTodo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handNeWTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }


    setTodos([...todos, todoItem]);
    setNewToDo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = ! todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handNeWTodoSubmit (event)
      }}
      >
        <input 
        onChange={(event) => {
          setNewToDo(event.target.value);
        }}
         type="text"
         value={newTodo}
         style={{ marginTop: "10px"}}
         /> 
         <div style={{ marginTop: "10px"}}>
           <button>Add</button>
           
         </div>
      </form>

      <hr/>

      {todos.map((todo, i) => {
        return (
        <ToDo 
        key={i} 
        todo={todo} 
        handleToggleComplete={handleToggleComplete} 
        i={i}
        handleTodoDelete={handleTodoDelete}
        />
        );
      })}
    </div>
  );
}

export default App;
