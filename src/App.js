import React from 'react'
import DyingCompo from './DyingCompo'
import ComponentDM from './Lifecycle/ComponentDM'
import Construct from './Lifecycle/Construct'
import GetDerived from './Lifecycle/GetDerived'
import GetSnapBefore from './Lifecycle/GetSnapBefore'
import LifecycleA from './Lifecycle/LifecycleA'
import LifecycleC from './Lifecycle/LifecycleC'

class App extends React.Component  {
  state = {
    show: false
  }
  render()  {
    return (
      <div>
          { this.state.show ? <DyingCompo /> : '' }
          <button onClick={()=>this.setState({show: !this.state.show})}>Show</button>
      </div>
    )
  }
  
}

export default App