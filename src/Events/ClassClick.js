import React, { Component } from 'react'


class ClassClick extends Component {

    clickHandler() {
        console.log('Cliked from class compo.');
    }

    render() {
        return (
            <div>
                <button onClick={ this.clickHandler }>Click from Class</button>
            </div>
        )
    }
}

export default ClassClick


// props // this.props
// state // this.state
// function // this.functioName


// function abc()  {
    
// }
// abc()