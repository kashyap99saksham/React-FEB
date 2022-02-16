import React from 'react'

const Author = ({autor}) => {
    console.log(autor);
    let { name, handle } = autor
  return (
      <span className='author'>
        <span className='name'>{name}</span>
        <span className='handle'>{handle}</span>
      </span>
  )
}

export default Author