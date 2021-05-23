import React, {useContext} from 'react'
import {Context} from '../../App/App'
import {Li} from './Data_styled'

const Data = ({todo}) => {
  const {deleteTodo, edit} = useContext(Context);

  return (
    <Li>
      <span>{todo.title}</span>
      <span> : {todo.content}</span>
      <span>[{todo.category}]</span>
      <span>posted at : {todo.time}</span>
      <div id = "Btn">
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() => edit(todo.id)}>Edit</button>
      </div>
    </Li>
  );
}

export default Data;