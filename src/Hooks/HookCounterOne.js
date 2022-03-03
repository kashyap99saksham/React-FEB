import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const HookCounterOne = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [toggle, setToggle] = useState(false)

  // const [name2, setName3] = useState('')
  // const [name3, setName3] = useState('')

// useEffect( () => {                      // called in mouting + change in any state value
//   console.log("Called every time");
// })

// useEffect( () => {                    // (mouting + change in 'count' state only)
//   console.log("useEffect Called");
//   document.title = `Clicked ${count} Times`
// } , [count] )


// useEffect( () => {                    // ( Only called in mouting phase )
//   alert("Welcome to my webPage")
// } , [] )


  return (
    <div>

      {/* <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />

      <button onClick={
        () => setCount( count + 1 )
      } >
        Click {count} Times
      </button> */}


      {
        toggle ? <ChildComponent /> : ''
      }

      <button onClick={()=>setToggle( !toggle )}>Show | Disable</button>



    </div>
  )
}

export default HookCounterOne