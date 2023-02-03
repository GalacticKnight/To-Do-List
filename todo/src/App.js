import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";//you want to use these components for the app.js
import Display from "./components/Display";//you want to use these components for the app.js

function App() {
  const [todoList, setTodoList] = useState([
    {content:"target",complete : false},
    {content:"target2",complete : false},
    {content:"target3",complete : false}
  ]);
  //todoList is a getter and 
  //setTodoList is a setter
  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} />{/*when you use this form, the const will act as a conduent*/}
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;