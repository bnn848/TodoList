import React from 'react'

const Hobby = ({showHobby}) => {
  if (!showHobby) {
    return null;
  }
  return (
    <div >
      <dd>Item1</dd>
      <dd>Item2</dd>
      <dd>Item3</dd>
    </div>
  )
}

export default Hobby;