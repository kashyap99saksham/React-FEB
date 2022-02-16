import React from 'react'
import Inline from './Components/Inline'
// import Stylesheet from './Components/Stylesheet'
import './Components/appStyle.css'
import style from './Components/appStyle.module.css'
import Tweet from './static-tweet/Tweet'

const testTweet = {
    message : "Something about cats.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}

const App = () => {
    return (
        <div>
          <Tweet tweetData = {testTweet}/>

        </div>
    )
}

export default App


// TWO EXPORT ways :
// 1. export default
// 2. name export



// CSS IN REACT
// 1. css stylesheets
// 2. inline styling 
// 3. Css Modules



{/* <Tweet data={testTweet}/>

greet('saksham') */}





// greet( name ) {
//     print(name)
// }
// greet('saksham') //caling


// function Greet(name) {
//     return 'hi'+name
// }

// <Greet name="saksham" />