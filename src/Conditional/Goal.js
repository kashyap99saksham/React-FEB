import React from 'react'


const MadeGoal = () => {
    return <h1>Hurray Goooooal</h1>
}
const MissedGoal = () => {
    return <h1> MISSED :-(   </h1>
}

const Goal = (props) => {

    const isGoal = props.isGoal

  return (
      <>
            { isGoal ?  <MadeGoal />  :  <MissedGoal />    }            
      </>
  )
}

export default Goal



// ( a > 5   ?  true : false )