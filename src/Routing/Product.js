import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div style={{ textAlign:'center' }}>
        <h1>Products</h1>
        <h3>Every Products Are Below : </h3>
        <Link className='btn btn-success' to='/products/mobile'>Mobile</Link>
        <Link className='btn btn-danger' to='/products/laptop'>Laptop</Link>
        <Outlet />
    </div>
  )
}

export default Product