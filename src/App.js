import React from 'react'
import Inline from './Components/Inline'
// import Stylesheet from './Components/Stylesheet'
import './Components/appStyle.css'
import style from './Components/appStyle.module.css'
import Tweet from './static-tweet/Tweet'


const App = () => {
    return (
        <div>
          <Tweet />
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