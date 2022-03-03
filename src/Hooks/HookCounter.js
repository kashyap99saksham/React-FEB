import React, { useEffect, useState } from 'react'

const HookCounter = (props) => {

    const [ items, setItems ] = useState("") 

    useEffect( () => {
        console.log("hiiii");
    } )

    return (
       <div>
           {items}
           <button onClick={ ()=>setItems("saksham") }> Change Value </button>
       </div>
    )
}

export default HookCounter





// es6
// function sum(a,b,c) {
//     console.log(a,b,c);
// }
// var arrVal = [5,2,1]
// sum(...arrVal)




// items = [ 
//     {
//         id:1,
//         value:10
//     },
//     {
//         id:2,
//         value: 4
//     },
//     {
//         id:3,
//         value: 2
//     }
// ]

// items.map( (val)=>{
//     <li> {val.id}{val.value} </li>
// } )

{/* <li> saksham </li>
<li> kashyap </li>
<li> name </li> */}




// useState hook allow to use state in functional component.
// In classes , the state is always an Object.
// useState hook return an array with 2 elelent.
// first element is current value,
// second element is a state setter function.
// when working with object or array, always make sure to use spread operator.
// use key when using map


// componentDidMount() {
//     // logic 1
//     // logic 2
//     // logic 3
// }
// componentDidUpdate() {

// }


// <div>
//     hiiii
//     <ChildComp />
// </div>