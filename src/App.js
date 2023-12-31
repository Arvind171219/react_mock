import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
