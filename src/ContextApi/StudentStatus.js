import React from 'react'
import { useContext } from 'react'
import { StudentContext } from './StudentContext'

const StudentStatus = () => {
    let [students, setStudents] = useContext(StudentContext);
    return (
        <div><div className="jumbotron jumbotron-fluid">
            <div className="container">
                <em className="display-4">Total students are : {students.length}</em><br/><br/><br/>
            </div>
        </div></div>
    )
}

export default StudentStatus