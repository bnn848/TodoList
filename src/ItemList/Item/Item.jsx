import React, {useContext} from 'react'
import {Context} from '../../App/App'
import {Li} from './Item_styled'

const Item = ({todo}) => {
  const {toggleIsDone, deleteTodo, edit} = useContext(Context);
  
  return (
    <Li>
      <input type="checkbox" onChange={() => toggleIsDone(todo.id)}/>
      <span>{todo.title}</span>
      <span> : {todo.content}</span>
      <span>[{todo.category}]</span>
      <span>posted at : {todo.time}</span>
      <div id = "Btn">
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() =>edit(todo.id)}>Edit</button>
      </div>
    </Li>
  );
}

export default Item;