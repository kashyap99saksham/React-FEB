import React from 'react'
import ClassCompo from '../DyingCompo'
import ComponentDM from './ComponentDM'
import Construct from './Construct'
import Func from './Func'
import GetDerived from './GetDerived'
import GetSnapBefore from './GetSnapBefore'
import LifecycleA from './LifecycleA'
import LifecycleC from './LifecycleC'

class App extends React.Component  {
  state = {
    box1: 'kashyap',
  }
  changeMyState=(e)=>{
    console.log("func clickd",e);
    this.setState({box1 : e })
  }
  render()  {
    return (
      <div>
      {this.state.box1}
          <Func  myFun={this.changeMyState} propsData={this.state.box1}/>
      </div>
    )
  }
  
}

export default App