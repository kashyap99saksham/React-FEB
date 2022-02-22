import React, {Component} from 'react'

class LifecycleB extends Component {
    constructor()   {
        super()                         // It is used to call the constructor of its parent class.
        this.state = {
            name:"sakasham"
        }
        console.log("LifecycleB - constructor");
    }

    static getDerivedStateFromProps(props, state)   {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    // function () {
    //     this.setState( {
    //        name:'kashyap' 
    //     } )
    // }

    render()    {
        console.log("LifecycleB render");
        return (<>
                <h1> LifecycleB </h1>
                {/* <ChildCompo /> */}
            </>
        )
    }
}
export default LifecycleB