import React from 'react'
import { useLocation } from 'react-router-dom'


const DetailPage = () => {
    const location = useLocation();
    console.log(location);
  return (
      <>
        <h1>hii</h1>
        <div>This Mobile is - { location.state.name } </div>
    </>
  )
}

export default DetailPage