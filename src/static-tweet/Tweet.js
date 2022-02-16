import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import './index.css'
import Message from './Message'
import Options from './Options'
import Time from './Time'

const Tweet = () => {
  return (
    <div className='tweet'>
        <Avatar />
        <div className='content'>
          <Author /> <Time />
          <Message />
          <div className='buttons'>
            <Options />  
          </div>
        </div>
        
    </div>
  )
}

export default Tweet



//props




