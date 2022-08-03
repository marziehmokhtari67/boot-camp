import React from 'react'
import{Route,Routes} from 'react-router-dom'
import{useLocation} from'react-router-dom'
import SharedLayout from './SharedLayout'
import './index.css'
import About from './pages/About'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Contact from './pages/Contact'
import BootCamp from './pages/BootCamp'
import REact from './pages/bootCamps/React'
import Java from './pages/bootCamps/Java'
import Python from './pages/bootCamps/Python'
import Php from './pages/bootCamps/Php'
import {AnimatePresence} from 'framer-motion'
function AnimatedRoute() {
    const location=useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname} >
    <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/bootCamp' element={<BootCamp/>}/>
      <Route path='/bootCamp/java' element={<Java/>}/>
      <Route path='/bootCamp/php' element={<Php/>}/>
      <Route path='bootCamp/python' element={<Python/>}/>
      <Route path='bootCamp/react' element={<REact/>}/>

    </Route>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoute
