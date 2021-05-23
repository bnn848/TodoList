import React, {useContext} from 'react'
import {Context} from '../App/App'
import {Wrapper} from './Tag_styled'

const Tag = () => {
  const {sort} = useContext(Context);
  
  return (
    <Wrapper>
      <h3 onClick={() => sort('')}>Category</h3>
      <dt onClick={() => {
        sort('work')
      }}>work</dt>
      <dt onClick={() => {
        sort('shopping')
      }}>Shopping</dt>
      <dt onClick={() => {
        sort('hobby')
      }}>Hobby</dt>
    </Wrapper>
  );
}

export default Tag;