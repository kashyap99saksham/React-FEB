import React, { Component } from "react";

class Message extends Component {

    state = {
        message : "Hello Welcome!"
    }

    render() {
        console.log(this);
        return (
            <>
            <div>  {this.state.message} "Hello Welcome!" </div>       
            </>
        )
    }
}
export default Message

// render : required method : implement in class compoennt to render JSX.

// we cannot update readOnly(props data) in child component


