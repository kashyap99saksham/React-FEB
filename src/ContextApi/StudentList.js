import React, { useState } from 'react'
import { useContext } from 'react'
import Student from './Student'
import { StudentContext } from './StudentContext'

const StudentList = () => {

    const [students, setStudents] = useContext(StudentContext)
    
    

    const deleteStudent = (ind) => {
        let tempArr = []
        students.map( 
            (student) => 
                (student.id === ind) ? 
                    '' : 
                    tempArr.push(student) 
        )

        setStudents(tempArr)
    }

    return (
        <div className='d-flex justify-content-around'>
            { students.map( (student,index)=>
                <Student key={index}  index={ student.id } deleteStudent={deleteStudent} name={student.Name} studentClass={student.studentClass} info={student.info}/>
             ) } 
        </div>
    )
}

export default StudentList


{/* <div>
    <div>
        <span>hello </span>
    </div>
</b> */}


// [ { } [ ] ( ]




// If a string is not nested correctly, return the first element encountered where, 
// if changed into a different element, would result in aproperly formatted string. 
// If the string is not formatted properly, then it will only be one element that needs to be changed.
// For example:if str is "<div><i>hello</i>world</b>"
// then your program should return the string div because if the first <div> element were changed intoa <b>, 
// the string would be properly formatted.
// ExamplesInput: "<div><div><b></b></div></p>"Output: div 


// strObj = {
//     '<div.':'</div>',
//     '<p>':'</p>',
//     '<b>':'</b'>
// }

// opening = ['div','p']
// closing = ['/div','/p']



// 0
// <div>               1
//     <div>             2
//         <b>  3 </b>   2 
//     </div>          1
// </b>        1





// a b c d e f    find = (e)

// let temp = []
// arr.map( (e)=>{
//     (e===find) ?  ''  : temp.push(e)          // a b c d  f
// } )
// setStudents(temp)  // a b c d  f
