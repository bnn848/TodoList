import React, {useContext} from 'react'
import {Context} from '../App/App'
import {Wrapper} from './Tag_styled'

const Tag = () => {
  const {setSortCategory} = useContext(Context);
  
  return (
    <Wrapper>
      <h3 onClick={() => setSortCategory('')}>Category</h3>
      <dt onClick={() => {
        setSortCategory('work')
      }}>work</dt>
      <dt onClick={() => {
        setSortCategory('shopping')
      }}>Shopping</dt>
      <dt onClick={() => {
        setSortCategory('hobby')
      }}>Hobby</dt>
    </Wrapper>
  );
}

export default Tag;