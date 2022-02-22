import React, { Component } from 'react'

class GetDerived extends Component {

    constructor()   {
        super();
        this.state = {
            stateName:this.props.propsData
        }
    }
    // static getDerivedStateFromProps(props,state)  {
    //     return { stateName : props.propsData }
    // }

  render() {

    return (
      <div>This is a {this.state.stateName}</div>
    )
  }
}

export default GetDerived