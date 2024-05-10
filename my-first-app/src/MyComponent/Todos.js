import React from 'react';
import Todo from './Todo';


const Todos = (props) => {



  return (
    <div>
      {props.todoList.length?
      props.todoList.map((value) => {
        return <Todo key={value.id} task={value} onDelete={props.onDelete}/>
      }):<h2>No Task Remaining</h2>}
    </div>
  )
}

export default Todos
