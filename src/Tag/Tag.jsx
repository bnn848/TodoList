import React from 'react'
import {Wrapper} from './Tag_styled'

const Tag = () => {

  return (
    <Wrapper>
      <h3>Category</h3>
      <dl>
        <div>
          <dt>Work</dt>
          <dd>Item1</dd>
          <dd>Item2</dd>
          <dd>Item3</dd>
        </div>
        <div>
          <dt>Shopping</dt>
          <dd>Item1</dd>
          <dd>Item2</dd>
          <dd>Item3</dd>
        </div>
        <div>
          <dt>Hobby</dt>
          <dd>Item1</dd>
          <dd>Item2</dd>
          <dd>Item3</dd>
        </div>
      </dl>
    </Wrapper>
  );
}

export default Tag;