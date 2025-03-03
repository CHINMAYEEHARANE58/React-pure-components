import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0,
            toggle: true
        }
    }

  render() {
    const {count, toggle} = this.state

    let handleClick =()=>{
        if(toggle){
            this.setState({count:count+1})
        }
    }

    return (
      <>
        <h2>Simple Component</h2>
        <h3>{count}</h3>
        <button onClick={()=>{this.setState({toggle:!toggle})}}>Set Toggle</button>
        <button onClick={handleClick}>Counter</button>
      </>
    )
  }
}
