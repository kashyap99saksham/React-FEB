import React, { useState } from 'react'
import Student from './Student'

const StudentList = () => {

    const [students, setStudents] = useState([
        {Name:"saksham",studentClass:"X",info:"Nulla ea velit dolore excepteur consectetur incididunt tempor eiusmod commodo."},
        {Name:"Kashyap",studentClass:"XI",info:"Occaecat laboris ea sunt do velit."},
        {Name:"Abc",studentClass:"XII",info:"Labore culpa pariatur esse sint non do in dolore commodo."},
    ])

    return (
        <div className='d-flex justify-content-around'>
            { students.map( (student,index)=>
                <Student key={index} name={student.Name} studentClass={student.studentClass} info={student.info}/>
             ) } 
        </div>
    )
}

export default StudentList