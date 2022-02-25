import React from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'

const ProductDesc = () => {
    const { myMobileParam } = useParams();
    const navigate = useNavigate()
    const myData = {
        name:'samsung',
        price:29000
    }
    const MyFun = () => {
        
        if(5<2) {
            navigate('detailpage')
        }
        else navigate('error')
    }
// console.log(params);
  return (
    <div>
        <h1> Product Name :  {myMobileParam} </h1>
        <button 
        className='btn btn-warning'
        onClick={ ()=>navigate('/detailpage')   }
        >
            Go to Details
        </button>
    </div>
  )
}

export default ProductDesc


// 1. while navigating to different path [ pass data as well ]
// 2. before navigating to different path [ perform js logic ]