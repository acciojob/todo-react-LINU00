
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([])
  const [data, setData] = useState("")
  return (
    <div>

      <Todo todos={todos} setTodos={setTodos} data={data} setData={setData}></Todo>
    </div>
  )
}

export default App
