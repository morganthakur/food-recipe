import React from 'react'
import './App.css'

import Header from './components/Header/Header'

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foodItem/:title" element={<RecipeDetails />} />

        </Routes>
    <Footer />

      </BrowserRouter>
    </div>

  )
}

export default App