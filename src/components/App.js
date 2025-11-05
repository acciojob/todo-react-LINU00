import React, { useState } from "react";
import './../styles/App.css';
import Todo from "../components/Todo";
const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); 

  const handleAddTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };
    const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  
  return (
    <div>
  
    <div className="app-container">
      <h1>React To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} onDelete={handleDelete} />
    </div>
    </div>
  )
}

export default App
