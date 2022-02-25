import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDesc = () => {

    const { myMobileParam } = useParams();

  return (
    <div>
        <h1> Product Name :  {myMobileParam} </h1>
        <button>Description</button>
    </div>
  )
}

export default ProductDesc