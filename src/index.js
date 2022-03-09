import React from "react";
import ReactDOM from "react-dom";
import App  from './App'
import store from './REDUX/store'
import {Provider} from 'react-redux'
 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



// name export - {} | exact name of compo.
// export default - {} cannot use   | free to use any

// React-redux is the official redux UI binding library for react


















// Functional Component - stateless
// Simple function
// Absence of 'this' keyword
// solution without using state
// Mainly responsible for the UI
// Stateless




// Class component - stateful
// More feacture rich
// maintains their own private data - state
// Complex UI logic
// Provide lifecycle methods
// stateful




















