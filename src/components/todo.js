import React from "react";

export default function Todo({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button className="delete-btn" onClick={() => onDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
