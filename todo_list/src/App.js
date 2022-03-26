import React, { useState } from 'react';
import './App.css';


function App() {

  const [newTodo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handNeWTodoSubmit = (event) => {
    event.preventDefault();
    todos.push(newTodo);
  };

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
         /> 
         <div>
           <button>Add</button>
         </div>
      </form>
    </div>
  );
}

export default App;
