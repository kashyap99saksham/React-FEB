import React from 'react'
import Cake from '../Components/Cake'
import Garage from './Garage'
import Goal from './Goal'
import Login from './Login'


const cars = [ 'Ford' , 'BMW' , 'Audi' ]

const App = () => {
  return (
    <div>
       {/* <Login loggedIn = {true} /> */}
       {/* <Garage cars={cars} /> */}
       <Goal isGoal={true} />
    </div>
  )
}

export default App


// conditional rendering
// if else 
