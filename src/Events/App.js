// event handling
// 1. Functional Component
// 2. Class Component

import React from 'react'
import ClassClick from './ClassClick'
import JK from './EventBinding'
import FunctionClick from './FunctionClick'

const App = () => {

    

  return (
    <div>
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        <JK />
       
    </div>
  )
}

export default App



// onClick = { this.myFun }