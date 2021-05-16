import React from 'react'
import {Li} from './Item_styled'

const Item = ({todo, toggleIsDone, deleteTodo, changeTodo, index}) => {

  return (
    <Li>
      <input type="checkbox" onChange={() => toggleIsDone(todo.id)}/>
      <span>&lt; title &gt; {todo.title}</span>
      <span>&lt; Content &gt; {todo.content}</span>
      <span>&lt; Category &gt; {todo.category}</span>
      <span>&lt; Post &gt; {todo.time}</span>
      <div id = "Btn">
        <button onClick={() => 
          // deleteTodo(todo.id)}  // <---idを用いたdeleteTodo
          deleteTodo(index)} // <---indexを用いたdeleteTodo
          >Delete</button>
        <button onClick={() => 
          {deleteTodo(index); changeTodo(index)}
        }>Change</button>
      </div>
    </Li>
  );
}

export default Item;