import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import Display from "./components/Display"

function App() {

  const [todoList, setToDoList] = useState([]);

  return (
    <div className="App">

      <Form todoList={todoList} setToDoList={setToDoList}/>

      <Display todoList={todoList} setToDoList={setToDoList}/>

    </div>
  );
}

export default App;
