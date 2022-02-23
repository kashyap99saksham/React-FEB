import React, { Component } from 'react'

class GetDerived extends Component {

    constructor(props)   {            // 
        super(props);
        this.state = {
            stateName:this.props.propsData
        }
        console.log("child constructor ")
    }
    // static getDerivedStateFromProps(props,state)  {
    //     return { stateName : props.propsData }
    // }

  render() {
    console.log("render child")

    return (
      <div>This is {this.state.stateName}</div>
    )
  }
}

export default GetDerived