import React from 'react'
import ClickCounter from './HOC/ClickCounter'
import HoverComp from './HOC/HoverComp'
import ParentComp from './Pure Component/ParentComp'

const App = () => {
  return (
    <div>
        <ClickCounter />
        <HoverComp />
    </div>
  )
}

export default App