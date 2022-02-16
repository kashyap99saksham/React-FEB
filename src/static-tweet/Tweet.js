import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import './index.css'
import Message from './Message'

const Tweet = () => {
  return (
    <div className='tweet'>
        <Avatar />
        <div className='content'>
          <Author />
          <Message />
        </div>
        
    </div>
  )
}

export default Tweet