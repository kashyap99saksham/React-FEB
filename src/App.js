import React from 'react'
import { Provider } from 'react-redux'
import OurCounter from './REDUX PART 3/OurCounter'
import store from './REDUX PART 3/store'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <OurCounter />
            </div>
        </Provider>
    )
}

export default App



// REDUX SAGA - IS A MIDDLEWARE LIBRARY USED TO ALLOW A REDUX STORE
// TO INTERACT WITH RESOURCES OUTSIDE OF ITSELF ASYNCHRONOUSLY.
