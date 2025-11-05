import React from "react";

const Todo = ({ data, setData, setTodos, todos }) => {
    function changeHandler(e){
        setData(e.target.value)
    }
    function deleteHandler(id){
        setTodos((prevTodos)=>(prevTodos.filter((todo)=> todo.id !== id)))
    }

    function addTodo(){
        setTodos((prevTodos)=> ([...prevTodos, {id: Date.now(), name: data}]))
    }

  return (
    <div>
      <input type="text" onChange={changeHandler}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {
            todos.map((todo, index)=>{
                return (
                    <li key={todo.id}>
                        <p>{todo.name}</p>
                        <button onClick={()=>{deleteHandler(todo.id)}}>Delete</button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  );
};

export default Todo;
