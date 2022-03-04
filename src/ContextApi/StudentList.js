import React, { useState } from 'react'
import { useContext } from 'react'
import Student from './Student'
import { StudentContext } from './StudentContext'

const StudentList = () => {

    const [students, setStudents] = useContext(StudentContext)

    return (
        <div className='d-flex justify-content-around'>
            { students.map( (student,index)=>
                <Student key={index} name={student.Name} studentClass={student.studentClass} info={student.info}/>
             ) } 
        </div>
    )
}

export default StudentList