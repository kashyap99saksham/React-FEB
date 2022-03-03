import React, { useEffect, useState } from 'react'

const ChildComponent = () => {
    useEffect( ()=>{
        console.log("Mouting");
        return ()=>{ console.log("I am going , BBYE :-( "); } 
    }, [])

    return (
        <div>click</div>
    )
}

export default ChildComponent