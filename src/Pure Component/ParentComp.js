import React, { Component } from 'react'
import { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Saksham"
      }
    }
    componentDidMount() {
        setInterval( () => {
            this.setState( {
                name: "Saksham"
            } )
        },5000 )
    }

    render() {
        console.log("************************* Parent COmponent *************************");
        return (
            <div> 
                ParentComp 
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp



// we can create a pure component by extending the PureComponent Class
// A PureComponent Implements shouldComponentUpdate lifecycle method by perfoming comparision.
// If there is no difference, then component is not re-rendered - (Perfomance Boost)


// component.
