import React from 'react'

const Avatar = ({hash}) => {

   let url = `https://gravatar.com/avatar/${hash}` 
  return (
    <img src = {url}
    className='avatar'
    alt='avatar' />
  )
}

export default Avatar