import React from 'react'

function FunctionClick() {
  
  function clickHandler() {
    console.log("Button clicked")
  }

  // const clickHandler = () => {
  //   console.log("Button clicked")
  // }
  
  return (
    <button onClick={clickHandler}>Click Me</button>
  )
}

export default FunctionClick