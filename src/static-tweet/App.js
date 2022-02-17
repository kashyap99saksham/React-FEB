import React from 'react'
import Inline from '../Components/Inline'
// import Stylesheet from './Components/Stylesheet'
import './Components/appStyle.css'
import style from './Components/appStyle.module.css'
import Tweet from './Tweet'

const testTweet1 = {
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
const testTweet2 = {
    message : "Est incididunt laboris veniam ad sint duis nisi.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}

const testTweet3 = {
    message : "Magna ut proident commodo consequat officia velit dolore nostrud velit sunt deserunt.",
    gravator : "xyz",
    author : {
        handle : "catperson",
        name : "Cat Person ABC"
    },
    likes : 2,
    retweet : 0,
    timestamp : "3 hr ago"
}

const testTweet4 = {
    message : "Qui irure Lorem sunt minim est laborum labore.",
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
          <Tweet tweetData = {testTweet1}/>
          <Tweet tweetData = {testTweet2}/>
          <Tweet tweetData = {testTweet3}/>
          <Tweet tweetData = {testTweet4}/>

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