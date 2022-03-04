import React, { createContext, useState } from "react";


export const StudentContext = createContext();

export const StudentProvider = ( props ) => {

    const [students, setStudents] = useState([])

    return (
        <StudentContext.Provider value={ [students,setStudents] }>
            { props.children }
        </StudentContext.Provider>
    )

}

{/* <childCompo>
    <h1>Helllo</h1>
</childCompo> */}