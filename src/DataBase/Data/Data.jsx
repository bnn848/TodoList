import React from 'react'
import {Li} from './Data_styled'

const Data = ({todo, deleteTodo, edit}) => {
  return (
    <Li>
      <span>{todo.title}</span>
      <span> : {todo.content}</span>
      <span>[{todo.category}]</span>
      <span>posted at : {todo.time}</span>
      <div id = "Btn">
        <button onClick={() => 
          deleteTodo(todo.id)}  // <---idを用いたdeleteTodo
          // deleteTodo(index)} // <---indexを用いたdeleteTodo
          >Delete</button>
        <button onClick={() =>edit(todo.id)}>Edit</button>
      </div>
    </Li>
  );
}

export default Data;