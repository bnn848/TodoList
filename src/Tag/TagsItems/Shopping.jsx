import React from 'react'

const Shopping = ({showShopping}) => {
  if (!showShopping) {
    return null;
  }
  return (
    <div>
      <dd>Item1</dd>
      <dd>Item2</dd>
      <dd>Item3</dd>
    </div>
  )
}

export default Shopping;