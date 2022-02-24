import React from 'react'
import About from './Routing/About'
import Contact from './Routing/Contact'
import Footer from './Routing/Footer'
import Header from './Routing/Header'
import Home from './Routing/Home'

const App = () => {
    return (
        <div>
           <Header />
           <Home />
           <About />
           <Contact />
           <Footer />
        </div>
    )
}

export default App