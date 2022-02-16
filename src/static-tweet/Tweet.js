import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import './index.css'
import Message from './Message'
import Options from './Options'
import Time from './Time'



const Tweet = ({tweetData}) => {
  console.log(tweetData);
  return (
    <div className='tweet'>
        <Avatar hash = {tweetData.gravator}/>
        <div className='content'>
          <Author autor = {tweetData.author}/> 
          <Time time = {tweetData.timestamp}/>
          <Message text = {tweetData.message}/>
          <div className='buttons'>
            <Options />  
          </div>
        </div>
        
    </div>
  )
}

export default Tweet



//props




