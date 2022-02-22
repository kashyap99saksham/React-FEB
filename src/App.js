import React from 'react'
import Construct from './Lifecycle/Construct'
import GetDerived from './Lifecycle/GetDerived'
import LifecycleA from './Lifecycle/LifecycleA'

const App = () => {
  return (
    <div>
        <GetDerived propsData="Props Data" />
    </div>
  )
}

export default App