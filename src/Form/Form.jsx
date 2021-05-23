import React, {useContext} from 'react'
import {Context} from '../App/App'
import {Wrapper} from './Form_styled'

const Form = () => {
  const {
    addTodo, purge, update,
    inputTitle, setInputTitle,
    inputText, setInputText,
    category, setCategory,
  } = useContext(Context);

  return (
    <Wrapper>
    {/* -----Title */}
    <label>Title : 
      <input
      type="text"
      placeholder="Title"
      value={inputTitle}
      onChange={ e => {
        setInputTitle(e.target.value)
      }}
    />
    </label>
    {/* -----Content */}
    <label>Content : 
    <input
      type="text"
      placeholder="Text"
      value={inputText}
      onChange={ e => {
        setInputText(e.target.value)
      }}
      />
      </label>
      {/* -----category */}
      <label>Category : 
      <select 
        name="category"
        value={category}
        onChange={e => {setCategory(e.target.value)}}>
        <option value="work">work</option>
        <option value="shopping">shopping</option>
        <option value="hobby">hobby</option>
      </select>
      </label>
      {/* -----Add and Purge */}
      <div id="btn">
      <button onClick={addTodo}>Add</button>
      <button onClick={update}>Update</button>
      <button onClick={purge}>Purge</button>
        <div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Form;