import React, {Component} from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor()   {
        super()                         // It is used to call the constructor of its parent class.
        this.state = {
            name:"sakasham"
        }
        console.log("LifecycleA - constructor");
    }

    static getDerivedStateFromProps(props, state)   {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    // function () {
    //     this.setState( {
    //        name:'kashyap' 
    //     } )
    // }

    render()    {
        console.log("LifecycleA render");
        return (
            <>
            <h1>LifecycleA</h1>
            <LifecycleB />
            </>
        )
           
    }
}
export default LifecycleA