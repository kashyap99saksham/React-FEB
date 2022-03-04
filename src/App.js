import React from 'react'
import AddStudent from './ContextApi/AddStudent'
import { StudentProvider } from './ContextApi/StudentContext'
import StudentList from './ContextApi/StudentList'
import StudentStatus from './ContextApi/StudentStatus'
import ClassCounter from './Hooks/ClassCounter'
import ClassCounterOne from './Hooks/ClassCounterOne'
import HookCounter from './Hooks/HookCounter'
import HookCounterOne from './Hooks/HookCounterOne'

const App = () => {
  return (

    <StudentProvider>
      <div>
          <StudentStatus />
          <AddStudent /><br/><br/><br/>
          <StudentList />
      </div>
    </StudentProvider>

  )
}

export default App

// this 

// Hooks : They allow you to use React Features without having to write a class.
// Avoids the whole confsion with 'this' keyword.

