import React, { Component } from 'react'

class ComponentDM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (res)=>res.json()
        ).then( Apidata => this.setState( { data:  Apidata} ) )
    }

    render() {
        console.log(this.state.data);
        return (
            <div>

            { this.state.data.map( ( user ) =>  <div> { user.name } </div>) }


            </div>
        )
    }
}

export default ComponentDM