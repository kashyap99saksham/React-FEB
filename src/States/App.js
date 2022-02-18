// state -- class component


// state is a plain javascript Object used by react to respresent about component's current situation. 


// state = {

// }

import React from 'react'
import Message from './Message'

const App = () => {
  return (
    <div>
        <Message name="saksham"/>  //this
        <Message name="saksham"/>
        <Message name="saksham"/>

    </div>
  )
}

export default App