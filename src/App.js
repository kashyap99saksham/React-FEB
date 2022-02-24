import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

import About from './Routing/About'
import Contact from './Routing/Contact'
import Footer from './Routing/Footer'
import Header from './Routing/Header'
import Home from './Routing/Home'
import PageNotFound from './Routing/PageNotFound'

const App = () => {
    return (

    <Router>
        <Header />

        <Routes>
            <Route path='/' element={ <Navigate to='/home'/>  } />
            <Route path='/home'  element={  <Home />   } />
            <Route path='/about' element={ <About /> }/>
            <Route path='/contact' element={ <Contact />}/>
            <Route path='*' element={ <PageNotFound /> } />
        </Routes>

        <Footer />
    </Router>

    )
}

export default App





// <div>
// <Header />       
// <Home />
// <About />
// <Contact />
// <Footer />
// </div>