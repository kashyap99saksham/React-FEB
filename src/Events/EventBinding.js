import React, { Component } from 'react'
import ClassClick from './ClassClick';

class JK extends Component {
  
    state = {
        message : 'Welcome User' 
    }

    // clickHandler() {

    //     // this.state.message = 'GoodBye'

    //     console.log(this); // undefined
        
    //     this.setState( { 
    //             message : 'GoodBye User, Thanks for Visit, come again!' 
    //         } )

    // }

    clickHandler = () => {
      
        this.setState( { 
                    message : 'GoodBye User, Thanks for Visit, come again!' 
                } )
    }

    render() {
    console.log("render from parent");
    return (
      <div>
          <h1> { this.state.message } </h1>
          <button onClick={ this.clickHandler }>Change Msg</button>


          {/* <button onClick={ this.clickHandler.bind(this) }> Click </button> */}




          


      </div>
    )
  }
}

export default JK



// 1. Binding in render method -- this.clickHandler.bind(this)
// 2. Arrow function in render method
// 3. Arrow function for your method




// () => this.clickHandler()

// const abc = () => this.clickHandler

// abc()

// function abc() {

// }

// abc()

// const abc =  ( ) => {

// }


