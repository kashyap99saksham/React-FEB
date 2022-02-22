import React, { Component } from 'react'

class Construct extends Component {

    constructor()   {
        super();
        this.state = {
            name: 'Constructor Method'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()  {
        console.log("heyy",this);       
    }

  render() {
    return (
      <div>Construct {this.state.name} <button onClick={this.handleClick}>click</button></div>
    )
  }
}

export default Construct