import React, { useState } from 'react'

const HookCounter = () => {

    const [ name, setName ] = useState( { firstName : '' , lastName: '' } )

    return (
        <form>
            <h1>{ JSON.stringify(name) } </h1>
            
            <input type='text' value = {name.firstName} onChange={ 
                (e)=> setName( { ...name, firstName: e.target.value } ) 
            } />

            
            <input type='text' value={name.lastName} onChange={ 
                (e)=> setName( { ...name, lastName: e.target.value } ) 
            } />
            
        </form>
    )
}

export default HookCounter





// es6
// function sum(a,b,c) {
//     console.log(a,b,c);
// }
// var arrVal = [5,2,1]
// sum(...arrVal)


