import React from 'react'
import {Li} from './Item_styled'

const Item = ({todo, toggleIsDone, deleteTodo, edit, index}) => {
  return (
    <Li>
      <input type="checkbox" onChange={() => toggleIsDone(todo.id)}/>
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

export default Item;