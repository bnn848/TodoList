import React from 'react'

const Work = ({showWork}) => {
  if (!showWork) {
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

export default Work;