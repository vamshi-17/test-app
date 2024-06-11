import React, { Component } from 'react'

export class ClassClick extends Component {
  
  clickHandler(){
    console.log("Button Clicked in class component");
  }

  render() {
    return (
      <button onClick={this.clickHandler}>Click</button>
    )
  }
}

export default ClassClick