import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'

import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Siggnup from './pages/Siggnup'
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Siggnup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
      

    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}
