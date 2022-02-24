import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

import About from './Routing/About'
import Contact from './Routing/Contact'
import Footer from './Routing/Footer'
import Header from './Routing/Header'
import Home from './Routing/Home'
import LaptopList from './Routing/LaptopList'
import MobileList from './Routing/MobileList'
import PageNotFound from './Routing/PageNotFound'
import Product from './Routing/Product'

const App = () => {
    return (

    <Router>
        <Header />

        <Routes>
            <Route path='/' element={ <Home />  } />
            
            <Route path='/products' element={ <Product />} > 
                <Route path='mobile' element={ <MobileList /> } />
                <Route path='laptop' element={ <LaptopList /> } />
            </Route>



            
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