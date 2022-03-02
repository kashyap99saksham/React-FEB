import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import DetailPage from './DetailPage'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import LaptopList from './LaptopList'
import MobileList from './MobileList'
import PageNotFound from './PageNotFound'
import Product from './Product'
import ProductDesc from './ProductDesc'

const App = () => {
    return (

    <Router>
        <Header />

        <Routes>
            <Route path='/' element={ <Home />  } />
            
            <Route path='/products' element={ <Product />} > 
                <Route path='mobile' element={ <MobileList /> }>
                    <Route path=':myMobileParam' element={<ProductDesc /> }/>
                </Route>
                <Route path='laptop' element={ <LaptopList /> } />
            </Route>

            <Route path='/detailpage' element={<DetailPage /> }/>


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