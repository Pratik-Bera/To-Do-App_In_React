import './App.css';
import Header from "./MyComponent/Header.js";
import Todos from "./MyComponent/Todos.js";
import Footer from "./MyComponent/Footer.js";
import AddTodo from "./MyComponent/AddTodo.js";
import React, { useState } from 'react';

function App() {
  const addTodo = (title, desc) => {
    let id=1;
    if(todosList.length>0){
      id=todosList[todosList.length-1].id+1;
    }
    const newTodo = { id: id ,title: title, description: desc};
    setTodos(todosList.concat(newTodo));

  }
  

  const onDelete = (task) => {
    setTodos(todosList.filter((singleElem)=>{
      return (singleElem.id!== task.id);
    }));
  };

  const [todosList, setTodos] = useState([]);
  return (
    <>
      <Header searchbar={true}/>
      <AddTodo addTodo={addTodo}/>
    <div className="App">
      <hr></hr>
      <h2>Task List</h2>
      <Todos todoList={todosList} onDelete={onDelete}/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
