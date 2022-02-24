import React from 'react'

const Func = (props) => {
    console.log(props.myFun);
  return (
    <div>This is function compom.
    <button onClick={()=> props.myFun('saksham')}>My Func Btn</button>
    </div>
  )
}

export default Func